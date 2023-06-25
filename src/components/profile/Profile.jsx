import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.image}
                     src="https://diaryrh.ru/wp-content/uploads/2019/02/98034864.jpg"
                     alt=""/>
            </div>

            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;
