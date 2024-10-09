import { Hero } from "./Hero";
import { Row } from "./Row";
import req from "../Requests";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Row rowID="1" title="Up Coming" feURL={req.requestUpcoming} />
      <Row rowID="2" title="Pupular" feURL={req.requestPopular} />
      <Row rowID="3" title="Trending" feURL={req.requestTrending} />
      <Row rowID="4" title="Top Rated" feURL={req.requestTopRated} />
    </div>
  );
};
