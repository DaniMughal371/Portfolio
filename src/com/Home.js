import React from "react";
import Config from "../config";

function Home() {
    return (
        <div id="home" className="home-container">
            <div className="row">
                <div className="col-md-8 col-lg-6 mx-auto">
                    <h4 className="mini-heading">Hi, my name is</h4>
                    <h1 className="dark-big-heading">{Config.portfolioName}</h1>
                    <h2 className="light-big-heading">{Config.tagLine}</h2>
                    <p className="paragraph">{Config.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
