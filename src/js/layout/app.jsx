import React from "react";
import Navbar from '../component/Navbar';
import Jumbotron  from "../component/Jumbotron";
import Card from "../component/Cards";
import Footer from '../component/Footer';


const App = () =>{
    const multipleCards = () => {
        const cards = [];
        for (let i = 0; i < 4; i++) {
            cards.push(<Card key={i} />);
        }
        return cards;
    };
    return(
        <div>
            <Navbar/>
            <div className='container'>
                <Jumbotron/>
                <div class='row'>
                    {multipleCards()}
                </div>
            </div>
            <div className='container'>
                
            </div>
            <div className='container-fluid'>
                <Footer/>
            </div>
        </div>
    )
};

export default App;