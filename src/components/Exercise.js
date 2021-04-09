import React from 'react'
import Equipment from "./Equipment";
import SecondaryMuscle from "./SecondaryMuscle";


function Exercise(props){
    //creating a template for each Exercise

    let altMuscleTitle='Alt. Muscle'
    let equipmentTitle='Equipment'



    return(
        <div className='bg-humming dark:bg-gray-700 sm:mb-24 lg:mb-12 w-4/5 mx-auto my-auto border-l-4 border-greeny shadow-2xl'>

            <div className='grid lg:grid-cols-2 xl:grid-cols-5'>
                <h1 className='sm:mt-2 lg:mt-10 dark:text-gray-900 text-tealy text-2xl font-bold underline text-center sm:text-3xl mt-10 lg:hidden'>{props.name}</h1>
                <p className='dark:text-gray-300 px-10 mt-2 text-xl text-gray-900 font-serif text-center sm:text-xl mt-4 lg:hidden'>{props.description.replace(/<p>/g,"").replace(/<\/p>/g, "").replace(/<ol>/g,"").replace(/<li>/g,"").replace(/<\/li>/g, "").replace(/<\/ol>/g, "").replace(/<\/ul>/g, "").replace(/<ul>/g,"")}</p>

                <img className='mt-5 mb-10 w-auto mx-auto sm:mt-8 sm:h-64 lg:hidden dark:fill-current shadow-2xl'  src={props.name+".svg"} />
                <div className='hidden sm:block lg:hidden xl:hidden'>
                    <h3 className='sm:mt-0 sm:mb-2 lg:mt-8 lg:mb-8 dark:text-gray-900 text-tealy text-2xl font-bold text-center'> {equipmentTitle} </h3>
                    <section className='dark:text-gray-300 px-10 text-gray-900 font-serif  text-center '> <Equipment Equipment={props.Equipment} setEquipmentUsed={props.setEquipmentUsed} title={equipmentTitle}/>  </section>
                </div>

                <div className='sm:block lg:hidden xl:hidden 2xl:hidden shadow-inner'>
                    <h3 className= 'dark:text-gray-900 text-tealy text-2xl font-bold mb-4 text-center xl:text-3xl' >{altMuscleTitle} </h3>
                    <p className='dark:text-gray-300 px-5 text-gray-900 font-serif mb-2 text-center xl:text-l'> <SecondaryMuscle SecondaryMuscle={props.secondaryMuscle} title={altMuscleTitle}/>  </p>
                </div>

                {/* Will not show unless screen is certain size*/}
                <div className='hidden lg:block xl:block xl:col-span-3'>

                    <div className='grid grid-cols-2 h-full grid-rows-1'>

                        <div className='col-span-2'>
                            <h1 className='lg:mt-5 px-1 pt-3 pb-4 dark:text-gray-900 text-tealy text-4xl font-bold font-bold xl:mb-6 text-center xl:text-4xl'>{props.name}</h1>
                            <p className='dark:text-gray-300 px-10 mb-4 lg:text-2xl break-words text-gray-900 font-serif text-center xl:text-xl'>{props.description.replace(/<p>/g,"").replace(/<\/p>/g, "").replace(/<ol>/g,"").replace(/<li>/g,"").replace(/<\/li>/g, "").replace(/<\/ol>/g, "").replace(/<\/ul>/g, "").replace(/<ul>/g,"")}</p>            {/* Slicing the output  */}
                        </div>

                        <div className='shadow-inner'>
                            <h3 className= 'dark:text-gray-900 text-tealy text-2xl font-bold mb-3 text-center xl:text-3xl' >{equipmentTitle}</h3>
                            <p className='dark:text-gray-300 px-5 text-gray-900 font-serif mb-4 text-center xl:text-l'> <Equipment Equipment={props.Equipment} title={equipmentTitle}/>  </p>
                        </div>

                        <div className='shadow-inner'>
                            <h3 className= 'dark:text-gray-900 text-tealy text-2xl font-bold mb-3 text-center xl:text-3xl' >{altMuscleTitle} </h3>
                            <p className='dark:text-gray-300 px-5 text-gray-900 font-serif mb-2 text-center xl:text-l'> <SecondaryMuscle SecondaryMuscle={props.secondaryMuscle} title={altMuscleTitle}/>  </p>
                        </div>


                    </div>
                </div>

                {/* Will not show unless screen is certain size*/}
                <div className='h-full hidden lg:block xl:block xl:col-span-2 shadow-xl dark:border-gray-400'>

                    <div className='flex justify-center h-full items-center'>
                        <img className='px-4 py-4 xl:h-72 transform hover:scale-110' src={props.name+".svg"} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Exercise