import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div
            className="max-w-lg"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
          >
            <h2 className="uppercase text-4xl mb-3 lg:text-6xl font-semibold  Barlow-Condensed">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Tennis is a racket sport that is played either individually
              against a single opponent (singles) or between two teams of two
              players each (doubles). Each player uses a tennis racket that is
              strung with cord to strike a hollow rubber ball covered with felt
              over or around a net and into the opponents court. The object of
              the game is to manoeuvre the ball in such a way that the opponent
              is not able to play a valid return. The player who is unable to
              return the ball validly will not gain a point, while the opposite
              player will.
            </p>
            <div className="mt-8">
              <Link
                to="/"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn more about us <span className="ml-2">&#8594;</span>
              </Link>
            </div>
          </div>
          <div
            className="mt-12 md:mt-0"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <img
              src="https://i.ibb.co/kHM2GBr/img.webp"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
