/* eslint-disable no-unused-vars */
import React from "react";
import SidebarProduct from "../../Components/SidebarProduct";

const AddProductPage = () => (
  <SidebarProduct>
    <div className="flex flex-col">
      <p className="text-4xl text-primary font-bold">Add Product</p>
      {/* form */}
      <div className="wrap mt-[100px] w-full">
        <div className="flex w-full flex-col  justify-center  = h-72 border-2 border-primary p-8 rounded-lg">
          <div>
            <div className=" flex gap-x-4">
              <div className="flex flex-col mb-4">
                <label htmlFor="">Name Product</label>
                <input
                  type="text"
                  id="email"
                  className=" border border-primary text-gray-900 text-sm rounded-md focus:ring-primary focus:border-primary h-9 px-2 w-96"
                  placeholder="Name Product"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="">Price</label>
                <input
                  type="text"
                  id="email"
                  className=" border border-primary text-gray-900 text-sm rounded-md focus:ring-primary focus:border-primary h-9 px-2 w-96"
                  placeholder="Price"
                  required
                />
              </div>
            </div>
          </div>

          <div className="">
            <div className=" flex gap-x-4">
              <div className="flex flex-col mb-4">
                <label htmlFor="">Stock</label>
                <input
                  type="text"
                  id="email"
                  className=" border border-primary text-gray-900 text-sm rounded-md focus:ring-primary focus:border-primary h-9 px-2 w-96"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="">Add Image</label>
                <input
                  className="block b w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-transparent focus:outline-none"
                  aria-describedby="user_avatar_help"
                  id="user_avatar"
                  type="file"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button className="flex justify-center py-2 item-center w-40 h-9 bg-primary text-white rounded-lg  text-sm">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  </SidebarProduct>
);
export default AddProductPage;
