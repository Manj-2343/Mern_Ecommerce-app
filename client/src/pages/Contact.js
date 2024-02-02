import React from "react";
import Layout from "../component/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row  contactUs">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactUs"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 ">
          <h1 className="bg-dark p-2 text-white text-center">Contact Us</h1>
          <p className="text-justify mt-2">
            <p>
              We implement security measures to protect your personal
              information against unauthorized access, alteration, disclosure,
              or destruction. Despite our efforts, no method of transmission
              over the internet or electronic storage is 100% secure.
            </p>
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiSupport /> :18000-0000-0000(toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
