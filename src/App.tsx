import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './shared/assets/style/global.css'
import Index from './pages/Index/Index'
import Main from './pages/Main/Main'
import RentalSpecifications from './pages/RentalSpecifications/RentalSpecifications'
import Register from './pages/Register/Register'

const App = function () {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/main" component={Main}/>
                <Route exact path="/rental-specifications" component={RentalSpecifications}/>
                <Route exact path="/register" component={Register}/>
            </Switch>
        </BrowserRouter>
    );
  };
  
  export default App;