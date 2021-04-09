import React from 'react'

function ListItem(props){

    let x=''
    if(props.list.length>0){
        if(props.title==='Equipment'){
            x='excercise.png'
        }

        else{
            x='strong.png'
        }
    }


    return(

        <div>
            {props.list.length===0 ? <h1> No {props.title} </h1> : props.list.map(function(name){

                return(

                    <div>

                        <div className='flex items-end justify-center'>
                            <div> <img src={x}/> </div>
                            <li className='list-none ml-2 '> {name} </li>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default ListItem