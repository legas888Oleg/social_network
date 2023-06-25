import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img className='logo' src="https://www.freelogodesign.org/assets/img/home/icones/globe.svg" alt="logo"/>
            </header>
            <nav className='nav'>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className='content'>
                <div>
                    <img className='image'
                         src="https://avatars.mds.yandex.net/i?id=71e71b6b422ee1cf21412fc9b34193a04b37b56f-8497411-images-thumbs&ref=rim&n=33&w=480&h=150"
                         alt=""/>
                </div>

                <div>
                    ava + description
                </div>

                <div>
                    my posts
                    <div>new post</div>
                    <div>
                        <div>Post 1</div>
                        <div>Post 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
