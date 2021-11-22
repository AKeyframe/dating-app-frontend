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
    return(data);
}

function deleteProfile(){

}

async function updateProfile(data, id){
    await fetch(URL +'/'+ id, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      });
}

//retrive the profile at ownerId
//then push the userId to the interactions.met array
async function dislikeUser(ownerId, userId){
    userId = {id: userId}    
    await fetch(URL +'/dislike/'+ownerId, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(userId),
      });
}


//retrive the profile at userId
//then push the ownerId to the interactions.likedBy array
async function likeUser(ownerId, userId){
    ownerId = {id: ownerId}
    await fetch(URL +'/like/'+userId, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(ownerId),
      });
}

//Getting the id's in likes populated 
async function getWhoLikedYou(id){
    const response = await fetch(URL+'/likedBy/'+id);
    const data = await response.json();
    return(data);
}

async function getYourMatches(id){
    const response = await fetch(URL+'/matches/'+id);
    const data = await response.json();
    return(data);
}

async function getFilteredProfiles(id){
    const response = await fetch(URL+'/'+id+'/users')
    const data = await response.json();
    return(data);
}

function getMatches(){

}




export {
    createProfile,
    getProfile,
    updateProfile,
    likeUser,
    dislikeUser,
    getWhoLikedYou,
    getFilteredProfiles,
    
}