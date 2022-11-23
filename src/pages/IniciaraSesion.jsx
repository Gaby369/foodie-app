import React from "react";
import { Link } from "react-router-dom";
import { firebaseApp } from "../firebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useUser } from "../providers/UserProvider";
import { useEffect } from "react";

const IniciaraSesion = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState();
  const [photo, setPhoto] = useState();

  const { user, setUser } = useUser();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(firebaseApp);

    signInWithPopup(auth, provider)
      .then((userCredentials) => {
        setUser({
          name: userCredentials.user.displayname,
          photo: userCredentials.user.photoURL,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  useEffect(() => {
    setName(user.name);
    setPhoto(user.photo);
  }, [user]);
  return (
    <>
      <div className="text-center col-md-6 col-12 mx-auto">
        <Link
          to="/Room/"
          className="btn btn-outline-dark btn-block btn-lg my-5"
          onClick={handleGoogleSignIn}
        >
          inicia sesión con Google
        </Link>
        {errorMessage && <p>{errorMessage}</p>}
        <p>{name}</p>
      </div>
    </>
  );
};

export default IniciaraSesion;
