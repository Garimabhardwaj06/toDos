import React, {useState} from 'react';
export default function ({todoItem,status,toggleStatus}) {
    let stylesData={}
    if(status==true){
                stylesData={textDecoration: "line-through"}   
            }
    return(
        <div>
        <ul>
        <li className="styleData" onClick={()=>toggleStatus([todoItem,status])} style={stylesData}>{todoItem}</li>
        </ul>
    </div>  
    )
}
        