import React from "react";
import { useHistory } from "react-router";
import MeetupForm from "../components/meetups/MeetupForm";

const meetupURL =
  "https://meetup-demo-87459-default-rtdb.firebaseio.com/meetups.json";

export default function NewMeetup() {
  const history = useHistory();

  const handleAddMeetup = (meetupData) => {
    fetch(meetupURL, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  };

  return (
    <section>
      <h1>Add a Meetup</h1>
      <MeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
}
