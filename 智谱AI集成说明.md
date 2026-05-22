# 智谱AI视觉大模型集成说明

## 功能介绍

本项目已集成智谱AI的 **GLM-4V-Flash** 视觉大模型，用于拍照识别物理公式和图片内容。

### 主要功能
- ✅ **智能物理公式识别** - 拍照即可识别物理公式并获得详细解析
- ✅ **物理图示分析** - 分析实验装置图并解释物理原理
- ✅ **通用图片问答** - 对任意物理相关图片进行智能问答

## 如何获取 API Key

### 步骤1：注册/登录智谱AI开放平台
访问 [智谱AI开放平台](https://www.bigmodel.cn/)，注册并登录账号。

### 步骤2：创建API Key
1. 登录后进入「控制台」
2. 点击左侧菜单「API Keys」
3. 点击「创建新密钥」按钮
4. 复制生成的API Key

### 步骤3：在应用中配置
1. 打开应用，进入「我的」页面
2. 点击「API Key配置」菜单
3. 粘贴API Key并点击「保存」
4. 可以点击「测试连接」验证Key是否有效

## 模型信息

- **模型名称**：GLM-4V-Flash
- **API端点**：`https://open.bigmodel.cn/api/paas/v4/chat/completions`
- **特性**：
  - 完全免费使用
  - 支持图片Base64编码上传
  - 支持中文和英文
  - 强大的物理内容理解能力

## 技术实现

### 核心文件
- `zhipu-ai.js` - 智谱AI API调用模块
- `app.js` - 应用主逻辑（已集成智谱AI识别）
- `index.html` - 界面布局（已添加配置入口）

### API调用示例

```javascript
// 识别物理公式
const result = await recognizePhysicsFormula(imageData);

// 识别实验器材
const result = await recognizePhysicsEquipment(imageData);

// 通用图片问答
const result = await generalImageRecognition(imageData, "请分析这张图中的物理原理");
```

### 请求格式

```json
{
  "model": "glm-4v-flash",
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "image_url",
          "image_url": {
            "url": "data:image/jpeg;base64,..."
          }
        },
        {
          "type": "text",
          "text": "请详细描述这张图片中的物理公式"
        }
      ]
    }
  ]
}
```

## 使用说明

### 首次使用
1. **配置API Key**（必需）
   - 进入「我的」→「API Key配置」
   - 输入您的智谱AI API Key
   - 点击「保存」

2. **开始使用**
   - 进入「拍照识别」页面
   - 点击拍照按钮或从相册选择图片
   - 系统将自动调用智谱AI进行识别

### 功能特点
- **免费使用**：GLM-4V-Flash模型完全免费
- **智能解析**：不仅识别文字，还提供物理原理讲解
- **多语言支持**：支持中英文物理术语

## 注意事项

1. **API Key安全**：请妥善保管您的API Key，不要在公开场合分享
2. **使用额度**：免费模型有每日调用次数限制，请关注智谱AI平台的使用政策
3. **网络要求**：使用视觉识别功能需要设备联网

## 常见问题

### Q: 为什么识别失败？
A: 请检查以下事项：
- API Key是否正确配置
- 网络连接是否正常
- API Key是否还有可用额度

### Q: 没有API Key还能使用吗？
A: 可以，应用会使用本地OCR（Tesseract.js）作为备选方案，但识别效果和功能会受限。

### Q: 如何查看API Key状态？
A: 在「我的」页面的菜单中，API Key配置项右侧会显示状态：
- ✅ 表示已配置
- ⚠️ 表示未配置

## 更新日志

### v1.1.0
- 新增智谱AI视觉大模型集成
- 支持智能物理公式识别和解析
- 新增API Key配置功能
