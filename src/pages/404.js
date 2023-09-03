import React from "react";
import Layout from "../components/Layout";

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <section style={{ textAlign: "center" }}>
          <h1>404</h1>
          <h6>Page Not Found</h6>
        </section>
      </main>
    </Layout>
  );
};

export default Error;
