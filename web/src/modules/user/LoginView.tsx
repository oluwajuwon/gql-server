import React, { PureComponent } from 'react'
import { Mutation } from 'react-apollo';
import loginMutation from '../../graphql/mutations/LOGIN_USER';
import { LoginMutation, LoginMutationVariables } from '../../schemaTypes';
import { RouteComponentProps } from 'react-router-dom';
export default class LoginView extends PureComponent<RouteComponentProps> {

  state = {
    email: '',
    password: '',
  }

handleSubmitForm = async (mutation: any) => {
  const response = await mutation({ variables: this.state})
  console.log(response);
  this.props.history.push('/me');
}

handleChange = (event: any) => {
  const { name, value } = event.target;

  this.setState({
    [name]: value,
  });
};

render() {
  const { email, password } = this.state;
  return (
    <Mutation<LoginMutation, LoginMutationVariables> mutation={loginMutation}>
      {(mutation) => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <input name='email' type='email' placeholder='email' value={email} onChange={this.handleChange} />
          </div>
          <div>
            <input name='password' type='password' placeholder='password' value={password} onChange={this.handleChange} />
          </div>
          <button onClick={() => this.handleSubmitForm(mutation)}>Login</button>
        </div>
      )}
    </Mutation>

  )
}
}
