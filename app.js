/**
 * 物理探秘 - 主应用逻辑
 * 构建时间: 2026-05-14 15:37
 */

// 提示：ZhipuConfig / loadZhipuApiKey / saveZhipuApiKey / hasZhipuApiKey 在 zhipu-ai.js 中已定义

// 应用状态
const AppState = {
  currentPage: 'home',
  cameraStream: null,
  cameraPreviewMode: false,
  ocrResult: '',
  chatHistory: [],
  stats: {
    ocr: 0,
    qa: 0,
    exp: 0
  },
  history: [],
  experiments: {
    pendulum: { running: false, angle: 45, length: 200, gravity: 9.8 },
    spring: { running: false, amplitude: 100, k: 0.5 },
    optics: { running: false, angle: 30, n1: 1.0, n2: 1.5 },
    circuit: { running: false, voltage: 6, resistance1: 100, resistance2: 200 },
    freepath: { running: false },
    electromagnet: { running: false },
    lens: { running: false },
    collision: { running: false },
    wave: { running: false },
    inclined: { running: false }
  }
};

document.addEventListener('DOMContentLoaded', function() {
  try {
    if (typeof loadZhipuApiKey === 'function') {
      loadZhipuApiKey();
    }
    loadStats();
    loadHistory();
    loadDailyTip();
  } catch (err) {
    console.error('[基础初始化失败] ' + err.message);
  }
  try { initTabBar(); } catch (err) { console.error('[Tab栏初始化失败] ' + err.message); }
  try { initCamera(); } catch (err) { console.error('相机初始化失败:', err); }
  try { initQA(); } catch (err) { console.error('问答初始化失败:', err); }
  try { updateStatsDisplay(); updateApiKeyStatusIcon(); } catch (err) { console.error('UI更新失败:', err); }
  if (!hasZhipuApiKey()) { console.log('提示: 请配置智谱AI API Key以启用拍照识别功能'); }
});

function initTabBar() {
  const tabs = document.querySelectorAll('.tab-item');
  if (tabs.length === 0) return;
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      switchTab(tab.dataset.page);
    });
  });
}

function switchTab(page) {
  AppState.currentPage = page;
  document.querySelectorAll('.tab-item').forEach(function(t) {
    t.classList.toggle('active', t.dataset.page === page);
  });
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.toggle('active', p.id === 'page-' + page);
  });
  closeExperiment();

  // 切到虚拟实验页时，渲染实验列表
  if (page === 'experiment') {
    if (typeof renderExperimentList === 'function') {
      renderExperimentList();
    }
  }

  // 切回拍照页时，恢复上次拍摄的照片或默认图
  if (page === 'camera') {
    showCaptured(_lastCapturedPhoto || DEFAULT_PHYSICS_IMAGE);
  }
}

// ============ 拍照功能 ============

var _lastCapturedPhoto = null;

// 默认物理主题占位图
var DEFAULT_PHYSICS_IMAGE = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">' +
  '<rect width="400" height="300" fill="#1a1a2e"/>' +
  '<circle cx="200" cy="130" r="50" fill="none" stroke="#4A90E2" stroke-width="2.5" opacity="0.4"/>' +
  '<ellipse cx="200" cy="130" rx="70" ry="25" fill="none" stroke="#E6A23C" stroke-width="2" opacity="0.5" transform="rotate(-30 200 130)"/>' +
  '<ellipse cx="200" cy="130" rx="70" ry="25" fill="none" stroke="#67C23A" stroke-width="2" opacity="0.5" transform="rotate(30 200 130)"/>' +
  '<ellipse cx="200" cy="130" rx="70" ry="25" fill="none" stroke="#F56C6C" stroke-width="2" opacity="0.5" transform="rotate(90 200 130)"/>' +
  '<circle cx="200" cy="130" r="8" fill="#4A90E2" opacity="0.7"/>' +
  '<text x="200" y="245" text-anchor="middle" fill="white" font-size="32" font-family="serif" font-style="italic" opacity="0.8">E = mc²</text>' +
  '<text x="200" y="275" text-anchor="middle" fill="#aaa" font-size="14" font-family="sans-serif">点击「📷 拍照」拍摄日常生活中的物理现象</text>' +
  '</svg>'
);

