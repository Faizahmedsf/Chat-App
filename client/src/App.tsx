import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Auth/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Auth/SignUp/Signup";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Chat from "./Components/Chat/Chat";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
