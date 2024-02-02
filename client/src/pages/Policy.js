import React from "react";
import Layout from "../component/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Our Policy"}>
      <div className="row contactUs ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactUs"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            <strong>How We Use Your Information</strong>
          </p>
          <p>
            We use the collected information for various purposes, including:
          </p>
          <p>
            1. <strong>Providing Services:</strong> To deliver the services you
            have requested and provide a personalized experience.
          </p>

          <p>
            2. <strong>Communication:</strong> To communicate with you about our
            products, services, and promotions.
          </p>

          <p>
            3. <strong>Improving User Experience:</strong> To analyze user
            behavior and improve our website's functionality, content, and
            layout.
          </p>
          <p>
            <strong>Information Sharing</strong>
          </p>
          <p>
            We do not sell, trade, or otherwise transfer your personally
            identifiable information to third parties without your consent.
            However, we may share information with trusted third parties who
            assist us in operating our website, conducting business, or
            servicing you.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
