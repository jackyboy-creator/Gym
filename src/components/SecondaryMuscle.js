import React from 'react'
import ListItem from "./ListItem";

function SecondaryMuscle(props){

    const secondaryMuscle =  props.SecondaryMuscle.map(function (single){
        return single.name
    })

    return(

        <div>
            <ListItem list={secondaryMuscle} title={props.title}/>
            {console.log(props.title)}
        </div>
    )
}

export default SecondaryMuscle