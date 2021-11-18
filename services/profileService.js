import { getToken } from "./tokenService"
import { getUser } from "./userService";

import { useState } from "react";

const URL = 'http://localhost:4000/profile'


async function createProfile(){
    const token = await getToken();
    const id = JSON.parse(atob(token.split('.')[1])).user._id; 

    const profile = {
        user: id,

        age: '',
        gender: '',
        about: '',
        interests: [],
        photos: [],
        settings: {},

        lookingFor: '',
        interestedIn: '',
        betweenAges: ''
    }

    await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify(profile),
    });

}

const getProfile = async () => {
    const token = getToken();
    const id = JSON.parse(atob(token.split('.')[1])).user._id;

    const response = await fetch(URL+'/'+id);
    const data = await response.json();
    console.log('//////////////////////')
    console.log(data);
    

    return(data);
}

function deleteProfile(){

}

async function updateProfile(data, id){
   

    console.log(data)
    console.log(id)

    await fetch(URL +'/'+ id, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      });
}

function getFilteredProfiles(){

}

function getMatches(){

}




export {
    createProfile,
    getProfile,
    updateProfile,
    getFilteredProfiles,
}