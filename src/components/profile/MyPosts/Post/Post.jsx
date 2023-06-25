import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://w.forfun.com/fetch/b7/b77ae3f6f1afd7a4ed41fa4be58015a6.jpeg" alt=""/>
            {props.message}
            <div><span>like</span></div>
        </div>
    );
}

export default Post;
