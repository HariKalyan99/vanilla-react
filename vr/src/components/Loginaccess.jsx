import React from 'react'

const Loginaccess = ({getToken, getUserName, handleLogout, goback}) => {
  return (
    <div className="container">
        {getToken && getUserName ? <div>
          <h1>Hello {getUserName}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div> : <button onClick={goback}>Error You need to login first</button>}

        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary bg">
    <div class="col-lg-6 px-0">
      <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
      <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
      <p class="lead mb-0"><a href="#" class="text-body-emphasis fw-bold">Continue reading...</a></p>
    </div>
  </div>
      </div>
  )
}

export default Loginaccess