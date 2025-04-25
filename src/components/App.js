import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AccountContextProvider } from "./AccountContext";
import Navbar from "./Navbar";
import RegisterAccount from "./RegisterAccount";
import SignInPage from "./SignInPage";
import UserAccountDetails from "./UserAccountDetails";
import WelcomePage from "./WelcomePage";

const App = () => {
    return (
        <>  
            <AccountContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/register" element={<RegisterAccount />} />
                        <Route path="/details" element={<UserAccountDetails />} />
                        <Route path="/signin" element={<SignInPage />} />
                    </Routes>
                </Router>
            </AccountContextProvider>
        </>
    )
}

export default App;