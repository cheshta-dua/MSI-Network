import React from "react";
import Header from "../../components/Header/Header";
import ReachOut from "../../components/ReachOut/ReachForm";
import Footer from "../../components/Footer/Footer";
import Features from "../../components/Features/Features";
// import CollegeComp from "../../components/college/CollegeComp";
import InstaPosts from "../../components/InstaPosts/Insta";
const Home = () => {
    return <>

        <Header />
        <Features />
        {/* <CollegeComp /> */}
        <InstaPosts />
        <ReachOut />
        <Footer />
    </>
}

export default Home;