import React from "react";
import Header from "../../components/Header/Header";
import ReachOut from "../../components/ReachOut/ReachForm";
import Footer from "../../components/Footer/Footer";
import CollegeComp from "../../components/college/CollegeComp";
import InstaPosts from "../../components/InstaPosts/Insta";
const Home = () => {
    return <>
        
        <Header />
        <CollegeComp />
        <InstaPosts />
        <ReachOut />
        <Footer />
    </>
}

export default Home;