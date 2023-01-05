import React from "react";
import Nav from "../../components/Navbar/Nav";
import Header from "../../components/Header/Header";
import ReachOut from "../../components/ReachOut/ReachForm";
import Footer from "../../components/Footer/Footer";
import CollegeComp from "../../components/college/CollegeComp";
const Home = () => {
    return <>
        <Nav dataChangefunc={() => { }} />
        <Header />
        <CollegeComp />
        <ReachOut />
        <Footer />
    </>
}

export default Home;