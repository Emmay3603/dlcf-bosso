import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//This is the main.jsx, i wrap the App component with BrowserRouter to enable routing in the application.
// The main.jsx file is responsible for rendering the React application into the DOM. for ecampel if u wanna go to /anything this is what is responsible for it and then i made some changes in the App.tsx ypu can check the comments i made there too to understand what i did and changed......