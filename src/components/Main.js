import React from 'react'

function Main(props){               // props to access what is being passed down from main

    return(
        <div className=''>
            {props.displayExercises}
        </div>

    )
}

export default Main