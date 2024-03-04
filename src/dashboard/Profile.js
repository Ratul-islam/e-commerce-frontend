import React from "react";

const Profile = () => {
  return (
    <div className="h-full flex flex-col overflow-y-scroll max-h-[100%] p-4  bg-white no-scrollbar">
      <div className="sm:flex block">
        <div className="sm:border-r sm:border-r-indigo-100 pr-4 min-w-56">
          <div className="flex border-b border-b-indigo-100 py-3">
            <img src="/logo192.png" alt="default-logo" className="h-8 mr-4" />
            <div>
              <h2>Ratul islam</h2>
              <p className=""> 3u4u4399</p>
            </div>
          </div>
          <div className="py-3 border-b border-b-indigo-100">
            <p
              style={{ fontSize: "10px", fontWeight: "700" }}
              className="text-gray-400"
            >
              Account Balance
            </p>
            <p className="primary-font-color-blue">BDT: 2000tk</p>
          </div>
        </div>
        <div className="py-3 sm:px-5 w-full">
          <div className="text-3xl mb-5">Your Information's</div>
          <div className="flex justify-between border-t border-t-indigo-100 p-2">
            <div>First Name: </div>
            <div>Ratul</div>
          </div>
          <div className="flex justify-between border-t border-t-indigo-100 p-2">
            <div>Last Name: </div>
            <div>Islam</div>
          </div>
          <div className="flex justify-between border-t border-t-indigo-100 p-2">
            <div>Email: </div>
            <div>ratulislam@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
