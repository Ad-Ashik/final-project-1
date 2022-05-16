import React from 'react';
import Banner from './Banner';
import Content from './Contact';
import Expart from './Expart';
import Footer from '../Shared/Footer';
import Info from './Info';
import MackAppoinment from './MackAppoinment';
import Services from './Services';
import Testimonails from './Testimonails';


const Home = () => {
    return (
        <div>
            <div className='p-12'>
                <Banner></Banner>
                <Info></Info>
                <Services></Services>
                <Expart></Expart>
            </div>
            <MackAppoinment></MackAppoinment>
            <div className='p-12'>
                <Testimonails></Testimonails>
            </div>
            <Content></Content>
            <div className='p-12'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;