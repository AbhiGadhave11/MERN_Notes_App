import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Landingpage from './screens/Landingpage/Landingpage';
import {Route,Routes} from "react-router-dom"
import MyNotes from './screens/MyNotes/MyNotes';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

function App() {
  return (
    <div> 
      <Header></Header>
      <div container className="my-3">
        <Routes>
          <Route path='/' element={<Landingpage/>} />
          {/* <Route path='/login' element={<LoginScreen/>} />
          <Route path='/register' element={<RegisterScreen/>} /> */}
          <Route path='/mynotes' element={<MyNotes/>} />
          
        </Routes>
      </div>
      <Footer></Footer>
      </div>
    
  );
}

export default App;
