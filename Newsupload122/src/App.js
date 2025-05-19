
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Header from './Header';
import Mycontext from './Mycontext';
import { useState } from 'react';
import Search from './Search';
import Headline from './Headline';
function App() {
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [PhoneNumber, SetPhoneNumber] = useState("");
  const [Password, SetPassword] = useState("");
  const [Check,SetCheck]=useState(false);
  const [Check1,SetCheck1]=useState(false)
  return (
    <Mycontext.Provider value={{ Name, Email, PhoneNumber, Password,Check,Check1, SetEmail, SetName, SetPassword, SetPhoneNumber,SetCheck,SetCheck1 }}>
      <BrowserRouter>

        <div className="App">
        
          <Header />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/headline" element={<Headline />} />


          </Routes>


        </div>


      </BrowserRouter>
    </Mycontext.Provider>
  );
}

export default App;
