import EventsCard from "./EventsCard";

const Events = ({ events }) => {
  return (
    <div className="py-20">
      <div className="flex justify-between items-center pb-10">
        <div>
          <h4 className="uppercase text-2xl font-medium Poppins">Events</h4>
          <h2 className="uppercase text-6xl font-semibold  Barlow-Condensed">
            OUR TOP MEMBERSHIP <br />
            SERVICES FOR YOU
          </h2>
        </div>
        <div>
          <p className="w-[500px] text-xl Poppins">
            The Wimbledon Championships is one of the oldest and most
            prestigious tennis tournaments in the world. It takes place annually
            at the All England Lawn Tennis and Croquet Club in London, England.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3">
        {events.map((event, index) => (
          <EventsCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
