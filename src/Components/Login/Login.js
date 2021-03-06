import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config"
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';
import googleLogo from "../../Images/googel-logo.png"
const Login = () => {
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    // let { from } = location.state;

    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googelSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                const newUserInfo = { ...loggedInUser }
                newUserInfo.name = user.displayName
                newUserInfo.email = user.email
                newUserInfo.image = user.photoURL
                setLoggedInUser(newUserInfo)
                // isAdmin()
                history.replace(from);
                // ...
            }).catch((error) => {
                var errorMessage = error.message;
            });
    }

    // const isAdmin = () => {
    //     const url = "https://hidden-hollows-18643.herokuapp.com/isAdmin"
    //     const email = loggedInUser.email
    //     fetch(url, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ email })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // loggedInUser.isAdmin = data;
    //             setLoggedInUser(loggedInUser.isAdmin = data)
    //         })
    // }

    return (
        <div onClick={googelSignIn} className="d-flex justify-content-between align-content-cente btn mt-5" style={{ border: 'grey 1px solid', borderRadius: '2em', width: '30%', margin: 'auto' }}>
            <div style={{ width: '50px' }}>
                <img style={{ backgroundColor: 'red', width: '100%' }} src={googleLogo} alt="" />
            </div>
            <p className="pt-2" style={{ fontSize: '20px', paddingRight: '30%', fontWeight: '550' }}>Google Sign In</p>
        </div>
    );
};

export default Login;