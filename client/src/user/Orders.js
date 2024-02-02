import React, { useState, useEffect } from "react";
import Layout from "../component/Layout/Layout";
import UserMenu from "../component/Layout/UserMenu";
import axios from "axios";
import { useAuth } from "../Context/auth";
import moment from "moment";
import { Button } from "antd";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/auth/orders"
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout title={"Your Orders"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center mt-3">All Orders</h1>
            {orders?.map((o, i) => {
              return (
                <div className="border shadow" key={i + 1}>
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Orders</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>{i + 1}</th>
                        <th>{o?.status}</th>
                        <th>{o?.buyer?.name}</th>
                        <th>{moment(o?.createdAt).fromNow()}</th>
                        <th>{o?.payment.success ? " success" : "Failed"}</th>
                        <th>{o?.products?.length}</th>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container">
                    {o?.products?.map((p, i) => (
                      <div className="row mb-2 p-3 card flex-row" key={i}>
                        <div className="col-md-4">
                          <img
                            alt={p.name}
                            src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                            height="200"
                            width="200"
                          />
                        </div>
                        <div className="col-md-8 mt-4 ">
                          <h4>{p.name}</h4>
                          <p>{p.description.substring(0, 30)}</p>
                          <h4>Price: ${parseFloat(p.price).toFixed(2)}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
