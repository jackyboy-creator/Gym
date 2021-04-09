
import React from 'react'

function Search(props){

    return (                //when user types , we want to change the state of the exercises

            <div className='flex h-24 dark:bg-gray-700 items-center justify-center'>        {/*  */}

                <div className='flex h-12 items-center border-b-2 border-bluey border-white'>

                    <div>
                        <img className='h-6' src={'Search.png'}/>
                    </div>

                    <div className='ml-4'>
                        <input className='placeholder-gray-500 w-60 dark:hover:bg-gray-700 dark:bg-gray-700 dark:text-white text-black  focus:outline-none  bg-humming' type={'text'} name={'searchBox'} onClick={props.handleClick} onChange={props.handleChange}  value={props.seachBox} placeholder={'Search Exercise/Equipment...'}/>
                    </div>

                </div>

            </div>

    )
}

export default Search


