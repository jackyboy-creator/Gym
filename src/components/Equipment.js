import React from 'react'
import ListItem from "./ListItem";

function Equipment(props){

    const equipment =  props.Equipment.map(function (single){
        return single.name
    })

    return(
                <div>
                    <ListItem list={equipment} title={props.title} />
                </div>
        )
}

export default Equipment