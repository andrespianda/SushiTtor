
import "./App.css";
//import Login from "./components/Login";
import Navbar from "./components/common/navbar/Navbar";
// import Contents from "./components/layouts/Contents";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import AppRouter from "./components/router/router";


function App() {
  return (
    <div className="m-9 pt-4">
      <Navbar/>
      <AppRouter/>
      {/* <Login /> */}
      {/* <Contents/> */}
    </div>
  );
}

export default App;
