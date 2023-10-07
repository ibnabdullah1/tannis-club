import "./banner.css";
const Banner = () => {
  return (
    <div className="min-h-screen banner-bg">
      <div className="banner-overlay min-h-screen flex justify-center items-center px-4">
        <div>
          <h1 className="text-6xl mb-3 md:text-8xl font-bold text-white  Barlow-Condensed ">
            MAKE YOUR GAME
          </h1>
          <p className="text-white text-xl mb-3">
            The academy offers everything you need to become the best!
          </p>
          <div className="md:text-center ">
            <button className="bg-blue-500 uppercase text-white font-semibold py-2 px-4 rounded">
              Join our club
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
