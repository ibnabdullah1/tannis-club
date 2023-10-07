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
    <div className="bg-[#F6F5F9]">
      <div className="min-h-[50vh] Barlow-Condensed uppercase flex justify-center items-center  font-semibold text-6xl ">
        {title}
      </div>
      <div>
        <img className="w-full" src={details_img} alt="" />
        <h2 className=" Barlow-Condensed font-semibold text-3xl mt-3">
          {details_title}
        </h2>
        <p className="Poppins my-3">{description}</p>
        <p className="Poppins my-3">{description2}</p>
        <p className="Poppins my-3">{description3}</p>
        <div className="flex">
          <div>
            <img src={details_img2} alt="" />{" "}
          </div>
          <div>
            <img src={details_img1} alt="" />
          </div>
        </div>
        <p className="Poppins my-3">{description4}</p>
        <p className="Poppins my-3">{description5}</p>
      </div>
    </div>
  );
};

export default EventsDetailsCard;
