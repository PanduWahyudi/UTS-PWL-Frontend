// eslint-disable-next-line no-unused-vars
import React from "react";
import LoginAdminLayout from "../Components/LoginAdminLayout";
// import { useState } from "react";

// const [Hide, setHide] = useState(true);

const CreateAccount = () => (
  <LoginAdminLayout>
    <div className="w-2/3">
      <p className="font-semibold text-3xl text-start my-4">Create Account</p>
      <p className="font-thin text-start mb-8"> Enter your details below</p>
      <div className="flex flex-col mb-4">
        <label htmlFor="">Name</label>
        <input
          type="text"
          id="email"
          className=" border border-primary text-gray-900 text-sm rounded-md focus:ring-primary focus:border-primary h-9 px-2"
          placeholder="Full Name"
          required
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="">Email</label>
        <input
          type="text"
          id="email"
          className=" border border-primary text-gray-900 text-sm rounded-md focus:ring-primary focus:border-primary h-9 px-2"
          placeholder="Email Address"
          required
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="">Password</label>
        <input
          type="text"
          id="email"
          className="  border border-primary text-gray-900 text-sm rounded-md focus:ring-primary focus:border-primary h-9 px-2"
          placeholder="Password"
          required
        />
      </div>
      <div className="flex my-4 space justify-center items-center">
        <button className="bg-primary w-full rounded-md p-2 font-semibold text-white">
          Sign Up
        </button>
      </div>
    </div>
  </LoginAdminLayout>
);

export default CreateAccount;