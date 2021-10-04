import React, { useEffect, useState } from 'react'
import LandingRow from "./LandingRow"

function Landing() {

    const [rowData, setRowData] = useState([
        {
            rotatedText: "J",
            initialText: "0"
        },
        {
            rotatedText: "O",
            initialText: "1"
        },
        {
            rotatedText: "N",
            initialText: "0"
        },
        {
            rotatedText: "A",
            initialText: ">"
        },
        {
            rotatedText: "T",
            initialText: "1"
        },
        {
            rotatedText: "H",
            initialText: "1"
        },
        {
            rotatedText: "A",
            initialText: "0"
        },
        {
            rotatedText: "N",
            initialText: "1"
        },
        {
            rotatedText: "K",
            initialText: "<"
        },
        {
            rotatedText: "W",
            initialText: "0"
        },
        {
            rotatedText: "E",
            initialText: "1"
        },
        {
            rotatedText: "E",
            initialText: "0"
        }
    ])

    // const rotateWords = () => {
    //     let landingRowContainers = document.getElementsByClassName("landing_row--container");
    
    //     const indexMask = [];
    //     for (let i = 0; i < landingRowContainers.length; i++) { indexMask.push(i) };
    //     shuffleArray(indexMask);
    
    //     for (let i = 0; i < indexMask.length; i++) {
    //         setTimeout(() => {
    //             const landingRowContainer = landingRowContainers[indexMask[i]];
    //             const childNodes = landingRowContainer.childNodes;
    //             const rotateOutElement = childNodes.item(1);
    //             const rotateInElement = childNodes.item(3);
    //             rotateInElement.classList.add("rotate-in");
    //             rotateOutElement.classList.add("rotate-out");
    //             rotateOutElement.classList.remove("hidden");
    //         }, 100 * i);
    //     }
    
    //     setTimeout(() => {
    //         const mainSection = document.getElementById("scroll-target");
    //         mainSection.classList.remove("hidden");
    //         document.getElementById("translate-up").classList.add("move-up");
    //     }, 4500);
    
    // }
    
    // const shuffleArray = (array) => {
    //     for (let i = 0; i < generateRandomNumberInRange(5, 15); i++) {
    //         let indexA = generateRandomNumberInRange(0, array.length);
    //         let indexB = generateRandomNumberInRange(0, array.length);
    //         [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
    //     }
    // }
    
    // const generateRandomNumberInRange = (min, max) => {
    //     return Math.floor(Math.random() * (max - min) + min);
    // }

    // useEffect(() => {
    //     rotateWords()
    // })

    return (
        <section className="landing">
            <LandingRow rowData={rowData} startIndex={0} numberPerRow={4}/>
            <LandingRow rowData={rowData} startIndex={4} numberPerRow={4}/>
            <LandingRow rowData={rowData} startIndex={8} numberPerRow={4}/>
        </section>
    )
}

export default Landing;