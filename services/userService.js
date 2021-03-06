import { setToken, getUserFromToken, removeToken } from './tokenService';


const URL = 'http://localhost:4000/'

function signup(user) {
  return fetch(URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  .then(({token}) => {setToken(token);});
  //or .then(({token}) => token);
}

function getUser(){
    return getUserFromToken();
}

function login(creds){
    return fetch(URL+'login', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}), //Authorization: `bearer `,
        body: JSON.stringify(creds)
    })
    .then(res => {
        if(res.ok) return res.json();
        throw new Error('Bad Credentials!');
    })
    .then(({token}) => setToken(token));
}


function logout(){
    removeToken(); //tokenServices
}

export {
    signup,
    login,
    logout,
    getUser
  }