import { useContext, useState } from "react";
import { AccountContext } from "./AccountContext";

const WelcomePage = () => {
    
    const [ userName, setName ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ emailAddress, setEmailAddress ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ companyName, setCompanyName ] = useState("");

    const {data, setData} = useContext(AccountContext);

    return (
        <>

        <div className="flex items-center justify-center align-middle min-h-screen bg-gray-100 dark-bg-gray-900">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"> 
                <div>
                    <h5> Welcome to PopX </h5>
                    <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit</p>
                </div>
                <div>
                    <button> Create Account </button>
                    <button> Already Registered? Login</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default WelcomePage;