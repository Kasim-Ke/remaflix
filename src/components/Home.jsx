import { Hero } from "./Hero";
import { Row } from "./Row";
import req from "../Requests";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Row title="Up Coming" feURL={req.requestUpcoming} />
      <Row title="Pupular" feURL={req.requestPopular} />
      <Row title="Trending" feURL={req.requestTrending} />
      <Row title="Top Rated" feURL={req.requestTopRated} />
      <Row title="Horror" feURL={req.requestHorror} />
    </div>
  );
};
