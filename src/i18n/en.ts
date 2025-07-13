import { Messages } from './index';

const englishMessages: Messages = {
  // Commands
  'commands.speechify.title': 'Speechify: Convert Text to Speech',
  'commands.speechify.description': 'Convert selected text to speech using Azure Speech Services',
  'commands.voiceSettings.title': 'Speechify: Show Voice Settings',
  'commands.voiceSettings.description': 'Display current voice configuration and settings',
  'commands.configureVoice.title': 'Speechify: Configure Voice Settings',
  'commands.configureVoice.description': 'Configure voice name, gender, and style preferences',
  'commands.selectRole.title': 'Speechify: Select Voice Role',
  'commands.selectRole.description': 'Select voice roleplay character for neural voices',
  'commands.configureAzure.title': 'Speechify: Configure Azure Settings',
  'commands.configureAzure.description': 'Configure Azure Speech Services credentials and region',
  
  // Notifications
  'notifications.success.speechGenerated': 'Speech generated successfully! Audio saved to: {0}',
  'notifications.success.speechGeneratedMultiple': 'Speech generated successfully! {0} audio files created.',
  'notifications.success.configUpdated': 'Configuration updated successfully.',
  'notifications.success.voiceSettingsUpdated': 'Voice settings updated successfully.',
  'notifications.success.voiceStyleUpdated': 'Voice style updated successfully.',
  'notifications.success.voiceStyleChanged': 'Voice style updated to: {0}',
  'notifications.success.voiceRoleChanged': 'Voice role updated to: {0}',
  'notifications.success.azureSettingsUpdated': 'Azure Speech Services configuration updated.',
  'notifications.info.noStylesAvailable': 'Voice "{0}" does not support different styles.',
  'notifications.info.noRolesAvailable': 'Voice "{0}" does not support different roles.',
  
  // Errors
  'errors.noActiveEditor': 'No active editor found. Please open a file first.',
  'errors.noTextSelected': 'No text selected. Please select some text first.',
  'errors.noTextContent': 'No text content to convert.',
  'errors.configurationIncomplete': 'Azure Speech Services configuration is incomplete.',
  'errors.speechGenerationFailed': 'Failed to generate speech: {0}',
  'errors.voiceListNotAvailable': 'Voice list not available.',
  'errors.voiceListEmpty': 'Voice list is empty.',
  'errors.voiceConfigurationFailed': 'Failed to configure voice settings.',
  'errors.failedToLoadVoiceSettings': 'Failed to load voice settings.',
  'errors.failedToConfigureVoice': 'Failed to configure voice settings.',
  'errors.failedToConfigureAzure': 'Failed to configure Azure settings.',
  'errors.failedToSelectStyle': 'Failed to select voice style.',
  'errors.currentVoiceNotFound': 'Current voice not found in the voice list.',
  'errors.voiceNoStyles': 'Voice "{0}" does not support different styles.',
  'errors.failedToSelectRole': 'Failed to select voice role.',
  'errors.invalidCredentials': 'Invalid Azure credentials.',
  'errors.rateLimited': 'Rate limit exceeded. Please try again later.',
  'errors.invalidRequest': 'Invalid request parameters.',
  'errors.networkError': 'Network error during synthesis.',
  'errors.fileWriteError': 'Failed to save audio file.',
  'errors.fileDeleteError': 'Failed to delete audio file.',
  'errors.revealError': 'Failed to reveal file in explorer.',
  'errors.openError': 'Failed to open audio file.',
  
  // Configuration
  'config.prompts.subscriptionKey': 'Enter your Azure Speech Services subscription key',
  'config.prompts.subscriptionKeyPlaceholder': 'Your subscription key',
  'config.prompts.region': 'Enter your Azure Speech Services region',
  'config.prompts.regionPlaceholder': 'e.g., eastus, westus2, etc.',
  'config.prompts.selectVoice': 'Select voice name',
  'config.prompts.selectLocale': 'Select locale',
  'config.prompts.selectLanguage': 'Select language/region',
  'config.prompts.selectGender': 'Select voice gender',
  'config.prompts.selectStyle': 'Select voice style',
  'config.prompts.selectRole': 'Select voice role',
  
  // Progress
  'progress.convertingToSpeech': 'Converting text to speech...',
  'progress.processingChunk': 'Processing chunk {0} of {1}',
  'progress.loadingVoiceList': 'Loading voice list...',
  'progress.configuringSettings': 'Configuring settings...',
  
  // Actions
  'actions.configureNow': 'Configure Now',
  'actions.later': 'Later',
  'actions.showInExplorer': 'Show in Explorer',
  'actions.openFile': 'Open File',
  'actions.configureVoice': 'Configure Voice',
  'actions.configureAzure': 'Configure Azure',
  'actions.cancel': 'Cancel',
  'actions.ok': 'OK',
  'actions.retry': 'Retry',
  
  // Settings
  'settings.voiceName': 'Voice Name',
  'settings.voiceGender': 'Voice Gender',
  'settings.voiceStyle': 'Voice Style',
  'settings.region': 'Region',
  'settings.hasApiKey': 'Has API Key',
  'settings.current': '(current)',
  'settings.yes': 'Yes',
  'settings.no': 'No',
  
  // Voice attributes
  'voice.male': 'Male',
  'voice.female': 'Female',
  'voice.neutral': 'Neutral',
  'voice.styles.friendly': 'Friendly',
  'voice.styles.cheerful': 'Cheerful',
  'voice.styles.excited': 'Excited',
  'voice.styles.hopeful': 'Hopeful',
  'voice.styles.sad': 'Sad',
  'voice.styles.angry': 'Angry',
  'voice.styles.fearful': 'Fearful',
  'voice.styles.disgruntled': 'Disgruntled',
  'voice.styles.serious': 'Serious',
  'voice.styles.affectionate': 'Affectionate',
  'voice.styles.gentle': 'Gentle',
  'voice.styles.calm': 'Calm',
  
  // Messages
  'messages.configurationRequired': 'Speechify requires Azure Speech Services configuration to work properly.',
  'messages.azureConfigurationRequired': 'Speechify requires Azure Speech Services configuration. Would you like to configure it now?',
  'messages.azureCredentialsConfigured': 'Azure credentials configured successfully. You can now use the Speechify extension.',
  'messages.currentSettings': 'Current Speechify Settings:\\n{0}',
  'messages.processingComplete': 'Text to speech conversion completed.',
  'messages.audioFilesSaved': 'Audio files have been saved successfully.',
  'messages.extensionActivated': 'Speechify extension is now active!',
  'messages.extensionDeactivated': 'Speechify extension is now deactivated!'
};

export default englishMessages;
