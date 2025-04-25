import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AccountContext } from "./AccountContext";

const RegisterAccount = () => {
    
    const [ userName, setName ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ emailAddress, setEmailAddress ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ companyName, setCompanyName ] = useState("");

    const {data, setData} = useContext(AccountContext);

    const checkBoxData = [ "Yes", "No"]
    const [selected, setSelected] = useState(null);
    // initially nothing will be selected

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();


        const registerData = {
            userName: userName,
            phoneNumber: phoneNumber,
            emailAddress: emailAddress,
            password: password,
            companyName: companyName
        }

        const updatedData = [...data, registerData]

        setData(updatedData)

        navigate("/details");

    }

    return (
        <>

        <div className="flex items-center justify-center align-middle min-h-screen bg-gray-100 dark-bg-gray-900">
            <div className="w-full max-w-sm m-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"> 
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="flex justify-between items-center">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white"> Create your popX account </h5>
                    </div>

                    <div className="form-element">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> User name </label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" name={userName} type="text" value={userName} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="form-element">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Phone number </label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" name={phoneNumber} type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email address </label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" type="text" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Password </label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" type="number" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Company name </label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required/>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-2">
                            <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">
                                Are you an Agency?
                            </span>
                        </div>
                        <div>
                        <ul className="flex space-x-2">
                            {checkBoxData.map((name, index) => (
                            <div key={index} className="space-x-1">
                                <input id={`custom-checkbox-${index}`}
                                type="checkbox" name={name}
                                checked={selected === name}
                                onChange={() => setSelected(selected === name ? null : name)}
                                />
                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            </div>
                            ))}
                        </ul>
                    </div>
                    </div>
                    <button className="w-full mt-4 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Create Account
                    </button>
                    
                </form>
            </div>
        </div>
        </>
    )
}

export default RegisterAccount;