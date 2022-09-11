import React from "react";

import Nav from "./Nav";

export default function Wrapper(content) {
    return (
        <div className="wrapper">
            <Nav/>
            {content.children}
        </div>
    );
}