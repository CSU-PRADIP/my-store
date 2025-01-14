import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          "My-Store, in its initial phase, is an exciting new e-commerce platform designed to offer a diverse and user-friendly online shopping experience to customers. With a commitment to quality, convenience, and a wide range of products, My-Store aims to become a go-to destination for shoppers seeking everything from fashion and electronics to home decor and more. As we embark on this journey, our mission is to provide a seamless and secure shopping environment, where customers can explore, select, and purchase their desired products with confidence, while also fostering growth opportunities for sellers within our marketplace."
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;