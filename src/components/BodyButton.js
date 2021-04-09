import React from 'react'


function BodyButton (props){

    return(

            <div className='tracking-wider inline-block dark:bg-gray-800 dark:text-white dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-700 text-center  border-2 border-gray-100 hover:bg-bermuda bg-tealy text-white rounded-xl px-2 py-2 uppercase m-1 sm:m-1 md:m-2'>
                <label>
                    <input type={'radio'} name={'bodyButton'} value={props.bodyID} checked={props.bodyButton===props.bodyID.toString()} onChange={props.handleChange}/> {props.bodyName}
                </label>
            </div>
    )
}

export default BodyButton