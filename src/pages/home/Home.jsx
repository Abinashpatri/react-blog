import "./home.css";
import React from "react";
import Header from "../../header/Header";
import Postes from "../../posts/Postes";
import Sidebar from "../../sidebar/Sidebar";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Postes/>
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
