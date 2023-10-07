import GetInTouch from "./GetTouch";
import PropTypes from "prop-types";
const EventsDetailsCard = ({ eventDetails }) => {
  const {
    details_img,
    details_img1,
    details_img2,
    details_title,
    title,
    description,
    description2,
    description3,
    description4,
    description5,
  } = eventDetails;

  console.log(title, description);

  return (
    <div className="bg-[#F6F5F9] ">
      <div className="min-h-[50vh] mt-6 lg:mt-0 Barlow-Condensed uppercase flex justify-center items-center  font-semibold text-5xl lg:text-6xl ">
        {title}
      </div>
      <div className=" lg:grid grid-cols-3 px-8 gap-5 ">
        <div className="col-span-2">
          <div>
            <img className="w-full" src={details_img} alt="" />
            <h2 className=" Barlow-Condensed font-semibold text-3xl mt-3">
              {details_title}
            </h2>
            <p className="Poppins my-3">{description}</p>
            <p className="Poppins my-3">{description2}</p>
            <p className="Poppins my-3">{description3}</p>
            <div className="flex gap-3">
              <div>
                <img className=" w-auto h-auto" src={details_img2} alt="" />{" "}
              </div>
              <div>
                <img className=" w-auto h-auto" src={details_img1} alt="" />
              </div>
            </div>
            <p className="Poppins my-3">{description4}</p>
            <p className="Poppins my-3">{description5}</p>
          </div>

          <div>
            <div className=" p-4 rounded-lg w-full mx-auto mt-40">
              <h2 className=" Barlow-Condensed font-semibold text-3xl mb-3">
                Leave a comment
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                    id="name"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="comment"
                  >
                    Comment
                  </label>
                  <textarea
                    rows="4"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                    id="comment"
                    placeholder="Enter your comment"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Post Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-1ol ">
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

EventsDetailsCard.propTypes = {
  eventDetails: PropTypes.shape({
    details_img: PropTypes.string,
    details_img1: PropTypes.string,
    details_img2: PropTypes.string,
    details_title: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    description2: PropTypes.string,
    description3: PropTypes.string,
    description4: PropTypes.string,
    description5: PropTypes.string,
  }).isRequired,
};
export default EventsDetailsCard;
