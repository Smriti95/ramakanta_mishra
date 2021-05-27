import { Switch, Route } from 'react-router-dom'

import './App.css';
import Home from './Pages/Home/Home'
import Experience from './Pages/Experience/Experience'
import Contact from './Pages/Contact/Contact'
import CompanyExperience from './Pages/Experience/CompanyExperience'
import EquipmentExposure from './Pages/EquipmentExposure/EquipmentExposure'
import ProjectLanding from './Pages/Projects/ProjectLanding'
import ErrorPage from './Pages/Error/Error'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Home} />
        <Route exact path="/projects" component={ProjectLanding} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/experience/:companyName" component={CompanyExperience} />
        <Route exact path="/equipment" component={EquipmentExposure} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route component={ErrorPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
