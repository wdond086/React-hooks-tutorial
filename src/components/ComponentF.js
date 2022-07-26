import React from 'react';
import { UserContext, ChannelContext } from './../App';

function ComponentF() {
  return (
    <UserContext.Consumer>
      {
        username => {
          return (
            <ChannelContext.Consumer>
              {
                channel => {
                  return (<div>User context value <b>{username}</b>, channel context value <b>{channel}</b></div>)
                }
              }
            </ChannelContext.Consumer>
          )
        }
      }
    </UserContext.Consumer>
  )
}

export default ComponentF