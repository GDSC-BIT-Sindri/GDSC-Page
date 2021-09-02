import { Route, Switch } from 'react-router';
import Events from '../screens/Events/Events';
import Home from '../screens/Home/Home';
import Team from '../screens/Teams/Team';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/teams" component={Team} />
    </Switch>
  );
};

export default AppRoutes;
