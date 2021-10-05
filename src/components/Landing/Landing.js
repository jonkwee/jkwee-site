import React, { Component } from 'react'
import LandingRow from "./LandingRow"


class Landing extends Component {
    constructor({showMainSectionFunc}) {
        super()

        this.state = {
            rowData: [
                {
                    rotatedText: "J",
                    initialText: "0",
                    rotate: false
                },
                {
                    rotatedText: "O",
                    initialText: "1",
                    rotate: false
                },
                {
                    rotatedText: "N",
                    initialText: "0",
                    rotate: false
                },
                {
                    rotatedText: "A",
                    initialText: ">",
                    rotate: false
                },
                {
                    rotatedText: "T",
                    initialText: "1",
                    rotate: false
                },
                {
                    rotatedText: "H",
                    initialText: "1",
                    rotate: false
                },
                {
                    rotatedText: "A",
                    initialText: "0",
                    rotate: false
                },
                {
                    rotatedText: "N",
                    initialText: "1",
                    rotate: false
                },
                {
                    rotatedText: "K",
                    initialText: "<",
                    rotate: false
                },
                {
                    rotatedText: "W",
                    initialText: "0",
                    rotate: false
                },
                {
                    rotatedText: "E",
                    initialText: "1",
                    rotate: false
                },
                {
                    rotatedText: "E",
                    initialText: "0",
                    rotate: false
                }
            ]
        }

        this.updateRowData.bind(this)
        this.showMainSectionFunc = showMainSectionFunc;
        this.showMainSectionFunc.bind(this)
    }

    shuffleArray(array) {
        for (let i = 0; i < this.generateRandomNumberInRange(5, 15); i++) {
            let indexA = this.generateRandomNumberInRange(0, array.length);
            let indexB = this.generateRandomNumberInRange(0, array.length);
            [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
        }
    }
    
    generateRandomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    updateRowData(index, indexMask) {
        if (index < indexMask.length) {
            let shallowCopy = [...this.state.rowData]
            let elementCopy = {...shallowCopy[indexMask[index]]}
            elementCopy.rotate = true
            shallowCopy[indexMask[index]] = elementCopy
            this.setState({
                rowData: shallowCopy
            }, () => {
                setTimeout(() => {
                    this.updateRowData(index + 1, indexMask);
                }, 50 * index)
            })
        }
    }

    componentDidMount() {
        const indexMask = [];
        for (let i = 0; i < this.state.rowData.length; i++) { indexMask.push(i) };
        this.shuffleArray(indexMask);
        this.updateRowData(0, indexMask);

        setTimeout(() => {
            this.showMainSectionFunc()
        }, 6000)
    }

    render() {
        return (
            <section className="landing">
                <LandingRow rowData={this.state.rowData} startIndex={0} numberPerRow={4}/>
                <LandingRow rowData={this.state.rowData} startIndex={4} numberPerRow={4}/>
                <LandingRow rowData={this.state.rowData} startIndex={8} numberPerRow={4}/>
            </section>
        )
    }
}


export default Landing;