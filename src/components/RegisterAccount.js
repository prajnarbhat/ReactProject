import { useContext, useState } from "react";
import { useForm } from "react-hook-form"; // import here
import { useNavigate } from "react-router-dom";
import { AccountContext } from "./AccountContext";

const RegisterAccount = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { data, setData } = useContext(AccountContext);
  const navigate = useNavigate();

  const checkBoxData = ["Yes", "No"];
  const [selected, setSelected] = useState(null);

  const onSubmit = (formData) => {
    const registerData = {
      userName: formData.userName,
      phoneNumber: formData.phoneNumber,
      emailAddress: formData.emailAddress,
      password: formData.password,
      companyName: formData.companyName,
      agencyStatus: selected
    };

    const updatedData = [...data, registerData];
    setData(updatedData);
    navigate("/details");
  };

  return (
    <>
      <div className="flex items-center justify-center align-middle min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-sm m-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">Create your popX account</h5>
            </div>

            <div className="form-element">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                type="text"
                {...register("userName", { required: "User name is required" })}
              />
              {errors.userName && <span className="text-red-500 text-xs">{errors.userName.message}</span>}
            </div>

            <div className="form-element">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                type="text"
                {...register("phoneNumber", { required: "Phone number is required" })}
              />
              {errors.phoneNumber && <span className="text-red-500 text-xs">{errors.phoneNumber.message}</span>}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                type="text"
                {...register("emailAddress", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.emailAddress && <span className="text-red-500 text-xs">{errors.emailAddress.message}</span>}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                type="password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company name</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                type="text"
                {...register("companyName", { required: "Company name is required" })}
              />
              {errors.companyName && <span className="text-red-500 text-xs">{errors.companyName.message}</span>}
            </div>

            <div className="flex flex-col">
              <div className="mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">Are you an Agency?</span>
              </div>
              <div>
                <ul className="flex space-x-2">
                  {checkBoxData.map((name, index) => (
                    <div key={index} className="space-x-1">
                      <input
                        id={`custom-checkbox-${index}`}
                        type="checkbox"
                        checked={selected === name}
                        onChange={() => setSelected(selected === name ? null : name)}
                      />
                      <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Account
            </button>

          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterAccount;
