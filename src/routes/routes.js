import { Route, Switch, useLocation } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Events from '../screens/Events/Events';
import Home from '../screens/Home/Home';
import Team from '../screens/Teams/Team';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition classNames="fade" key={location.key} timeout={300}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/teams" component={Team} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRoutes;
