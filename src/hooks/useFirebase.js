import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initializeAuthentication from "../Routes/Users/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {



    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])



    const logOut = () => {
        signOut(auth)
            .then(() => {

            });
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password, name)

    }

    const handleSignIn = () => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    const updateName = (name, photoURL) => {

        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://www.cornwallbusinessawards.co.uk/wp-content/uploads/2017/11/dummy450x450-300x300.jpg"
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
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
        email,
        password,
        name,
        updateName,
        photoURL,

    }
}

export default useFirebase;