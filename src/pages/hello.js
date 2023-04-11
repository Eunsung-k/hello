import React from "react";
import World from "./world";

export default function Hello() {
    return (
        <>
            <h1>
                Hello,
                <World name="Future" />!
            </h1>
            <img src="ham.JPG" alt="hamster" />
        </>
    );
}