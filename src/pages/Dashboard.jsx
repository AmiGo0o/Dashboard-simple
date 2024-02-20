import React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/Header/Header";
import MainContent from "../components/Main/MainContent";

const Dashboard = (props) => {
  return (
    <>
      <Layout>
        <Header />
        <MainContent/>
      </Layout>
    </>
  );
};

export default Dashboard;
