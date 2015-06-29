OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '824879860959061', 'fac1b9cacf3df267e0cb9ed99f182b86'
end