import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home'
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Opportunities from "./pages/investment/Opportunities";
import Investment from "./pages/investment/Investment";
import Help from "./pages/investment/Help";
import Opportunity1 from "./pages/investment/Opportunity1";
import Opportunity2 from "./pages/investment/Opportunity2";
import Opportunity3 from "./pages/investment/Opportunity3";
import Opportunity4 from "./pages/investment/Opportunity4";
export default function App(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/investment" element={<Investment/>}>
            <Route path="profile" element={<Profile/>}/>
            <Route path="help" element={<Help/>}/>
            <Route path="opportunities" element={<Opportunities/>}>
              <Route path="opportunity1" element={<Opportunity1/>}/>
              <Route path="opportunity2" element={<Opportunity2/>}/>
              <Route path="opportunity3" element={<Opportunity3/>}/>
              <Route path="opportunity4" element={<Opportunity4/>}/>
            </Route>
          </Route>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}