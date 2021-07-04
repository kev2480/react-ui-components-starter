import { Switch, Route } from "react-router-dom"
import Components from "pages/components";

const Routes = () => {
  return (
    <Switch>
      <Route path="/ui" component={Components} />
    </Switch>
  )
}

export default Routes;