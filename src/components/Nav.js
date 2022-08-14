import React from "react";

import IcebaseWhite from '../assets/images/IcebaseWhite.png';

export default function Nav() {
    return (
        <>
            <nav>
                <img src={IcebaseWhite} alt="Icebase Music" width="50"></img> <h1>Icebase Music</h1>
            </nav>
        </>
    );
}