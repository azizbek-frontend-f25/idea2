import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserProvider from "./context/UserContext";
import Routers from "./routes/Routers";
import BasketProvider from "./context/BasketContext";
import AuthProvider from "./context/AuthContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BasketProvider>
      <UserProvider>
        <Routers />
      </UserProvider>
    </BasketProvider>
  </AuthProvider>
);
