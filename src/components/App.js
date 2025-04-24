import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AccountContextProvider } from "./AccountContext";
import RegisterAccount from "./RegisterAccount";
import SignInPage from "./SignInPage";
import UserAccountDetails from "./UserAccountDetails";
import WelcomePage from "./WelcomePage";

const App = () => {
    return (
        <>  
            <AccountContextProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<WelcomePage/>}/>
                        <Route path="/Register" element={<RegisterAccount/>}/>
                        <Route path="/Details" element={<UserAccountDetails/>}/>
                        <Route path="/Signin" element={<SignInPage/>}/>
                    </Routes>
                </Router>
            </AccountContextProvider>
        </>
    )
}

export default App;