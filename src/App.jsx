import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseClient";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const [user,setUser]=useState(null);
  const [page,setPage]=useState("home");

  useEffect(()=>onAuthStateChanged(auth,setUser),[]);

  if(page==="login") return <><Login onLogin={u=>{setUser(u);setPage("admin")}} goRegister={()=>setPage("register")}/></>;
  if(page==="register") return <><Register onRegister={u=>{setUser(u);setPage("admin")}} goLogin={()=>setPage("login")}/></>;
  if(page==="admin") return <AdminDashboard user={user} onLogout={()=>{setUser(null);setPage("home")}}/>;

  return (
    <>
      <Navbar />
      <div className="account-actions">
        {user ? <button className="button" onClick={()=>setPage("admin")}>Admin Dashboard</button> : <button className="button" onClick={()=>setPage("login")}>Login</button>}
      </div>
      <main>
        <Hero/><About/><Menu/><Testimonials/><Gallery/><Contact/>
      </main>
      <Footer/>
    </>
  );
}
