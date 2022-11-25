// componente de rutas privadas
import React from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "./UserContext";
import { useContext } from "react";

export default function PrivateRoute({ component: Component, ...rest }) {
	const { active } = useContext(UserContext);

	return (
		<Route
			{...rest}
			render={(props) => {
				return active ? (
					<Component {...props} />
				) : (
					<Redirect to="/iniciarSesion" />
				);
			}}
		></Route>
	);
}
