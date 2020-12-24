import './App.css'
import { HomePage } from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'


const Hats = () => {
  return (
    <div>
      hats page
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
