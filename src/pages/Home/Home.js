import React from "react";
import Nav from "../../components/Navbar/Nav";
import Header from "../../components/Header/Header";
import Alumni from "../../components/Alumni_HomePage/Alumni";
import ReachOut from "../../components/ReachOut/ReachForm";
import Footer from "../../components/Footer/Footer";
const Home= ()=>{
    return <>
        <Nav />
        <Header />
        <Alumni />
        <ReachOut />
        <Footer />
    </>
}

export default Home;