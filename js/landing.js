/**
 * Creates a indexMask with shuffled index to allow random elements to be chosen.
 * For each random element, add/remove classes to its child elements to trigger keyframe animations.
 */
function rotateWords() {
    let landingRowContainers = document.getElementsByClassName("landing_row--container");

    const indexMask = [];
    for (let i = 0; i < landingRowContainers.length; i++) { indexMask.push(i) };
    shuffleArray(indexMask);

    for (let i = 0; i < indexMask.length; i++) {
        setTimeout(() => {
            const landingRowContainer = landingRowContainers[indexMask[i]];
            const childNodes = landingRowContainer.childNodes;
            const rotateOutElement = childNodes.item(1);
            const rotateInElement = childNodes.item(3);
            rotateInElement.classList.add("rotate-in");
            rotateOutElement.classList.add("rotate-out");
            rotateOutElement.classList.remove("hidden");
        }, 100 * i);
    }

    setTimeout(() => {
        const mainSection = document.getElementById("scroll-target");
        mainSection.classList.remove("hidden");
        mainSection.scrollIntoView();
    }, 4500);

}

function shuffleArray(array) {
    for (let i = 0; i < generateRandomNumberInRange(5, 15); i++) {
        let indexA = generateRandomNumberInRange(0, array.length);
        let indexB = generateRandomNumberInRange(0, array.length);
        [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
    }
}

function generateRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

rotateWords();