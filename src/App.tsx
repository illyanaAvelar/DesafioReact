import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './shared/assets/style/global.css'
import Index from './pages/Index/Index'
import Main from './pages/Main/Main'
import RentalSpecifications from './pages/RentalSpecifications/RentalSpecifications'

const App = function () {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/main" component={Main}/>
                <Route exact path="/rental-specifications" component={RentalSpecifications}/>
            </Switch>
        </BrowserRouter>
    );
  };
  
  export default App;