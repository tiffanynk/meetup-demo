import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

export default function Favorites() {
  const favoriteMeetups = useContext(FavoritesContext);

  let content;

  if (favoriteMeetups.totalFavorites === 0) {
    content = <p>You have no favorites! Start adding some!</p>;
  } else {
    content = <MeetupList meetups={favoriteMeetups.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
