import React, { useState, useEffect } from 'react';
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import ReachOut from "../../components/ReachOut/ReachForm";
import Footer from "../../components/Footer/Footer";
import Features from "../../components/Features/Features";
import Path from "../../components/Path/Path";
// import CollegeComp from "../../components/college/CollegeComp";
import InstaPosts from "../../components/InstaPosts/Insta";
const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulating a delay before the homepage is considered loaded
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <Header />
                    <Features />
                    <Path />
                    {/* <CollegeComp /> */}
                    <InstaPosts />
                    <ReachOut />
                    <Footer />
                </div>
            )}
        </div>
    );
}

// before loader code, keeping for backup 
// return <>
//     <Header />
//     <Features />
//      <CollegeComp /> 
//     <InstaPosts />
//     <ReachOut />
//     <Footer />
// </>
//}

export default Home;