import React, { PureComponent } from 'react'

export default class RegisterView extends PureComponent {

  state = {
    email: '',
    password: '',
  }

  handleChange = (event: any) => {
    return null;
  }

  render() {
    return (
      <div>
        register view
      </div>
    )
  }
}