function initCamera() {
  try {
    var btn = document.getElementById('btn-capture');
    var galleryBtn = document.getElementById('btn-gallery');
    var fileInput = document.getElementById('file-input');
    if (!btn || !galleryBtn || !fileInput) return;

    showCaptured(DEFAULT_PHYSICS_IMAGE);

    btn.onclick = takePhoto;

    galleryBtn.onclick = function() {
      fileInput.value = '';
      fileInput.removeAttribute('capture');
      fileInput.click();
    };

    fileInput.onchange = function(e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function(ev) {
        showCaptured(ev.target.result);
        btnOn('📷 拍照', takePhoto);
        processOCR(ev.target.result);
      };
      reader.readAsDataURL(file);
    };
  } catch (err) { console.error('initCamera异常:', err); }
}

function takePhoto() {
  var input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.setAttribute('capture', 'environment');
  input.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0;';
  document.body.appendChild(input);

  input.addEventListener('change', function(e) {
    document.body.removeChild(input);
    var file = e.target.files[0];
    if (!file) return;
    btnOn('⏳ 处理中...');
    var reader = new FileReader();
    reader.onload = function(ev) {
      showCaptured(ev.target.result);
      btnOn('📷 拍照', takePhoto);
      processOCR(ev.target.result);
    };
    reader.readAsDataURL(file);
  });

  input.click();
}

function showCaptured(dataUrl) {
  _lastCapturedPhoto = dataUrl;
  var preview = document.getElementById('camera-preview');
  if (!preview) return;
  preview.innerHTML = '';
  preview.style.backgroundImage = '';
  var img = document.createElement('img');
  img.src = dataUrl;
  img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
  preview.appendChild(img);
}

function btnOn(text, onclick) {
  var btn = document.getElementById('btn-capture');
  if (!btn) return;
  btn.textContent = text || '📷 拍照';
  if (onclick) btn.onclick = onclick;
  btn.disabled = !onclick;
}

async function processOCR(imageData) {  // 确保API Key已加载
  if (typeof loadZhipuApiKey === 'function') {
    loadZhipuApiKey();
  }
  
  const hasApiKey = hasZhipuApiKey();
  console.log('processOCR - API Key状态:', hasApiKey ? '已配置' : '未配置');
  
  if (hasApiKey) {
    showLoading('正在调用智谱AI视觉模型...');
  } else {
    showLoading('正在初始化OCR引擎（本地模式）...');
  }
  
  try {
    // 优先使用智谱AI视觉模型
    if (hasApiKey) {
      AppState.ocrResult = await recognizePhysicsFormula(imageData, (status) => {
        showLoading(status);
      });
      
      document.getElementById('ocr-content').innerHTML = 
        '<pre style="white-space:pre-wrap;">' + AppState.ocrResult + '</pre>' +
        '<p style="color:#67C23A;font-size:12px;margin-top:10px;">✅ 智谱AI视觉模型识别完成</p>';
      
    } else {
      // 如果没有配置API Key，使用本地OCR作为备选
      showLoading('正在初始化OCR引擎（本地模式）...');
      
      try {
        const result = await Promise.race([
          Tesseract.recognize(imageData, 'eng', {  // 只用英文，减少下载
            logger: m => {
              if (m.status === 'recognizing text') {
                showLoading('识别中: ' + Math.round(m.progress * 100) + '%');
              } else if (m.status === 'loading language traineddata') {
                showLoading('正在下载语言包: ' + Math.round(m.progress * 100) + '%');
              }
            }
          }),
          new Promise((_, reject) => 
            setTimeout(() => reject(new Error('OCR识别超时，请检查网络连接')), 60000)
          )
        ]);
        
        AppState.ocrResult = result.data.text.trim() || '未识别到文字';
        
        if (result.data.confidence > 60) {
          document.getElementById('ocr-content').innerHTML = 
            '<pre style="white-space:pre-wrap;">' + AppState.ocrResult + '</pre>' +
            '<p style="color:#67C23A;font-size:12px;margin-top:10px;">✅ 识别完成 (置信度: ' + result.data.confidence.toFixed(0) + '%)</p>' +
            '<p style="color:#E6A23C;font-size:12px;margin-top:5px;">💡 建议配置智谱AI API Key以获得更智能的物理公式解析</p>';
        } else {
          document.getElementById('ocr-content').innerHTML = 
            '<pre style="white-space:pre-wrap;">' + AppState.ocrResult + '</pre>' +
            '<p style="color:#E6A23C;font-size:12px;margin-top:10px;">⚠️ 识别完成 (置信度较低)</p>' +
            '<p style="color:#909399;font-size:12px;margin-top:5px;">💡 配置智谱AI API Key可提升识别效果</p>';
        }
      } catch (ocrError) {
        console.error('OCR错误:', ocrError);
        document.getElementById('ocr-content').innerHTML = 
          '<p style="color:#F56C6C;">❌ OCR识别失败</p>' +
          '<p style="color:#909399;font-size:12px;">' + ocrError.message + '</p>' +
          '<p style="color:#E6A23C;font-size:12px;margin-top:10px;">💡 建议配置智谱AI API Key以获得更好的识别效果</p>';
        return;
      }
    }
    
    // 记录使用
    AppState.stats.ocr++;
    saveStats();
    addHistory('ocr', AppState.ocrResult);
    
  } catch (err) {
    console.error('识别错误:', err);
    document.getElementById('ocr-content').innerHTML = 
      '<p class="placeholder">识别失败: ' + escapeHtml(err.message || '请重试') + '</p>' +
      '<p style="color:#E6A23C;font-size:12px;margin-top:10px;">💡 请检查API Key是否正确配置</p>';
  }
  
  hideLoading();
}

