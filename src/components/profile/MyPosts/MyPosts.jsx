import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className='posts'>
                <Post message='Hi, how are you?' />
                <Post message="It's my first post" />
            </div>
        </div>
    );
}

export default MyPosts;
