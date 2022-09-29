import { AuthProvider } from "../Context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import Signup from "../Pages/Signup";
import Profile from "../Pages/Profile";
import Restore from "../Pages/Restore";
import Chat from "../Pages/Chat";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import useLocalStorage from "../Hooks/useLocalStorage";

const App = () => {
  const [selectedChat, setSelectedChat] = useState("");
  const [recep, setRecep] = useLocalStorage("recep", "");

  const getCountry = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    return res.data.country_code;
  };

  useEffect(() => {
    getCountry().then((res) => {
      if (res === "IR") toast.error("Turn On Your VPN!");
    });
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                setRecep={setRecep}
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
              />
            }
          />
          <Route
            path="/chat"
            element={
              <Chat
                recep={recep}
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
              />
            }
          />
          <Route path="/restore" element={<Restore />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  );
};

export default App;
