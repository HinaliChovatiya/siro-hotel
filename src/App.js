import logo from './logo.svg';
import './App.css';
import Header from './shared/components/header';
import Home from './modules/home';
import Footer from './shared/components/footer';
import Philo from './modules/philo';
import Hotels from './modules/hotels';
import The from './modules/the';
import Our from './modules/our';
import Membership from './modules/membership';
import Stay from './modules/stay';
import Contact from './modules/contact us';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Hotels/>
      <Philo/>
      <The/>
      <Our/>
      <Membership/>
      <Stay/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
