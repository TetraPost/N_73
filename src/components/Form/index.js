import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Form(){
    const [status, setShowLoggedUser] = useState('');
    
    const handleSubmit = (event) => {
        if (event){
        event.preventDefault();
        const data = new FormData(event.target);
        const mess = data.getAll('name')
        // console.log(mess);
        auth(mess);
        }
        return null;
    }

    const auth = async (data) => {
        const credential = {'email':data[0], 'pass':data[1]};
        const result = await axios.post('http://localhost:4000/sendData', credential);
        console.log(result);
        if (result.data === true){
            setShowLoggedUser(status === false);
        } else {
            setShowLoggedUser(status === true);
        }
        
        

    }

    useEffect(()=>{
        handleSubmit();
    })
    
    return (
        <div>
            <form id="form" onSubmit={handleSubmit} enctype="multipart/form-data">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">breaking@aol.com / 12345</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="name" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button class="btn btn-primary">Submit</button>
            </form>
            <p>{status ? 'logged' : 'not logged'}</p>
        </div>
        
    )
};
export default Form;