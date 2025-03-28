import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GridView from "../src/GridView";
import Tudo from "./Tudo";
import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";
 const user = {
    name: 'Name :Hariharan C',
    email: 'E-mail :harii@example.com',
    address: 'Address :74 Kumaran Road, Tirupur, India',
    achievements: [
      'Completed 100+ projects in the last year',
      'Certified Full Stack Developer',
      'Published 5 technical articles',
      'Won Developer of the Year 2023',
    ],
    image: 'https://www.w3schools.com/w3images/avatar2.png', 
  };
function App() {
  return (
    <BrowserRouter>
      <Navbar />
    
      <Routes>
     
      <Route path="/" element={<Tudo />} />
        <Route path="/gridview" element={<GridView />} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/profilecard" element={<ProfileCard  name={user.name}
        email={user.email}
        address={user.address}
        achievements={user.achievements}
        image={user.image}
 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;