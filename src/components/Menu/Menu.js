import React from "react";
import {Link } from "gatsby";
import SocialMedia from "../SocialMedia";
import Courses from "../Courses";
import "./Menu.scss";

export default function Menu() {
    return (
        <div className="menu">
           <Link to="/">
               <h2>Blog Developer</h2>
           </Link>
           <p>
               Blog about web programming React, Node, Gatsby, Express, Bootstrap...
           </p>
           <SocialMedia />
           <Courses />
        </div>
    )
}