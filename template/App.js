import Home from './Home'
import { Route, useHistory } from 'react-router-dom'
import { Security, LoginCallback } from '@okta/okta-react'
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js'

const config = {
  clientId: '0oar6p8wmQazmvIts5d6',
  issuer: 'https://dev-85388140.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};



const oktaAuth = new OktaAuth(config);
const App = () => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  return (
    
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>        
        <Route path="/" exact component={Home} />
        <Route path='/callback' component={LoginCallback}/>        
      </Security>
  );
}

export default App;
