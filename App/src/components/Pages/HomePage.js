import React, { useState, useEffect } from 'react';
import SparkHomePage from './SparkHomePage';
import LoginPage from './Login/LoginPage';
import Spark from '../Spark';
export default function HomePage({data, setActiveNav}) {

    if(!data.token){
        
        return(
            <LoginPage ></LoginPage>
        )
    }
    return (
        <SparkHomePage setActiveNav= {setActiveNav}></SparkHomePage>
    )
 
}
