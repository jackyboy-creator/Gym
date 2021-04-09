import React from 'react'

function Reset(props){

    return(
        <div className=' dark:text-white dark:bg-gray-700 dark:border-gray-400 dark:hover:bg-gray-800 inline-block border border-gray-100 rounded-full hover:bg-tealy bg-bermuda text-white'>
            <button className='dark:focus:outline-none dark:focus:ring-2 focus:ring-bluey focus:outline-none focus:ring-2 focus:ring-green-400 px-2 py-1 rounded-full' onClick={props.handleChange} name={'bodyButton'} value={''}> Reset </button>
        </div>
    )

}

export default Reset