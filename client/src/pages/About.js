import React from "react";
import Layout from "../component/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us"}>
      <div className="row contactUs ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactUs"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            <p>
              We value your privacy and are committed to regularly reviewing and
              updating our Privacy Policy to ensure it reflects our practices
              and complies with applicable laws. If you have any questions or
              concerns about our Privacy Policy, please contact us at [Your
              Contact Information].
            </p>
            <p>
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to third parties without your consent.
              However, we may share information with trusted third parties who
              assist us in operating our website, conducting business, or
              servicing you.
            </p>
            <p>
              We implement security measures to protect your personal
              information against unauthorized access, alteration, disclosure,
              or destruction. Despite our efforts, no method of transmission
              over the internet or electronic storage is 100% secure.
            </p>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
