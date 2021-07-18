import { Redirect, Route, Switch } from "react-router-dom";
import { Home, Login } from "../pages";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/inicio' />
      </Route>
      <Route exact path='/inicio' component={Home} />
      <Route exact path='/login' component={Login} />
    </Switch>
  )
}