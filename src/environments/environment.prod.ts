
import { KeycloakConfig } from 'keycloak-angular';


const base_url = 'https://dev.shikshalokam.org';
let keycloakConfig: KeycloakConfig = {
  url: base_url + '/auth',
  realm: 'sunbird',
  clientId: 'sl-ionic-connect',
  "credentials": {
    "secret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkYTJiMTA5MWVlMDE0MDQ3OTdhYjRjZDI3ODJmYTFkZCJ9.olC-mJ9JVqeeIf-eyBVYciPIIsqDm46XHbKuO1GgNG0"
  }  
};

export const environment = {
  production: true,
  keycloak: keycloakConfig,
  base_url: base_url
};
