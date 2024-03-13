import React from 'react'

const Loginaccess = ({getToken, getUserName, handleLogout, goback}) => {
  return (
    <div>
        {getToken && getUserName ? <div>
          <h1>Hello {getUserName}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div> : <button onClick={goback}>Error You need to login first</button>}
      </div>
  )
}

export default Loginaccess