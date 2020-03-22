import React from 'react';
import { HashRouter as Router, Route, Redirect } from "react-router-dom"
// 首页，tabar页
import Home from "./pages/home"
// 地图找房
import MapFound from "./pages/mapFound"
// 城市选择
import CitySelect from "./pages/CitySelect";
// import found from "./pages/found"


function App() {
  return (
    <div className="App">
      <Router>
        {/* home即为tabar页 */}
        {/* <Route component={found} path="/found"></Route> */}
        <Route component={Home} path="/home"></Route>
        <Route  path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route component={MapFound} path="/MapFound"></Route>
        <Route component={CitySelect} path="/CitySelect"></Route>
      </Router>
    </div>
  );
}

export default App;
