import React from "react";

import IcebaseBlack from '../assets/images/IcebaseBlack.png';

export default function Nav() {
    return (
        <>
            <nav>
                <img src={IcebaseBlack} alt="Icebase Music" width="50"></img> <h1>Icebase Music</h1>
            </nav>
        </>
    );
}