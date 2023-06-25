import React from 'react';
import s from './Profile.module.css';

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

            <div>
                my posts
                <div>new post</div>
                <div className='posts'>
                    <div className={s.item}>Post 1</div>
                    <div className={s.item}>Post 2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
