
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footersection } from './componets/Footersection';
import AzureNine from './componets/AzureNine';
import HomeSection from './componets/HomeSection';
import Navbarcomponet from './componets/Navbar';
import Azureonefoure from './componets/Azureonefoure';
import AwsSecurity from './componets/Awscompents/AwsSecurity';
import AwsServer from './componets/Awscompents/AwsServer';
import Awsarchiture from './componets/Awscompents/Awsarchiture';
import Awsnetworking from './componets/Awscompents/Awsnetworking';




function App() {
  return (

    <> 
     <Router>
     <Navbarcomponet/>
    
     
    
     
       <Routes>
          <Route path='/' element={<HomeSection/>}/>

          <Route path="/azurenine" element={<AzureNine />} />
          <Route path="/azfoure" element={<Azureonefoure/>} />
          <Route path="/security" element={ <AwsSecurity/>} />
          <Route path="/network" element={  <Awsnetworking/>} />
          <Route path="/architecture" element={ <Awsarchiture/>} />
          <Route path="/server" element={ <AwsServer/>} />
          
          
        </Routes>  
        <Footersection/>
  </Router>
   </>
  );
}

export default App;
