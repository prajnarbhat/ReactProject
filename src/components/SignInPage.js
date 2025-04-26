import { useState } from "react";

const SignInPage = () => {
    
    const [ userName, setName ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ emailAddress, setEmailAddress ] = useState("");

    return (
        <>

        <div className="flex items-center justify-center align-middle min-h-screen bg-gray-100 dark-bg-gray-900">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"> 
                <form className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white"> Signin to your
                        PopX account </h5>
                    </div>

                    <div className="form-element">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Full Name </label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" name={userName} type="text" value={userName} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="form-element">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email Address </label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" name={phoneNumber} type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Password </label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" type="text" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required/>
                    </div>
                    <button className="w-full text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="Submit"> Create Account </button>
                </form>
            </div>
        </div>
        </>
    )
}

export default SignInPage;