import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import {BrowserRouter,Route} from 'react-router-dom';
import { MyNotes } from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";



function App() {
  return (
    <BrowserRouter>
       <Header/>
       <main >
         <Route path='/' component={LandingPage} exact/>
         <Route path='/mynotes' component={()=><MyNotes/>} exact />
         <Route path='/register' component={()=><RegisterScreen/>} exact />
         <Route path='/login' component={()=><LoginScreen/>} exact />
         
         
       </main>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
