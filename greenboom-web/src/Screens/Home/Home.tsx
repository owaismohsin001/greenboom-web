import React from "react";
import Header from "../../Components/Home/Header";
import DefaultLayout from "../../layout/DefaultLayout";
import Uniqueness from "../../Components/Home/Uniqueness";

function Home() {
  return (
    <DefaultLayout>
      <div>
        <Header />
        <Uniqueness />
      </div>
    </DefaultLayout>
  );
}

export default Home;
