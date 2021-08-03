import { Route, Switch } from "react-router";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import NewMeetup from "./pages/NewMeetup";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}
