import React, { PureComponent } from 'react'
import { Query } from 'react-apollo'
import getCurrentUserQuery from '../../graphql/queries/GET_CURRENT_USER';
import { GetCurrentUser } from '../../schemaTypes';

export default class MeView extends PureComponent {
  render() {
    return (
      <Query<GetCurrentUser> query={getCurrentUserQuery}>
        {({ data, loading }) => {
          if(loading) {
            return <div>loading...</div>
          }
          if(!data) {
            return <div>data is undefined</div>
          }
          if(!data.currentUser) {
            return <div>No user found</div>
          }
          console.log(data)
          return (
          <div>
            {data.currentUser.email}
          </div>
          )
        }}
      </Query>
    )
  }
}
