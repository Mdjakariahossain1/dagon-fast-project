import React from 'react';
import Headar from '../Shear/Headar/Headar';
import Navbar from '../Shear/Navbar/Navbar';
import Left from '../Shear/Left/Left';
import Right from '../Shear/Right/Right';
import Brekingneus from './Brekingneus';

const Home = () => {
    return (
        <div>
            <Headar></Headar>
            <Brekingneus></Brekingneus>
            <Navbar></Navbar>
            <h1 className='text-2xl font-popping font-bold'>Md jakaria sikther</h1>
            <div className='grid lg:grid-cols-4 border gap-6'>
            <div className='border'>
                <Left></Left>
            </div>
            <div className='border md:col-span-2'>
                <h2> md jakari sikther</h2>
             </div>
            <div className='border'>
                <Right></Right>
            </div>
            </div>
        </div>
    );
};

export default Home;