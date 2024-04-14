import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
//the Styles in react must be passed as object
export function App () {
    //You can you the empy <> instead of having to write <React.Fragment>
    // const format = (userName) => `@${userName}`
    // const formattedUserName =  (<span>@{userName}</span>)
    //Un componente es una factoria elemento, se puede decir como una funcion que al ejecutarla
    //te devuelve un elemento
    //El elemento es lo que renderiza react

    // return(
        //<> 
        // <div className='App'>
        //     <TwitterFollowCard 
        //     isFollowing 
        //     userName="LukySand" 
        //     name="Lucas Nahuel Sand" 
        //     />

        //     <TwitterFollowCard             
        //     isFollowing={false} 
        //     userName="SebaSubi" 
        //     name="Sebastian Perez Lavooy" 
        //     />

        //     <TwitterFollowCard 
        //     isFollowing 
        //     userName="amilCarrey" 
        //     name="Amil Carrey" 
        //     />

        // </div>

        //</>
    // )

    // const SebaSubi = { isFollowing: true, userName: 'SebaSubi'}
    // return(
    //     //<> 
    //     <div className='App'>
    //         <TwitterFollowCard isFollowing userName="LukySand">
    //             Lucas Nahuel Sand
    //         </TwitterFollowCard>

    //         <TwitterFollowCard  {...SebaSubi}>
    //             Sebastian Perez Lavooy
    //         </TwitterFollowCard>
    //     </div>

        //</>
    // )

    return (
        //<> 
        <div className='App'>
            <TwitterFollowCard 
            initialIsFollowing={true} 
            userName="LukySand" 
            name="Lucas Nahuel Sand" 
            />

            <TwitterFollowCard             
            isFollowing={false} 
            userName="SebaSubi" 
            name="Sebastian Perez Lavooy" 
            />

            <TwitterFollowCard 
            isFollowing 
            userName="amilCarrey" 
            name="Amil Carrey" 
            />

        </div>

        //</>
    )

    
}