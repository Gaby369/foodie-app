import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { RoomProvider } from "./context";
import { UserProvider } from "./context/UserContext";

// ReactDOM.render(
// 	<React.StrictMode>
//
// 			<App />
// 		</RoomProvider>
// 	</React.StrictMode>,
// 	document.getElementById("root"),
// );

ReactDOM.render(
	<React.StrictMode>
		<UserProvider>
			<RoomProvider>
				<App />
			</RoomProvider>
		</UserProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);
