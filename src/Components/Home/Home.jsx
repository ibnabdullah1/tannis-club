import { useLoaderData } from "react-router-dom";
import Events from "../Events/Events";
import Banner from "../Banner/Banner";
import About from "../About/About";

const Home = () => {
  const events = useLoaderData();

  return (
    <>
      <Banner />
      <Events events={events} />
      <About />
    </>
  );
};

export default Home;
