import EventsCard from "./EventsCard";
import PropTypes from "prop-types";
const Events = ({ events }) => {
  return (
    <div className="py-20">
      <div className="lg:flex justify-between items-center pb-10 px-8">
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-easing="ease-in-sine"
        >
          <h4 className="uppercase  text-xl lg:text-2xl font-medium Poppins">
            Events
          </h4>
          <h2 className="uppercase text-4xl mb-3 lg:text-6xl font-semibold  Barlow-Condensed">
            OUR TOP MEMBERSHIP <br />
            SERVICES FOR YOU
          </h2>
        </div>
        <div>
          <p
            className="lg:w-[500px] text-xl Poppins"
            data-aos="zoom-out-left"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
          >
            The Wimbledon Championships is one of the oldest and most
            prestigious tennis tournaments in the world. It takes place annually
            at the All England Lawn Tennis and Croquet Club in London, England.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3 px-6">
        {Array.isArray(events) ? (
          events.map((event, index) => <EventsCard key={index} event={event} />)
        ) : (
          <p>No events to display</p>
        )}
      </div>
    </div>
  );
};

Events.propTypes = {
  events: PropTypes.array.isRequired,
};
export default Events;
