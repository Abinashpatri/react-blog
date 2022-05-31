import './post.css'
import React from 'react'

function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://unsplash.it/1920/1080"  alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Gaming</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum, dolor sit a</span>
            <hr />
            <span className="postDate">1 hour ago</span>

        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit, amet consectetur adipi Lorem ipsum dolor sit, amet consectetur adipiLorem ipsum dolor sit, amet consectetur adipiLorem ipsum dolor sit, amet consectetur adipiLorem ipsum dolor sit, amet consectetur adipiLorem ipsum dolor sit, amet consectetur adipiLorem ipsum dolor sit, amet consectetur adipi
            Lorem ipsum dolor sit, amet consectetur adipiLorem ipsum dolor sit, amet consectetur adipiLorem ipsum dolor sit, amet consectetur adipiLorem ipsum dolor sit, amet consectetur adipi
        </p>
    </div>
  )
}

export default Post