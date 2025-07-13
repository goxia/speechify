import { Messages } from './index';

const chineseMessages: Messages = {
  // Commands
  'commands.speechify.title': 'Speechify: 文字转语音',
  'commands.speechify.description': '使用 Azure 语音服务将选中的文字转换为语音',
  'commands.voiceSettings.title': 'Speechify: 显示语音设置',
  'commands.voiceSettings.description': '显示当前的语音配置和设置',
  'commands.configureVoice.title': 'Speechify: 配置语音设置',
  'commands.configureVoice.description': '配置语音名称、性别和风格偏好',
  'commands.selectRole.title': 'Speechify: 选择语音角色',
  'commands.selectRole.description': '为神经语音选择角色扮演角色',
  'commands.configureAzure.title': 'Speechify: 配置 Azure 设置',
  'commands.configureAzure.description': '配置 Azure 语音服务凭据和区域',
  
  // Notifications
  'notifications.success.speechGenerated': '语音生成成功！音频已保存到：{0}',
  'notifications.success.speechGeneratedMultiple': '语音生成成功！已创建 {0} 个音频文件。',
  'notifications.success.configUpdated': '配置更新成功。',
  'notifications.success.voiceSettingsUpdated': '语音设置更新成功。',
  'notifications.success.voiceStyleUpdated': '语音风格更新成功。',
  'notifications.success.voiceStyleChanged': '语音风格已更新为：{0}',
  'notifications.success.voiceRoleChanged': '语音角色已更新为：{0}',
  'notifications.success.azureSettingsUpdated': 'Azure 语音服务配置已更新。',
  'notifications.info.noStylesAvailable': '语音 "{0}" 不支持不同的风格。',
  'notifications.info.noRolesAvailable': '语音 "{0}" 不支持不同的角色。',
  
  // Errors
  'errors.noActiveEditor': '未找到活动编辑器。请先打开一个文件。',
  'errors.noTextSelected': '未选择文本。请先选择一些文本。',
  'errors.noTextContent': '没有要转换的文本内容。',
  'errors.configurationIncomplete': 'Azure 语音服务配置不完整。',
  'errors.speechGenerationFailed': '语音生成失败：{0}',
  'errors.voiceListNotAvailable': '语音列表不可用。',
  'errors.voiceListEmpty': '语音列表为空。',
  'errors.voiceConfigurationFailed': '语音配置失败。',
  'errors.failedToLoadVoiceSettings': '加载语音设置失败。',
  'errors.failedToConfigureVoice': '配置语音设置失败。',
  'errors.failedToConfigureAzure': '配置 Azure 设置失败。',
  'errors.failedToSelectStyle': '选择语音风格失败。',
  'errors.currentVoiceNotFound': '在语音列表中找不到当前语音。',
  'errors.voiceNoStyles': '语音 "{0}" 不支持不同的风格。',
  'errors.failedToSelectRole': '选择语音角色失败。',
  'errors.invalidCredentials': 'Azure 凭据无效。',
  'errors.rateLimited': '请求频率超限。请稍后重试。',
  'errors.invalidRequest': '请求参数无效。',
  'errors.networkError': '语音合成过程中出现网络错误。',
  'errors.fileWriteError': '保存音频文件失败。',
  'errors.fileDeleteError': '删除音频文件失败。',
  'errors.revealError': '在文件资源管理器中显示文件失败。',
  'errors.openError': '打开音频文件失败。',
  
  // Configuration
  'config.prompts.subscriptionKey': '请输入您的 Azure 语音服务订阅密钥',
  'config.prompts.subscriptionKeyPlaceholder': '您的订阅密钥',
  'config.prompts.region': '请输入您的 Azure 语音服务区域',
  'config.prompts.regionPlaceholder': '例如：eastus, westus2 等',
  'config.prompts.selectVoice': '选择语音名称',
  'config.prompts.selectLocale': '选择语言区域',
  'config.prompts.selectLanguage': '选择语言/地区',
  'config.prompts.selectGender': '选择语音性别',
  'config.prompts.selectStyle': '选择语音风格',
  'config.prompts.selectRole': '选择语音角色',
  
  // Progress
  'progress.convertingToSpeech': '正在转换文字为语音...',
  'progress.processingChunk': '正在处理第 {0} 段，共 {1} 段',
  'progress.loadingVoiceList': '正在加载语音列表...',
  'progress.configuringSettings': '正在配置设置...',
  
  // Actions
  'actions.configureNow': '立即配置',
  'actions.later': '稍后',
  'actions.showInExplorer': '在文件资源管理器中显示',
  'actions.openFile': '打开文件',
  'actions.configureVoice': '配置语音',
  'actions.configureAzure': '配置 Azure',
  'actions.cancel': '取消',
  'actions.ok': '确定',
  'actions.retry': '重试',
  
  // Settings
  'settings.voiceName': '语音名称',
  'settings.voiceGender': '语音性别',
  'settings.voiceStyle': '语音风格',
  'settings.region': '区域',
  'settings.hasApiKey': '拥有 API 密钥',
  'settings.current': '(当前)',
  'settings.yes': '是',
  'settings.no': '否',
  
  // Voice attributes
  'voice.male': '男性',
  'voice.female': '女性',
  'voice.neutral': '中性',
  'voice.styles.friendly': '友好',
  'voice.styles.cheerful': '愉快',
  'voice.styles.excited': '兴奋',
  'voice.styles.hopeful': '充满希望',
  'voice.styles.sad': '悲伤',
  'voice.styles.angry': '愤怒',
  'voice.styles.fearful': '恐惧',
  'voice.styles.disgruntled': '不满',
  'voice.styles.serious': '严肃',
  'voice.styles.affectionate': '亲切',
  'voice.styles.gentle': '温和',
  'voice.styles.calm': '平静',
  
  // Messages
  'messages.configurationRequired': 'Speechify 需要 Azure 语音服务配置才能正常工作。',
  'messages.azureConfigurationRequired': 'Speechify 需要 Azure 语音服务配置。您现在要配置吗？',
  'messages.azureCredentialsConfigured': 'Azure 凭据配置成功。您现在可以使用 Speechify 扩展了。',
  'messages.currentSettings': '当前 Speechify 设置：\\n{0}',
  'messages.processingComplete': '文字转语音转换完成。',
  'messages.audioFilesSaved': '音频文件已成功保存。',
  'messages.extensionActivated': 'Speechify 扩展现已激活！',
  'messages.extensionDeactivated': 'Speechify 扩展现已停用！'
};

export default chineseMessages;
