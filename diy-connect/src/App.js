import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './screens/Home';
import Map from './screens/Map';
import Account from './screens/Account';

const HomePage = () => (
  <Home/>
)

const MapPage = () => (
  <Map/>
)

const AccountPage = ({ match }) => (
  <Account/>
)

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>
//
//     <Route path={`${match.path}/:topicId`} component={Topic}/>
//     <Route exact path={match.path} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

const App = () => (
  <Router style={{
      flex:1
    }}>
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/account" component={AccountPage}/>
      <Route path="/map" component={MapPage}/>
    </div>
  </Router>
)
export default App
