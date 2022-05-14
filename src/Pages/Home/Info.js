import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const info = () => {

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  container mx-auto">
            <InfoCard cardTitle="Opening Hours" bgColor="bg-gradient-to-r from-secondary to-primary" cardDes="the time during which a business or organization is open" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit our location" bgColor="bg-[#3A4256]" cardDes="Brooklyn, NY 10036, United States" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact us now" bgColor="bg-gradient-to-r from-secondary to-primary" cardDes="+000 123 456789" img={phone}></InfoCard>
        </div>
    );
};

export default info;