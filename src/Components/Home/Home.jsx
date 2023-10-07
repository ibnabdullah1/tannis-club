import { useLoaderData } from "react-router-dom";
import Events from "../Events/Events";
import Banner from "../Banner/Banner";

const Home = () => {
  const events = useLoaderData();

  return (
    <>
      <Banner />
      <Events events={events} />
    </>
  );
};

export default Home;
