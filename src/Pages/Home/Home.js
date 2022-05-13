import React from 'react';
import Banner from './Banner';
import Content from './Contact';
import Expart from './Expart';
import Footer from './Footer';
import Info from './Info';
import MackAppoinment from './MackAppoinment';
import Services from './Services';
import Testimonails from './Testimonails';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Expart></Expart>
            <MackAppoinment></MackAppoinment>
            <Testimonails></Testimonails>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
};

export default Home;