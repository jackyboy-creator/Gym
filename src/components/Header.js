import React from 'react'
import LanguageButton from "./LanguageButton";

function Header(props){
    return(


            <div className='h-full'>

                <div className='h-1.5 bg-gradient-to-r from-greeny to-bluey'> </div>            {/* Makes nice gradient at top of page*/}

                <div className='sm:px-4 sm:pt-5 sm:pb-1 lg:pb-10 lg:pt-8 xl:px-6 xl:pt-10 xl:pb-10    h-auto flex justify-between items-center' >           {/* Using flex with fake box to make content go to middle of page */}

                        <div className='sm:w-4 lg:w-10 bg-gray-300'>                                                                   {/* Fake box */}
                        </div>

                        <div className='object-center'>                                         {/* Second box with image and title*/}

                            <div className='inline-block align-middle'>                         {/* Aligning vertically inside inline block*/}
                                <img className='h-20 pr-6' src='dumbbell.png'/>
                            </div>

                            <div className='inline-block align-middle'>                         {/* ml-auto so button goes to the far right of header */}

                                <h1 className='ml-auto text-gray-900 dark:text-gray-300 xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl'> Get
                                    <span className='dark:text-gray-300 text-gray-900 font-bold'> Jack</span>ed</h1>
                            </div>

                        </div>

                        <div className='w-10 sm:block md:block lg:hidden'> </div>               {/* Dupe box for flex to maintain look while moving button */}

                        <div className='sm:hidden lg:block '>                                    {/* New format for mobiles / tablets etc */}
                            <LanguageButton handleChange={props.handleChange} Language={props.Language} handleClick={props.handleClick}/>
                        </div>
                </div >

                <div className='sm:block sm:pb-7     md:block md:pb-9     lg:hidden pl-10 text-center'>
                    <LanguageButton handleChange={props.handleChange} Language={props.Language} handleClick={props.handleClick}/>
                </div>

            </div>

    )
}

export default Header