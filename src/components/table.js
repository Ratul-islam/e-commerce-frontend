import React from "react";

const Table = ({ type }) => {
  const data = [
    {
      name: "ratul",
      spend: "3222736288",
      orders: "3222736",
      phone: "3222736",
      email: "tweudghj",
      orderNum: "27634873",
      amount: "73000",
      date: "65/23/2030",
      status: "active",
    },
    {
      name: "ratul",
      spend: "3222736288",
      orders: "3222736",
      phone: "3222736",
      email: "tweudghj",
      orderNum: "27634873",
      amount: "73000",
      date: "65/23/2030",
      status: "active",
    },
    {
      name: "ratul",
      spend: "3222736288",
      orders: "3222736",
      phone: "3222736",
      email: "tweudghj",
      orderNum: "27634873",
      amount: "73000",
      date: "65/23/2030",
      status: "active",
    },
    {
      name: "ratul",
      spend: "3222736288",
      orders: "3222736",
      phone: "3222736",
      email: "tweudghj",
      orderNum: "27634873",
      amount: "73000",
      date: "65/23/2030",
      status: "active",
    },
  ];
  return (
    <>
      {type && type === "customers" ? (
        <>
          <ul className="grid grid-cols-6 w-full py-3 border-y border-y-indigo-100 px-2 text-xs opacity-50">
            <li>Customer Name</li>
            <li>Total Spend</li>
            <li>Total Orders</li>
            <li>Phone</li>
            <li>Email</li>
            <li>
              <button>action</button>
            </li>
          </ul>
          {data.length  ? (
            data.map((item, key) => (
              <ul
                key={key}
                className="grid grid-cols-6 w-full py-3 border-y border-y-indigo-100 px-2 text-xs text-black"
              >
                <li>{item?.name}</li>
                <li>{item?.spend}</li>
                <li>{item?.orders}</li>
                <li>{item?.phone}</li>
                <li>{item?.email}</li>
                <li>
                  <button>del</button>
                </li>
              </ul>
            ))
          ) : (
            <p className="text-gray-400 text-center">No results found</p>
          )}
        </>
      ) : (
        ""
      )}
      {type && type === "orders" ? (
        <>
          <ul className="grid grid-cols-6 w-full py-3 border-y border-y-indigo-100 px-2 text-xs opacity-50">
            <li>order num</li>
            <li>customer</li>
            <li>date</li>
            <li>amount</li>
            <li>status</li>
            <li>
              <button>action</button>
            </li>
          </ul>
          {data.length  ? (
            data.map((item, key) => {
              return (
                <ul
                  key={key}
                  className="grid grid-cols-6 w-full py-3 border-y border-y-indigo-100 px-2 text-xs text-black"
                >
                  <li>{item?.orderNum}</li>
                  <li>{item?.name}</li>
                  <li>{item?.date}</li>
                  <li>{item?.amount}</li>
                  <li>{item?.status}</li>
                  <li>
                    <button>del</button>
                  </li>
                </ul>
              );
            })
          ) : (
            <p className="text-gray-400 text-center">No results found</p>
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Table;
