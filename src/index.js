import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { RoomProvider } from "./context";
import { UserProvider } from "./providers/UserProvider";

ReactDOM.render(
  <UserProvider>
    <React.StrictMode>
      <RoomProvider>
        <App />
      </RoomProvider>
      ,
    </React.StrictMode>
  </UserProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
