import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const EventsCard = ({ event }) => {
  const { id, title, image } = event;

  return (
    <div data-aos="zoom-in-down" className="pointer border rounded-md p-5 ">
      <div>
        <img
          className="overflow-hidden w-[130px]  rounded-t-md"
          src={image}
          alt={title}
        />
      </div>
      <div className="pl-3 py-3">
        <h3 className="text-2xl font-semibold mt-2 Barlow-Condensed">
          {title}
        </h3>

        <Link
          to={`/${id}`}
          className="font-semibold  mt-2 Poppins text-blue-500"
        >
          <button className="flex justify-center items-center gap-1">
            Read more <BsArrowRight className="text-2xl" />{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventsCard;
