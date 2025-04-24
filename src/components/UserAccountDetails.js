import { useContext } from "react";
import { AccountContext } from "./AccountContext";

const UserAccountDetails = () => {

    const {data} = useContext(AccountContext)

    return (
        <>
            <div className="flex items-center justify-center align-middle min-h-screen bg-gray-100 dark-bg-gray-900">
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"> 
                    {data.map(user => (
                       <li> {user.userName} </li>
                    ))}   
                </div>
            </div>
        
        </>    
    )
}

export default UserAccountDetails;