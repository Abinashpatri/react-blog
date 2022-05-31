import './singlePost.css'
import React from 'react'

function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://unsplash.it/1920/1080" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quae natus consequatur
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Abinash Patri</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aperiam. Repellat rerum nesciunt alias voluptatibus sed earum doloribus modi quaerat.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aperiam. Repellat rerum nesciunt alias voluptatibus sed earum doloribus modi quaerat.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aperiam. Repellat rerum nesciunt alias voluptatibus sed earum doloribus modi quaerat.
            </p>

        </div>
    </div>
  )
}

export default SinglePost