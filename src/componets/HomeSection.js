import React from 'react'
import { Herosection } from './Herosection';
import Aboutus from "./Aboutus";
import Azurecompnt from "./Azurecompnt";
import Awscompnt from "./Awscompnt";
import Ourvision from './Ourvsion';
const HomeSection = () => {
  return (
    <div>
        <Herosection/>
        <Aboutus/>
        <Ourvision/>
        <Azurecompnt/>
        <Awscompnt/> 
    </div>
  )
}

export default HomeSection