function explainFormula() {
  if (!AppState.ocrResult) {
    showToast('请先识别公式');
    return;
  }
  
  const question = '请解释这个物理公式: ' + AppState.ocrResult;
  askQuestion(question);
  switchTab('qa');
}

function copyResult() {
  if (!AppState.ocrResult) return;

  // 优先使用 Clipboard API（需安全上下文）
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(AppState.ocrResult).then(function() {
      showToast('已复制到剪贴板');
    }).catch(function() {
      fallbackCopy(AppState.ocrResult);
    });
  } else {
    fallbackCopy(AppState.ocrResult);
  }
}

function fallbackCopy(text) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0;';
  document.body.appendChild(ta);
  ta.select();
  try {
    var ok = document.execCommand('copy');
    showToast(ok ? '已复制到剪贴板' : '复制失败，请长按手动复制');
  } catch (e) {
    showToast('复制失败，请长按手动复制');
  }
  document.body.removeChild(ta);
}

// ============ AI 问答功能 ============
function initQA() {
  try {
    const input = document.getElementById('qa-input');
    const btnSend = document.getElementById('btn-send');
    
    if (!input || !btnSend) {
      console.warn('问答相关元素未找到，跳过问答初始化');
      return;
    }
    
    btnSend.addEventListener('click', () => {
      const question = input.value.trim();
      if (question) {
        sendQuestion(question);
        input.value = '';
      }
    });
  
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const question = input.value.trim();
      if (question) {
        sendQuestion(question);
        input.value = '';
      }
    }
  });
  } catch (err) {
    console.error('问答初始化失败:', err);
  }
}

function askQuestion(question) {
  document.getElementById('qa-input').value = question;
  sendQuestion(question);
}

// 清空对话历史
function clearChatHistory() {
  AppState.chatHistory = [];
  const chatHistory = document.getElementById('chat-history');
  chatHistory.innerHTML = `
    <div class="message bot">
      <div class="avatar">🤖</div>
      <div class="content">
        <p>对话已清空！请开始新的对话。</p>
      </div>
    </div>
  `;
  showToast('对话历史已清空');
}

