
import Header from './Routes/Shared/Header/Header';
import Footer from './Routes/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './Routes/Landing Page/Index/Index';
import PlaceDetails from './Routes/Landing Page/PlaceDetails/PlaceDetails';
import Login from './Routes/Users/Login/Login';
import Register from './Routes/Users/Register/Register';
import Places from './Routes/Landing Page/Places/Places';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Routes/Users/PrivateRoute/PrivateRoute';
import ManageAll from './Routes/Manage/ManageAll/ManageAll';
import AddServices from './Routes/AddServices/AddServices';
import ContactUs from './Routes/ContactUs/ContacUs'
import NotFound from './Routes/NotFound/NotFound';
import About from './Routes/About/About';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Index></Index>
            </Route>
            <Route path="/home">
              <Index></Index>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/places">
              <Places></Places>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/manageallorders">
              <ManageAll></ManageAll>
            </Route>
            <Route path="/addservice">
              <AddServices></AddServices>
            </Route>
            <PrivateRoute exact path="/detailsplace/:id">
              <PlaceDetails></PlaceDetails>
            </PrivateRoute>
            <Route  path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
