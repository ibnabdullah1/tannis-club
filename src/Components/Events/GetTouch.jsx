import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

const GetInTouch = () => {
  return (
    <div className="bg-white px-6 py-12 ">
      <h3 className="font-semibold  my-3 text-3xl Barlow-Condensed ">
        GET IN TOUCH
      </h3>

      <input
        className="border-b  w-full pl-5 py-4  mb-6"
        type="text"
        name="name"
        placeholder="Enter your name"
        id=""
      />
      <input
        className="border-b  w-full pl-5 py-3  mb-6"
        type="email"
        name="email"
        id=""
        placeholder="Enter "
      />
      <input
        className="border-b w-full pl-5 py-4  mb-6"
        type="text"
        name=""
        id=""
        placeholder="Massage"
      />
      <button
        className="bg-blue-500  hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Get in touch
      </button>

      <h3 className="font-semibold  mt-6 text-3xl Barlow-Condensed ">
        CONTACT INFO
      </h3>
      <p className="flex justify-start mt-4 mb-3 text-gray-500 gap-1">
        <FaLocationArrow className="mt-2" />
        Bangladesh — 785 15h Street,
        <br />
        Office 478 Chottogram,
        <br />
        De 81566
      </p>
      <p className="flex justify-start mb-3 text-gray-500 items-center gap-1">
        <AiOutlineMail />
        tennisClub21@email.com
      </p>
      <p className="flex justify-start mb-3 text-gray-500 items-center gap-1">
        <BsPhone />
        +1809887-4236
      </p>
    </div>
  );
};

export default GetInTouch;
