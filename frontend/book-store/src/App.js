import logo from './logo.svg';
import './App.css';
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifyForgotPassword, AmplifySignIn } from '@aws-amplify/ui-react';
// import awsconfig from "./aws-exports";

function App() {
  return (
    <div className="login">
      <AmplifyAuthenticator>
        <AmplifySignIn slot="sign-in" usernameAlias="username" hideSignUp={true}></AmplifySignIn>
        <AmplifyForgotPassword slot="forgot-password" usernameAlias="username"></AmplifyForgotPassword>
      </AmplifyAuthenticator>
    </div>
  );
}

export default App;
