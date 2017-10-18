import React from 'react'

import Header from './Header'

const Login = () => {
  return (
    <div className="columns">
      <div className="column has-text-centered">
        Hey Im Login
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="password"/>
      Do you want to link your Instagram? 
      Do you want to link your Snapchat?
      </div>
    </div>
  )
}

export default Login
