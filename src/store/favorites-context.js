import { createContext, useState } from "react";

//context is an object that will contain a react component
//context takes an argument that is the intial value
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  isItemFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function handleAddFavorite(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function handleRemoveFavorite(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function handleIsItemFavorite(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }
  //context object that gets passed to the provider, all components that are listening to the context will get updated
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    isItemFavorite: handleIsItemFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
