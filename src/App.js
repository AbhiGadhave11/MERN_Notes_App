import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Landingpage from './screens/Landingpage/Landingpage';
import {BrowserRouter,Route,Router,Routes} from "react-router-dom"
import MyNotes from './screens/MyNotes/MyNotes'
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

function App() {
  return (
     <BrowserRouter>
     <div> 
      <Header></Header>
      <div container className="my-3">
        {/* <Routes>
          <Route path='/' element={<Landingpage/>} />
          <Route path='/login' element={<LoginScreen/>} />
          <Route path='/register' element={<RegisterScreen/>} />
          <Route path='/mynotes' element={<MyNotes/>} />
          
        </Routes> */}
        <Routes>
          <Route path="/" element={<Landingpage/>} exact />
          <Route path='/login' element={<LoginScreen/>} />
          <Route path="/mynotes" element={<MyNotes/>} />

          {/* <Route path="/mynotes" element = {({ history }) => (
              <MyNotes  history={history} />
            )}
          /> */}

        {/* <Route path="/mynotes" element={
          ({ history }) => (
            <MyNotes  history={history} />
          )}
        /> */}

        
        </Routes>

        

      </div>
      <Footer></Footer>
      </div>
    </BrowserRouter> 
    
  );
}

export default App;
