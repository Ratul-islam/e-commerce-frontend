import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdWallet } from "react-icons/md";
import "./sidebar.css";

const Sidebar = () => {
  const navigate = useLocation();

  return (
    <>
      <div className=" bg-white border border-r-indigo-100 lg:w-44 h-[100vh] z-10 pt-12">
        <div className="mb-12 bg-slate-400">logo</div>

        <ul className="px-[1vw]">
          <li>
            <Link
              to="/"
              className={`my-3 py-1 px-2 cursor-pointer flex
            justify-center lg:justify-start items-center hover:bg-[#e5fcf5] ${
              navigate.pathname === "/" && "bg-[#e5fcf5]"
            }`}
            >
              <span style={{ width: "22px", marginRight: "8px" }}>
                <MdSpaceDashboard
                  size={22}
                  className={`mr-3  ${
                    navigate.pathname === "/"
                      ? "text-[#0094f090]"
                      : "text-gray-400"
                  }  `}
                />
              </span>
              <span
                className={`font-semibold ${
                  navigate.pathname === "/"
                    ? "text-[#0094f090]"
                    : "text-gray-400"
                } hidden lg:block`}
              >
                Dashboard
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="customers"
              className={`my-3 py-1 px-2 cursor-pointer flex justify-center lg:justify-start items-center hover:bg-[#e5fcf5] ${
                navigate.pathname === "/customers" && "bg-[#e5fcf5]"
              }`}
            >
              <span style={{ width: "22px", marginRight: "8px" }}>
                <MdPeople
                  size={22}
                  className={`mr-3  ${
                    navigate.pathname === "/customers"
                      ? "text-[#0094f090]"
                      : "text-gray-400"
                  }  `}
                />
              </span>
              <span
                className={`font-semibold ${
                  navigate.pathname === "/customers"
                    ? "text-[#0094f090]"
                    : "text-gray-400"
                } hidden lg:block`}
              >
                Customers
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="orders"
              className={`my-3 py-1 px-2 cursor-pointer flex justify-center lg:justify-start items-center hover:bg-[#e5fcf5] ${
                navigate.pathname === "/orders" && "bg-[#e5fcf5]"
              }`}
            >
              <span style={{ width: "22px", marginRight: "8px" }}>
                <FaClipboardCheck
                  size={20}
                  className={`mr-3  ${
                    navigate.pathname === "/orders"
                      ? "text-[#0094f090]"
                      : "text-gray-400"
                  }  `}
                />
              </span>
              <span
                className={`font-semibold ${
                  navigate.pathname === "/orders"
                    ? "text-[#0094f090]"
                    : "text-gray-400"
                } hidden lg:block`}
              >
                Orders
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="withdraw"
              className={`my-3 py-1 px-2 cursor-pointer flex justify-center lg:justify-start items-center hover:bg-[#e5fcf5] ${
                navigate.pathname === "/withdraw" && "bg-[#e5fcf5]"
              }`}
            >
              <span style={{ width: "22px", marginRight: "8px" }}>
                <MdWallet
                  size={22}
                  className={`mr-3  ${
                    navigate.pathname === "/withdraw"
                      ? "text-[#0094f090]"
                      : "text-gray-400"
                  }  `}
                />
              </span>
              <span
                className={`font-semibold ${
                  navigate.pathname === "/withdraw"
                    ? "text-[#0094f090]"
                    : "text-gray-400"
                } hidden lg:block`}
              >
                Withdraw
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="profile"
              className={`my-3 py-1 px-2 cursor-pointer flex justify-center lg:justify-start items-center hover:bg-[#e5fcf5] ${
                navigate.pathname === "/profile" && "bg-[#e5fcf5]"
              }`}
            >
              <span style={{ width: "22px", marginRight: "8px" }}>
                <MdAdminPanelSettings
                  size={22}
                  className={`${
                    navigate.pathname === "/profile"
                      ? "text-[#0094f090]"
                      : "text-gray-400"
                  }  `}
                />
              </span>
              <span
                className={`font-semibold ${
                  navigate.pathname === "/profile"
                    ? "text-[#0094f090]"
                    : "text-gray-400"
                } hidden lg:block`}
              >
                Profile
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
