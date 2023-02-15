import React from "react"
import Navbar from "./Navbar"
import Search from "./Search"
import roma from "./assets/img/Screenshot_1.png";
import roma6 from "./assets/img/Screenshot_8.png"
import roma9 from "./assets/img/Screenshot_21.jpg"
import "./style.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button, ButtonGroup, Heading, Icon, Stack,Text,Divider,Box } from "@chakra-ui/react";
const Sof = () => {
  
  return(
  <div>
  <img
        src={roma}
        style={{ position: "relative", top: "30px", left: "300px" }}
        alt=""
        
      />
    <img src={roma6} style={{position:"relative", bottom:"50px", left:"500px"}} alt="" />

<div style={{display:"flex",paddingLeft:"100px",height:"30px",white:"100%",backgroundColor:"whitesmoke",border:"1px solid gray"}}>
    <p style={{color:"purple"}}>Abonentlarga</p>
    <p>-Tariflar</p>
</div>
<Heading fontSize="2xl" style={{marginLeft:"150px",color:"skyblue",marginTop:"30px"}}>Tariflar</Heading>
    <Search/>
    <img src={roma9} alt="" />


    <Tabs variant='enclosed'>
  <TabList>
    <Tab><Heading fontSize="1xl" style={{}}>Smartfonlar uchun tariflar</Heading></Tab>
    <Tab><Heading fontSize="1xl" style={{}}>Internet uchun</Heading></Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
  </div>
  )
}

export default Sof