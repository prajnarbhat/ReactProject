import { useContext } from "react";
import { AccountContext } from "./AccountContext";

// Default profile image URL
const defaultProfileImage = "/assets/cam_logo-CIVx7IdU.jpg";

const UserAccountDetails = () => {
  const { data } = useContext(AccountContext);
  console.log("Data is:", data);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h3 className="text-lg font-semibold m-3"> User Account Details </h3>

        {Array.isArray(data) && data.length > 0 ? (
          <ul className="space-y-6">
            {data.map((user, idx) => (
              <li key={idx} className="flex items-center space-x-4">
                <div className="relative w-16 h-16">
                  <img src={defaultProfileImage}
                    alt="Profile" className="w-full h-full rounded-full object-cover border-2 border-gray-300"/>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="camera"
                    className="absolute bottom-0 right-0 w-5 h-5 bg-white p-1 rounded-full shadow cursor-pointer"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path fill="currentColor"
                      d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
                    />
                  </svg>
                </div>
                <div className="text-gray-700 dark:text-gray-200">
                  <p><strong>Name:</strong> {user.userName}</p>
                  <p><strong>Email:</strong> {user.emailAddress}</p>
                  <p><strong>Phone:</strong> {user.phoneNumber}</p>
                  <p><strong>Company:</strong> {user.companyName}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">Data Not Found</p>
        )}
      </div>
    </div>
  );
};

export default UserAccountDetails;
