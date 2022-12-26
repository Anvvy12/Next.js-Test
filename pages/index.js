import Head from "next/head";
import A from "../components/A";
import MainContainer from "../components/MainContainer";

const index = () => {
  return (
    <MainContainer keywords={"main page"}>
      <div>
        <h1>Главная страница</h1>
      </div>
    </MainContainer>
  );
};

export default index;
