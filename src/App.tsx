import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './assets/style/global.css'
import Index from './pages/Index/Index'
import Main from './pages/Main/Main'

const App = function () {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/main" component={Main}/>
            </Switch>
        </BrowserRouter>
    );
  };
  
  export default App;