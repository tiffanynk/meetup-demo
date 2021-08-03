import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";
export default function MeetupItem(props) {
  const favorites = useContext(FavoritesContext);
  const favoriteItem = favorites.isItemFavorite(props.id);

  function toggleFavoriteStatus() {
    if (favoriteItem) {
      favorites.removeFavorite(props.id);
    } else {
      favorites.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatus}>
            {favoriteItem ? "❌" : "🤍"}
          </button>
        </div>
      </Card>
    </li>
  );
}
