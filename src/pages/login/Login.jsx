import React, { useState } from "react";  
import { toast } from "react-toastify";

const Login = () => { 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const loginHandler = async(e) => {
    e.preventDefault();
    let data = {
      username: username,
      password: password,
    };     
   
    let res = await API.post(LOGIN_URL, data); 
    if (res.data.status === "SUCCESS") {
      toast.success(res.data.message); 
      setError('')
      // dispatch({ type: DO_LOGIN, payload: res.data.payload.token });
    } else {
      setError(res.data.message)
      toast.error("call");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      loginHandler();
    }
  };

  return (
    <div className=" bg-gray-bg p-4 min-h-screen w-full flex items-center justify-center">
      <div className="container">
        <div className=" max-w-md mx-auto p-5 md:p-10 shadow rounded-xl bg-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark text-center mb-6 lg:mb-12">Login</h1>
          <form onSubmit={loginHandler}className="flex flex-col gap-5 md:gap-8">
            <div>
              <div className="relative"> 
                <label htmlFor="name" className="absolute -top-3 left-5 px-1.5 bg-white text-sm md:text-base font-semibold text-slate-400">
                  User name
                </label>
                <input
                  type="name"
                  id="name"
                  className="w-full h-16 rounded-lg border-2 border-slate-100 text-dark font-medium px-6 py-2"
                  placeholder=""
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              
            </div>
            <div>
              <div className="relative">
                <label htmlFor="name" className="absolute -top-3 left-5 px-1.5 bg-white text-sm md:text-base font-semibold text-slate-400">
                  Password
                </label>
                <input
                  type="name"
                  id="name"
                  className="w-full h-16 rounded-lg border-2 border-slate-100 text-dark font-medium px-6 py-2"
                  placeholder=""
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
            {
              error!=='' && <a className="text-danger">{error}</a>
            }
             
            <div>
              <button className=" w-full py-4 font-bold text-center bg-primary text-white rounded-lg tracking-wider text-base lg:text-lg transition-all duration-300 hover:bg-primary-light focus:bg-primary-light ">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
