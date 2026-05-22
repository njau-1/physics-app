/**
 * 智谱AI视觉大模型 API 调用模块
 * 使用 GLM-4V-Flash 模型进行图片识别
 */

// 智谱AI API 配置
const ZhipuConfig = {
  apiKey: '5e4db2dc830548378c58406d638ede83.85TyOpgBUfVpzoYK',  // 内置API Key
  apiUrl: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
  model: 'glm-4v-flash'  // 免费视觉模型
};

// 加载 API Key（优先使用内置Key，用户自定义Key会覆盖）
function loadZhipuApiKey() {
  // 如果用户之前保存过自定义Key，使用自定义Key
  const saved = localStorage.getItem('zhipu_api_key');
  if (saved && saved.trim() !== '') {
    ZhipuConfig.apiKey = saved;
  }
}

// 保存 API Key
function saveZhipuApiKey(apiKey) {
  ZhipuConfig.apiKey = apiKey;
  localStorage.setItem('zhipu_api_key', apiKey);
}

// 检查 API Key 是否配置
function hasZhipuApiKey() {
  return !!ZhipuConfig.apiKey;
}

/**
 * 调用智谱AI视觉模型识别图片
 * @param {string} imageData - 图片数据（Base64 或 URL）
 * @param {string} prompt - 提示词
 * @param {string} imageType - 图片类型 ('base64' 或 'url')
 * @returns {Promise<string>} - 返回识别结果
 */
async function recognizeWithZhipuAI(imageData, prompt = '请详细描述这张图片中的物理公式或物理内容', imageType = 'base64') {
  if (!ZhipuConfig.apiKey) {
    throw new Error('请先配置智谱AI API Key');
  }

  let imageUrl;
  
  if (imageType === 'base64') {
    // 将 Base64 转换为智谱AI支持的格式
    imageUrl = imageData;  // 已经是 data:image/...;base64,xxx 格式
  } else {
    imageUrl = imageData;
  }

  const headers = {
    'Authorization': `Bearer ${ZhipuConfig.apiKey}`,
    'Content-Type': 'application/json'
  };

  const payload = {
    model: ZhipuConfig.model,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'image_url',
            image_url: {
              url: imageUrl
            }
          },
          {
            type: 'text',
            text: prompt
          }
        ]
      }
    ]
  };

  try {
    console.log('开始调用智谱AI API...');
    console.log('使用的API Key:', ZhipuConfig.apiKey ? ZhipuConfig.apiKey.substring(0, 10) + '...' : '未配置');
    
    const response = await fetch(ZhipuConfig.apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });

    console.log('API响应状态:', response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMsg = errorData.error?.message || `API 请求失败: ${response.status}`;
      console.error('API错误详情:', errorData);
      throw new Error(errorMsg);
    }

    const data = await response.json();
    console.log('API响应数据:', JSON.stringify(data).substring(0, 200));
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
      return data.choices[0].message.content;
    } else {
      throw new Error('API 返回数据格式错误');
    }
  } catch (error) {
    console.error('智谱AI识别错误:', error);
    console.error('错误类型:', error.name);
    console.error('错误消息:', error.message);
    throw error;
  }
}

/**
 * 识别物理公式
 * @param {string} imageData - 图片数据
 * @param {Function} onProgress - 进度回调
 * @returns {Promise<string>} - 返回识别结果
 */
async function recognizePhysicsFormula(imageData, onProgress = null) {
  if (onProgress) onProgress('正在调用智谱AI视觉模型...');
  
  const prompt = `你是一个专业的物理教学助手。请仔细分析这张图片中的物理内容：
1. 如果是物理公式，请完整准确地写出公式，并解释每个符号的含义
2. 如果是物理图示，请描述图示内容并解释涉及的物理原理
3. 如果是物理问题，请给出解答思路
4. 请用清晰的中文进行描述`;

  try {
    const result = await recognizeWithZhipuAI(imageData, prompt, 'base64');
    
    if (onProgress) onProgress('识别完成');
    
    return result;
  } catch (error) {
    throw error;
  }
}

/**
 * 识别物理实验器材
 * @param {string} imageData - 图片数据
 * @param {Function} onProgress - 进度回调
 * @returns {Promise<string>} - 返回识别结果
 */
async function recognizePhysicsEquipment(imageData, onProgress = null) {
  if (onProgress) onProgress('正在分析实验器材...');
  
  const prompt = `请分析这张图片中的物理实验器材：
1. 列出所有可见的器材和设备
2. 说明每个器材的名称和用途
3. 分析这些器材可以完成哪些物理实验
4. 提供实验的基本操作步骤和注意事项`;

  try {
    const result = await recognizeWithZhipuAI(imageData, prompt, 'base64');
    
    if (onProgress) onProgress('分析完成');
    
    return result;
  } catch (error) {
    throw error;
  }
}

/**
 * 通用图片识别
 * @param {string} imageData - 图片数据
 * @param {string} question - 用户问题
 * @param {Function} onProgress - 进度回调
 * @returns {Promise<string>} - 返回识别结果
 */
async function generalImageRecognition(imageData, question, onProgress = null) {
  if (onProgress) onProgress('正在分析图片...');
  
  const prompt = question || '请详细描述这张图片的内容';

  try {
    const result = await recognizeWithZhipuAI(imageData, prompt, 'base64');
    
    if (onProgress) onProgress('分析完成');
    
    return result;
  } catch (error) {
    throw error;
  }
}

// 初始化：加载保存的 API Key
loadZhipuApiKey();
