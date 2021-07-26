import React from 'react';
import LoginButton from './LoginButton.js';
import Profile from './Profile.js';
import Content from './Content.js';

import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  render() {
    return (
      <>
        <LoginButton />

        {this.props.auth0.isAuthenticated &&
          <>
            <Profile />
            <Content />
          </>
        }
      </>
    )
  }
}

export default withAuth0(App);
