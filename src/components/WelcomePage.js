import { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold m-3"> Welcome to PopX </h3>
                    <p className="items-center m-3">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit</p>
                </div>
                <div>
                    <Link to="/register">
                        <button className="w-full mt-4 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Create Account
                        </button>
                    </Link>

                    <Link to="/signin">
                        <button className="w-full mt-4 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Already Registered? Login
                        </button>
                    </Link>
                </div>       
            </div>
        </div>
        </>
    )
}

export default WelcomePage;