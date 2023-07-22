import React from "react";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import { useSelector } from "react-redux";

const HomeScreens = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return <div>{userInfo ? <Welcome username={userInfo.name} /> : <Hero />}</div>;
};

export default HomeScreens;
