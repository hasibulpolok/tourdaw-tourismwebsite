import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initializeAuthentication from "../Routes/Users/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    
    

    const [user, setUser] = useState({});
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [displayName,setDisplayName] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();

    const sigInUsingGoogle = () => {

        const googleprovider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleprovider)
            
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
        setDisplayName(e.target.value);
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    const handleRegistration = () =>{
        
        return createUserWithEmailAndPassword(auth,email,password,displayName)
        
    }

    const handleSignIn = ()=>{
        return signInWithEmailAndPassword(auth, email, password)
          
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
        setIsLoading,
        isLoading,
        

    }
}

export default useFirebase;