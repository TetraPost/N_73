import React from 'react';
import { useParams } from 'react-router-dom';
import data from "./data.json";

function UserPage(){
    const { id } = useParams();
    console.log(data[id].userId);
    return (
        <div>
            User info { id } <br/>
            User name { data[id].name } <br />
            <img src={ data[id].image } className="" alt="logo" />
        </div>
        
    );
}




export default UserPage;