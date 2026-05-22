/**
 * 智谱AI 文本对话 API 调用模块
 * 使用 GLM-4 模型进行智能问答
 */

// 智谱AI 文本对话配置
const ZhipuChatConfig = {
  apiKey: '5e4db2dc830548378c58406d638ede83.85TyOpgBUfVpzoYK',  // 内置API Key
  apiUrl: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
  model: 'glm-4'  // 文本对话模型
};

// 加载 API Key（优先使用内置Key，用户自定义Key会覆盖）
function loadZhipuChatApiKey() {
  const saved = localStorage.getItem('zhipu_chat_api_key');
  if (saved && saved.trim() !== '') {
    ZhipuChatConfig.apiKey = saved;
  }
}

// 保存 API Key（复用视觉模型的Key）
function initZhipuChatApiKey() {
  // 优先使用独立的聊天Key，否则复用视觉模型的Key
  const chatKey = localStorage.getItem('zhipu_chat_api_key');
  if (chatKey && chatKey.trim() !== '') {
    ZhipuChatConfig.apiKey = chatKey;
  } else {
    // 复用视觉模型的API Key
    const visionKey = localStorage.getItem('zhipu_api_key');
    if (visionKey && visionKey.trim() !== '') {
      ZhipuChatConfig.apiKey = visionKey;
    }
    // 如果localStorage没有，则使用内置Key（已设置默认值）
  }
}

// 检查 API Key 是否配置
function hasZhipuChatApiKey() {
  return !!ZhipuChatConfig.apiKey;
}

/**
 * 调用智谱AI文本模型进行对话
 * @param {string} userMessage - 用户消息
 * @param {Array} chatHistory - 对话历史 [{role: 'user'|'assistant', content: '...'}]
 * @param {Function} onProgress - 进度回调
 * @returns {Promise<string>} - 返回AI回复
 */
async function chatWithZhipuAI(userMessage, chatHistory = [], onProgress = null) {
  if (!ZhipuChatConfig.apiKey) {
    throw new Error('请先配置智谱AI API Key');
  }

  const headers = {
    'Authorization': `Bearer ${ZhipuChatConfig.apiKey}`,
    'Content-Type': 'application/json'
  };

  // 构建消息历史
  const messages = [
    {
      role: 'system',
      content: `你是「物理探秘」的AI物理助手，专门帮助用户解答物理相关问题。

你的职责：
1. 准确解答物理概念、公式、定律等问题
2. 提供清晰的物理原理讲解
3. 用生动的例子帮助理解抽象概念
4. 适当使用数学公式（如需要）

回答风格：
- 使用清晰易懂的中文
- 结构化展示复杂内容
- 必要时使用 LaTeX 格式表示公式
- 保持友好和专业的语气

如果问题超出物理范围，可以适当延伸但要保持专业性。`
    }
  ];

  // 添加历史对话
  chatHistory.forEach(msg => {
    messages.push({
      role: msg.role,
      content: msg.content
    });
  });

  // 添加当前用户消息
  messages.push({
    role: 'user',
    content: userMessage
  });

  const payload = {
    model: ZhipuChatConfig.model,
    messages: messages,
    stream: false,
    temperature: 0.7,
    max_tokens: 2000
  };

  try {
    if (onProgress) onProgress('正在思考...');

    const response = await fetch(ZhipuChatConfig.apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `API 请求失败: ${response.status}`);
    }

    const data = await response.json();

    if (data.choices && data.choices[0] && data.choices[0].message) {
      return data.choices[0].message.content;
    } else {
      throw new Error('API 返回数据格式错误');
    }
  } catch (error) {
    console.error('智谱AI对话错误:', error);
    throw error;
  }
}

/**
 * 物理专属问答（带上下文）
 * @param {string} question - 用户问题
 * @param {Array} history - 对话历史
 * @param {Function} onProgress - 进度回调
 * @returns {Promise<string>} - 返回回答
 */
async function physicsQA(question, history = [], onProgress = null) {
  return chatWithZhipuAI(question, history, onProgress);
}

// 初始化：加载保存的 API Key
initZhipuChatApiKey();
