import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "../Login";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={login} />
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
//   return (
//     <div>
//       <h2 style={{ marginTop: 300 }}>
//         400
//         <br />
//         Pagina no Encontrada
//       </h2>
//     </div>
//   );
// }
