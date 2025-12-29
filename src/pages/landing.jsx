import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage(){

    const router = useNavigate();

    return(
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2>vCall</h2>
                </div>

                <div className="navList">
                    <p onClick={()=>{
                        router("/aljk23")
                    }}>Join as Guest</p>

                    <p onClick={()=>{
                        router("/auth")
                    }} >Register</p>

                    <div onClick={()=>{
                        router("/auth")
                    }} role="button"> <p>Login</p> </div>

                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1> <span style={{color: "#FF9839"}}>Connect</span> Anytime Anywhere </h1>
                    <p>Turn every video call into a real connection</p>
                    <div role="button">
                        <Link to={"/home"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="phone3.svg" alt="" />
                </div>
            </div>
        </div>
    )
}