async function sendQuestion(question) {
  const chatHistory = document.getElementById('chat-history');
  
  // 添加用户消息
  const userMsg = document.createElement('div');
  userMsg.className = 'message user';
  userMsg.innerHTML = '<div class="avatar">👤</div><div class="content"><p>' + escapeHtml(question) + '</p></div>';
  chatHistory.appendChild(userMsg);
  
  // 滚动到底部
  chatHistory.scrollTop = chatHistory.scrollHeight;
  
  // 显示加载
  const loadingMsg = document.createElement('div');
  loadingMsg.className = 'message bot';
  loadingMsg.id = 'loading-msg';
  loadingMsg.innerHTML = '<div class="avatar">🤖</div><div class="content"><p>思考中...</p></div>';
  chatHistory.appendChild(loadingMsg);
  
  try {
    const response = await callAI(question);
    loadingMsg.querySelector('.content').innerHTML = '<p>' + response + '</p>';
    
    // 记录使用
    AppState.stats.qa++;
    saveStats();
    addHistory('qa', '问: ' + question + '\n答: ' + response);
  } catch (err) {
    loadingMsg.querySelector('.content').innerHTML = '<p>抱歉，回答失败，请稍后重试。</p>';
  }
  
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

async function callAI(question) {
  // 确保智谱AI API Key已加载（使用init函数以复用视觉模型的Key）
  if (typeof initZhipuChatApiKey === 'function') {
    initZhipuChatApiKey();
  } else if (typeof loadZhipuChatApiKey === 'function') {
    loadZhipuChatApiKey();
  }
  
  const hasChatKey = hasZhipuChatApiKey();
  console.log('callAI - Chat API Key状态:', hasChatKey ? '已配置' : '未配置');
  
  // 优先使用智谱AI进行实时问答
  if (hasChatKey) {
    try {
      // 将对话历史转换为ZhipuAI格式
      const historyForAI = AppState.chatHistory.map(msg => ({
        role: msg.role,
        content: msg.content
      }));
      
      const response = await physicsQA(question, historyForAI, (status) => {
        updateLoadingMessage(status);
      });
      
      // 保存对话历史
      AppState.chatHistory.push({ role: 'user', content: question });
      AppState.chatHistory.push({ role: 'assistant', content: response });
      
      // 保持对话历史在合理范围内（最多20轮）
      if (AppState.chatHistory.length > 40) {
        AppState.chatHistory = AppState.chatHistory.slice(-40);
      }
      
      return response;
    } catch (error) {
      console.error('智谱AI调用失败:', error);
      // 如果API调用失败，尝试使用本地知识库
      const physicsKnowledge = getPhysicsAnswer(question);
      if (physicsKnowledge) {
        return physicsKnowledge + '\n\n⚠️ 提示：智谱AI调用失败，当前使用本地知识库回答。';
      }
      throw error;
    }
  }
  
  // 如果没有配置API Key，使用本地知识库
  const physicsKnowledge = getPhysicsAnswer(question);
  if (physicsKnowledge) {
    return physicsKnowledge;
  }
  
  // 无匹配时返回提示
  return '抱歉，我目前只能回答部分物理问题。建议配置智谱AI API Key以获得更全面的问答服务。\n\n当前支持的话题包括：欧姆定律、牛顿定律、动能定理、重力、浮力、能量守恒、光的折射等。';
}

function updateLoadingMessage(status) {
  const loadingMsg = document.getElementById('loading-msg');
  if (loadingMsg) {
    loadingMsg.querySelector('.content').innerHTML = '<p>' + status + '</p>';
  }
}

function getPhysicsAnswer(question) {
  const q = question.toLowerCase();
  
  const knowledge = {
    '欧姆定律': '欧姆定律是电学基本定律，表达式为：\n\nI = U/R\n\n其中：\n• I - 电流（单位：安培 A）\n• U - 电压（单位：伏特 V）\n• R - 电阻（单位：欧姆 Ω）\n\n**内容**：导体中的电流与导体两端的电压成正比，与导体的电阻成反比。\n\n**适用范围**：适用于金属导体、电解液等纯电阻电路。',
    
    '牛顿第一定律': '牛顿第一定律（惯性定律）：\n\n一切物体在没有受到外力作用时，总保持静止状态或匀速直线运动状态。\n\n**关键点**：\n• 物体具有保持原有运动状态的特性，叫做惯性\n• 惯性是物体的固有属性，与是否受力无关\n• 一切物体都有惯性',
    
    '动能定理': '动能定理：\n\nW = ΔEk = Ek2 - Ek1\n\n其中：\n• W - 合外力做的功\n• Ek1 - 初动能\n• Ek2 - 末动能\n\n**内容**：合外力对物体做的功等于物体动能的变化量。\n\n**注意**：\n• 动能是标量，单位是焦耳（J）\n• 动能定理适用于恒力也适用于变力做功',
    
    '重力': '重力相关知识：\n\nG = mg\n\n其中：\n• G - 重力（N）\n• m - 质量（kg）\n• g - 重力加速度（≈9.8m/s²）\n\n**特点**：\n• 重力方向竖直向下\n• 重力由地球吸引产生\n• 同一地点，重力与质量成正比',
    
    '浮力': '浮力相关知识：\n\nF浮 = ρ液gV排\n\n**阿基米德原理**：\n浸在液体中的物体受到向上的浮力，浮力的大小等于它排开的液体所受的重力。\n\n**浮沉条件**：\n• 当 F浮 > G 时，物体上浮\n• 当 F浮 = G 时，物体悬浮\n• 当 F浮 < G 时，物体下沉',
    
    '能量守恒': '能量守恒定律：\n\n能量既不会凭空产生，也不会凭空消失，它只会从一种形式转化为另一种形式，或者从一个物体转移到另一个物体，而能量的总量保持不变。\n\n**常见能量形式**：\n• 机械能（动能、重力势能、弹性势能）\n• 内能\n• 电能\n• 光能\n• 化学能',
    
    '光的折射': '光的折射定律：\n\nn = sinθ1/sinθ2 = c/v\n\n其中：\n• n - 折射率\n• θ1 - 入射角\n• θ2 - 折射角\n• c - 光速\n• v - 介质中光速\n\n**折射率规律**：\n• 光从光疏介质进入光密介质，折射角小于入射角\n• 光从光密介质进入光疏介质，可能发生全反射'
  };
  
  for (const key in knowledge) {
    if (q.includes(key)) {
      return knowledge[key];
    }
  }
  
  return null;
}

// ============ 仿真实验功能（由 experiments.js 实现）============
// ============ 历史记录 ============
function showHistory() {
  const modal = document.getElementById('history-modal');
  const list = document.getElementById('history-list');
  
  if (AppState.history.length === 0) {
    list.innerHTML = '<p class="placeholder">暂无历史记录</p>';
  } else {
    const items = AppState.history.slice().reverse().map(function(item) {
      return '<div class="history-item"><div class="time">' + item.time + '</div><div class="content">' + escapeHtml(item.content.substring(0, 100)) + (item.content.length > 100 ? '...' : '') + '</div></div>';
    }).join('');
    list.innerHTML = items;
  }
  
  modal.classList.add('active');
}

function closeHistory() {
  document.getElementById('history-modal').classList.remove('active');
}

function addHistory(type, content) {
  AppState.history.push({
    type: type,
    content: content,
    time: new Date().toLocaleString('zh-CN')
  });
  saveHistory();
}

// ============ 关于 ============
function showAbout() {
  document.getElementById('about-modal').classList.add('active');
}

function closeAbout() {
  document.getElementById('about-modal').classList.remove('active');
}

// ============ API Key 配置 ============
// 内置默认 API Key（与 zhipu-ai.js 保持一致）
const DEFAULT_ZHIPU_API_KEY = '5e4db2dc830548378c58406d638ede83.85TyOpgBUfVpzoYK';

function showApiKeyModal() {
  const modal = document.getElementById('api-key-modal');
  const input = document.getElementById('api-key-input');
  
  // 优先显示用户保存的 API Key，如果没有则显示内置默认值
  const savedKey = localStorage.getItem('zhipu_api_key');
  if (savedKey && savedKey.trim() !== '') {
    // 用户已保存过自定义 Key
    input.value = savedKey;
  } else if (typeof ZhipuConfig !== 'undefined' && ZhipuConfig.apiKey) {
    // 显示 zhipu-ai.js 中的内置默认值
    input.value = ZhipuConfig.apiKey;
  } else {
    // 使用硬编码的默认值作为最后保障
    input.value = DEFAULT_ZHIPU_API_KEY;
  }
  
  document.getElementById('api-key-status').textContent = '';
  modal.classList.add('active');
}

function closeApiKeyModal() {
  document.getElementById('api-key-modal').classList.remove('active');
}

function saveApiKey() {
  const input = document.getElementById('api-key-input');
  const apiKey = input.value.trim();
  
  if (!apiKey || apiKey === '••••••••••••••••') {
    showToast('请输入有效的API Key');
    return;
  }
  
  saveZhipuApiKey(apiKey);
  document.getElementById('api-key-status').innerHTML = '<span style="color:#67C23A;">✅ API Key已保存成功！</span>';
  showToast('API Key配置成功');
  
  // 更新菜单图标
  updateApiKeyStatusIcon();
  
  // 3秒后关闭弹窗
  setTimeout(() => {
    closeApiKeyModal();
  }, 2000);
}

async function testApiKey() {
  const input = document.getElementById('api-key-input');
  const apiKey = input.value.trim();
  
  if (!apiKey || apiKey === '••••••••••••••••') {
    document.getElementById('api-key-status').innerHTML = '<span style="color:#F56C6C;">请先输入API Key</span>';
    return;
  }
  
  document.getElementById('api-key-status').innerHTML = '<span style="color:#909399;">正在测试连接...</span>';
  
  try {
    // 临时保存API Key进行测试
    const oldKey = ZhipuConfig.apiKey;
    saveZhipuApiKey(apiKey);
    
    // 创建一个简单的测试请求
    const result = await recognizeWithZhipuAI(
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
      '你好',
      'base64'
    );
    
    document.getElementById('api-key-status').innerHTML = '<span style="color:#67C23A;">✅ 连接成功！API Key有效</span>';
    
  } catch (error) {
    document.getElementById('api-key-status').innerHTML = '<span style="color:#F56C6C;">❌ 连接失败：' + escapeHtml(error.message) + '</span>';
  }
}

function updateApiKeyStatusIcon() {
  const statusIcon = document.getElementById('api-key-status-icon');
  if (statusIcon) {
    if (hasZhipuApiKey()) {
      statusIcon.textContent = '✅';
      statusIcon.style.color = '#67C23A';
    } else {
      statusIcon.textContent = '⚠️';
      statusIcon.style.color = '#E6A23C';
    }
  }
}

// ============ 每日知识 ============
function loadDailyTip() {
  var tips = [
    { title: '惯性', content: '一切物体都有保持原有运动状态的特性，这就是惯性。质量越大，惯性越大。' },
    { title: '能量守恒', content: '能量既不会凭空产生，也不会凭空消失，只能从一种形式转化为另一种形式。' },
    { title: '欧姆定律', content: '导体中的电流与两端电压成正比，与导体的电阻成反比。I = U/R' },
    { title: '光的折射', content: '光从一种介质进入另一种介质时，传播方向发生改变的现象叫做折射。' },
    { title: '机械能守恒', content: '在只有重力或弹力做功的物体系统内，动能与势能可以互相转化，但机械能总量不变。' },
    { title: '牛顿第一定律', content: '一切物体在没有受到力的作用时，总保持静止状态或匀速直线运动状态。' },
    { title: '重力', content: '地面附近的物体由于地球的吸引而受到的力叫做重力。G=mg，g≈9.8N/kg。' },
    { title: '压强', content: '物体所受压力与受力面积之比叫做压强。p=F/S。增大压力或减小受力面积可增大压强。' },
    { title: '液体压强', content: '液体内部压强随深度增加而增大，同一深度向各个方向压强相等，且与液体密度有关。' },
    { title: '阿基米德原理', content: '浸在液体中的物体所受浮力大小等于它排开的液体所受的重力。F浮=ρ液gV排。' },
    { title: '杠杆原理', content: '杠杆平衡时，动力×动力臂=阻力×阻力臂。F₁L₁=F₂L₂。' },
    { title: '滑轮组', content: '使用滑轮组时，有几段绳子承担动滑轮和物重，拉力就是物重的几分之一。' },
    { title: '分子热运动', content: '一切物质的分子都在不停地做无规则运动。温度越高，分子热运动越剧烈。' },
    { title: '比热容', content: '比热容是物质的一种特性，表示物质吸热能力的强弱。水的比热容最大，为4.2×10³J/(kg·℃)。' },
    { title: '热机效率', content: '热机用来做有用功的能量与燃料完全燃烧放出的能量之比叫做热机效率。' },
    { title: '电荷', content: '自然界只有两种电荷：正电荷和负电荷。同种电荷相互排斥，异种电荷相互吸引。' },
    { title: '串联电路', content: '串联电路中电流处处相等，总电压等于各用电器两端电压之和，总电阻等于各电阻之和。' },
    { title: '并联电路', content: '并联电路中各支路两端电压相等，干路电流等于各支路电流之和。' },
    { title: '电功率', content: '电功率表示电流做功的快慢。P=UI=U²/R=I²R。1kW·h=3.6×10⁶J。' },
    { title: '焦耳定律', content: '电流通过导体产生的热量与电流的平方、导体的电阻和通电时间成正比。Q=I²Rt。' },
    { title: '电磁感应', content: '闭合电路的一部分导体在磁场中做切割磁感线运动时产生感应电流。这是发电机原理。' },
    { title: '安培定则', content: '用右手握住螺线管，四指指向电流方向，拇指所指方向即为螺线管的N极。' },
    { title: '平面镜成像', content: '平面镜所成的像与物体大小相等、到镜面距离相等、左右相反，为虚像。' },
    { title: '凸透镜成像', content: 'u>2f成倒立缩小实像（照相机）；f<u<2f成倒立放大实像（投影仪）；u<f成正立放大虚像（放大镜）。' },
    { title: '光的反射', content: '反射光线、入射光线和法线在同一平面内，反射光线和入射光线分居法线两侧，反射角等于入射角。' },
    { title: '声音三要素', content: '音调由频率决定（频率越高音调越高），响度由振幅决定，音色由发声体本身决定。' },
    { title: '摩擦力', content: '滑动摩擦力大小与压力大小和接触面粗糙程度有关，与接触面积无关。' },
    { title: '二力平衡', content: '两个力大小相等、方向相反、作用在同一直线上、作用在同一物体上时，物体保持平衡状态。' },
    { title: '虹吸现象', content: '利用液面高度差的作用力，使液体通过弯曲的管越过高处流向低处的现象。' },
    { title: '扩散现象', content: '不同物质相互接触时彼此进入对方的现象。温度越高扩散越快。' }
  ];
  
  var tipEl = document.getElementById('daily-tip');
  if (!tipEl) return;

  function showRandomTip() {
    var tip = tips[Math.floor(Math.random() * tips.length)];
    tipEl.innerHTML = '<div class="tip-title">' + tip.title + '</div><p>' + tip.content + '</p>';
  }

  showRandomTip();
  // 每 3 分钟自动轮换 (180000 毫秒)
  setInterval(showRandomTip, 180000);
}

// ============ 本地存储 ============
function saveStats() {
  localStorage.setItem('physics_stats', JSON.stringify(AppState.stats));
}

function loadStats() {
  const saved = localStorage.getItem('physics_stats');
  if (saved) {
    AppState.stats = JSON.parse(saved);
  }
}

function saveHistory() {
  localStorage.setItem('physics_history', JSON.stringify(AppState.history));
}

function loadHistory() {
  const saved = localStorage.getItem('physics_history');
  if (saved) {
    AppState.history = JSON.parse(saved);
  }
}

function updateStatsDisplay() {
  document.getElementById('total-ocr').textContent = AppState.stats.ocr;
  document.getElementById('total-qa').textContent = AppState.stats.qa;
  document.getElementById('total-exp').textContent = AppState.stats.exp;
}

// ============ 工具函数 ============
function showLoading(text) {
  if (!text) text = '加载中...';
  document.getElementById('loading-text').textContent = text;
  document.getElementById('loading').classList.add('active');
}

function hideLoading() {
  document.getElementById('loading').classList.remove('active');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(function() {
    toast.classList.remove('show');
  }, 2000);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// 阻止默认触摸行为
document.addEventListener('touchmove', function(e) {
  // 允许滚动
}, { passive: true });
