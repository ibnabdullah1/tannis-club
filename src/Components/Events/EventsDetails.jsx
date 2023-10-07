import { useLoaderData, useParams } from "react-router-dom";
import EventsDetailsCard from "./EventsDetailsCard";
import { useEffect, useState } from "react";

const EventsDetails = () => {
  const [eventDetails, setEventDetails] = useState();
  const { id } = useParams();
  const cardItems = useLoaderData();

  useEffect(() => {
    const findSpecificItem = cardItems?.find(
      (cardItem) => cardItem.id === parseInt(id)
    );
    setEventDetails(findSpecificItem);
  }, [id, cardItems]);

  if (!eventDetails) {
    return null;
  }

  return <EventsDetailsCard eventDetails={eventDetails} />;
};

export default EventsDetails;
