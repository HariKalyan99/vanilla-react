import React from 'react'
import Post from './Post'

const Dashboard = ({postList, delPost, editPost}) => {
  return (
    <div className="album py-5 bg-body-tertiary" >
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
        {postList.map((post) => <Post key={post.id} post={post} delPost={delPost} editPost={editPost}/>)}
      </div>

    </div>
  </div>
  )
}

export default Dashboard