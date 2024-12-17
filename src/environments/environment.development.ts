export const environment = {
  environmentName: 'development',
  LOGIN_URL : 'https://api.podisante.ca/api/v1/auth-service/oauth/token',
  FORGET_PASSWORD_URL  : 'https://api.podisante.ca/api/v1/auth-service/update/password/mail',
  CONFIRMATION_EMAIL_URL : 'https://api.podisante.ca/api/v1/auth-service/registration/confirm?token=',
  PASSWORD_UPDATE_TOKEN_URL : 'https://api.podisante.ca/api/v1/auth-service/update/password?token=',
  PASSWORD_UPDATE_URL : 'https://api.podisante.ca/api/v1/auth-service/update/password',
  LOG_OUT_URL : 'https://api.podisante.ca/api/v1/auth-service/logingout',
  REGISTER_URL: 'https://api.podisante.ca/api/v1/auth-service/user/create',
  INVITER_URL : 'https://api.podisante.ca/api/v1/auth-service/user/invite',
  VERIF_TOK_INVITE : 'https://api.podisante.ca/api/v1/auth-service/user/invite?token=',
  USERS_URL : 'https://api.podisante.ca/api/v1/auth-service/user/all',
  BLOCK_USER_URL : 'https://api.podisante.ca/api/v1/auth-service/update/user/enable',
  ADD_PATIENT_URL : 'https://api.podisante.ca/api/v1/patient-service/create',
  LIST_PATIENT_URL : 'https://api.podisante.ca/api/v1/patient-service/all/professional',
  ADD_SOCIO : 'https://api.podisante.ca/api/v1/patient-service/socio',
  ADD_ANTE : 'https://api.podisante.ca/api/v1/patient-service/antecedents',
  GET_SOCIO : 'https://api.podisante.ca/api/v1/patient-service/socio',
  ADD_EXAM : 'https://api.podisante.ca/api/v1/patient-service/clinicalexamination',
  ADD_LIPID : 'https://api.podisante.ca/api/v1/patient-service/lipidprofile',
  GET_PATIENT_BY_ID : 'https://api.podisante.ca/api/v1/patient-service/id',
  VERIF_TOKEN_PATIENT : 'https://api.podisante.ca/api/v1/patient-service/questionnaire?token=',
  LOGIN_PATIENT : 'https://api.podisante.ca/api/v1/patient-service/login',
  ADD_DEVICE : 'https://api.podisante.ca/api/v1/fitbit-service/device',
  RM_DEVICE : 'https://api.podisante.ca/api/v1/fitbit-service/device',
  LIST_DEVICES : 'https://api.podisante.ca/api/v1/fitbit-service/device/all',
  AUTH_DEVICE : 'https://api.podisante.ca/api/v1/fitbit-service/device/authorization',
  LIST_DEVICE_AVAILABLE : 'https://api.podisante.ca/api/v1/fitbit-service/device/all/available/institution',
  AFFECT_DEVICE : 'https://api.podisante.ca/api/v1/fitbit-service/device/assign',
  RECUP_DEVICE : 'https://api.podisante.ca/api/v1/fitbit-service/device/back',
  ADD_RDV : 'https://api.podisante.ca/api/v1/patient-service/appointment',
  LIST_RDV : 'https://api.podisante.ca/api/v1/patient-service/appointment/all',
  ADD_QUIZ : 'https://api.podisante.ca/api/v1/patient-service/questionnaire',
  ADD_RECO : 'https://api.podisante.ca/api/v1/patient-service/recommendation',
  ALL_RECO : 'https://api.podisante.ca/api/v1/patient-service/recommendation/all',
  REFRESH_TOKEN : 'https://api.podisante.ca/api/v1/auth-service/oauth/token',
  GET_STEPS : 'https://api.podisante.ca/api/v1/fitbit-service/activity/steps',
  GET_ACTIVEMINUTES : 'https://api.podisante.ca/api/v1/fitbit-service/activity/activeminutes',
  GET_QUIZ : 'https://api.podisante.ca/api/v1/patient-service/questionnaire/all',
  ADD_QUIZINDI : 'https://api.podisante.ca/api/v1/patient-service/questionnaire/individual',
  GET_PATIENT_DEVICES : 'https://api.podisante.ca/api/v1/fitbit-service/device/patient',
  USER_INFO : 'https://api.podisante.ca/api/v1/auth-service/user',
  SYNC_DEVICE : 'https://api.podisante.ca/api/v1/fitbit-service/device/sync'






};