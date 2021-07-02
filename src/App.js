import { Switch, Route } from 'react-router-dom'
import {Suspense, lazy} from 'react'

import './App.css';
import Loader from './Components/Loader/Loader'

const Home = lazy(() => import('./Pages/Home/Home'))
const Contact = lazy(() => import('./Pages/Contact/Contact'))
const EquipmentExposure = lazy(() => import('./Pages/EquipmentExposure/EquipmentExposure'))
const ProjectLanding = lazy(() => import('./Pages/Projects/Projects'))
const ErrorPage = lazy(() => import('./Pages/Error/Error'))


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div><Loader /></div>}>
        <Switch>
          <Route path="/ramakanta_mishra/" component={Home} />
          <Route exact path="/ramakanta_mishra/projects" component={ProjectLanding} />
          <Route exact path="/ramakanta_mishra/equipment" component={EquipmentExposure} />
          <Route exact path="/ramakanta_mishra/contact" component={Contact} />
          <Route component={ErrorPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
