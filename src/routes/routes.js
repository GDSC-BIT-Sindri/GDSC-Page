import { Route, Switch, useLocation } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from '../screens/Home/Home';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition classNames="fade" key={location.key} timeout={300}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRoutes;
