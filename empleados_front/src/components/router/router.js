import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "../Login";
import PrivateRoute from "../auth/privateroute";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={login} />
        <PrivateRoute exact path="/home" component={Home}/>
        <Route
          path={'*'}
          component={() => (
            <h1 style={{ alignContent: 'center' }}>
              400
              <br />
              Pagina no Encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>
  
// }

function Home() {
  return (
    <div>
      <h2 style={{ marginTop: 300 }}>
        AQUI
        <br />
       HOME
      </h2>
    </div>
  );
}
