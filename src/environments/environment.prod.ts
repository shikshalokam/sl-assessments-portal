
import { KeycloakConfig } from 'keycloak-angular';


const base_url = 'https://dev.shikshalokam.org';
const apibaseurl = ' https://dev.shikshalokam.org/assessment/api/v1/'
let keycloakConfig: KeycloakConfig = {
  url: base_url + '/auth',
  realm: 'sunbird',
  clientId: 'YOUR_CLIENT_ID',
  "credentials": {
    "secret": "YOUR_KEY"
  }  
};

export const environment = {
  production: true,
  keycloak: keycloakConfig,
  base_url: base_url,
  apibaseurl :apibaseurl
};
