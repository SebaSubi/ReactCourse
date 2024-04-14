import { useState } from "react"
//Hook, te permiten anadir cierta fucnonalidad a los componentes de react
//Ejecutar codigo arbritario cunado ocurren ciertas cosas en tus componentes


export function TwitterFollowCard({ formatUserName, children, userName = 'unknown', name, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    //userName = `@{userName}` this is very wrong, you should never mutar prop, 
    //if you wanna change something, make it a const with a different name for example
    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName =  isFollowing ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]

    

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    //This is called a 'ternaria', basically a shortend if
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt="The avatar of a face" 
                src={`https://unavatar.io/github/${userName}`} />
                <div className='tw-followCard-info'>
                    {/* <strong>{children}</strong> */}
                    <strong>{name}</strong>
                    <span
                    className='tw-followCard-infoUserName'
                    >@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}