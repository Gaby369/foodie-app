import React from "react";
import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import firebaseApp from "../config/credentials";
const UserContext = createContext();
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [active, setActive] = useState(false);
	useEffect(() => {
		setActive(active);
	}, [active]);

	const getData = async (uid) => {
		const docRef = doc(firestore, `users/${uid}`);
		const docCrypt = await getDoc(docRef);
		const docFinal = docCrypt.data();
		return docFinal;
	};
	const setUserWithFirebaseStateData = async (user) => {
		getData(user.uid).then((data) => {
			const userData = {
				uid: user.uid,
				email: user.email,
				rol: data.rol,
				name: data.name,
			};
			console.log("userData", userData);
			setUser(userData);
		});
	};
	onAuthStateChanged(auth, (usuarioFirebase) => {
		if (usuarioFirebase) {
			setActive(true);
			if (!user) {
				setUserWithFirebaseStateData(usuarioFirebase);
			}
		} else {
			setUser(null);
			setActive(false);
		}
	});

	const data = {
		active,
		user,
	};
	console.log("data", data);
	//retornar provider con version  de react 16 de context
	return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContext;
export { UserProvider };
