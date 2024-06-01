import React from "react";
import Mains from "../components/Mains";
import Row from "../components/Row";
import requests from "../data/Request";

export const Home = () => {
  return (
    <div>
      <Mains />
      <Row rowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
};
