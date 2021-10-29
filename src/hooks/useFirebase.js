import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Routes/Users/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');

    const auth = getAuth();

    const sigInUsingGoogle = () => {

        const googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth, googleprovider)
            .then(result => {
                setUser(result.user);
                
            });
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, [])



    const logOut = () => {
        signOut(auth)
            .then(() => {

            });
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    const handleRegistration = e =>{
        
        createUserWithEmailAndPassword(auth,email,password,name)
        .then(result =>{
            const user = result.user;
        })
        e.preventDefault();
    }

    const handleSignIn = e=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
        })
        e.preventDefault();
        
    }

    return {
        user,
        sigInUsingGoogle,
        logOut,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleSignIn,

    }
}

export default useFirebase;