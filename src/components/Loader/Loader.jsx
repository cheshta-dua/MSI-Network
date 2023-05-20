import { InfinitySpin } from 'react-loader-spinner'
import React from 'react';
import "./Loader.css";
const Loader = () => {
    return (
        <div className="loader">
            <InfinitySpin
                width='200'
                color="#303090"
            />
        </div>
    )
}

export default Loader;