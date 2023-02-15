import { useEffect, useState } from "react";
import { Button, ButtonGroup, Heading, Icon, Stack,Text,Divider } from "@chakra-ui/react";
import {  AddIcon, WarningIcon, ChatIcon, InfoIcon,  } from '@chakra-ui/icons'
import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Search from "./Searcha"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import roma from "./assets/img/Screenshot_1.png";
import tillo from "./assets/img/Screenshot_51.png";
import roma1 from "./assets/img/Screenshot_2.png"
import roma2 from "./assets/img/Screenshot_3.png"
import roma3 from "./assets/img/Screenshot_4.png"
import roma4 from "./assets/img/Screenshot_5.png"
import roma5 from "./assets/img/Screenshot_6.png"
import roma6 from "./assets/img/Screenshot_8.png"
import roma7 from "./assets/img/Screenshot_9.png"
import roma8 from "./assets/img/Screenshot_10.png"
import roma9 from "./assets/img/Screenshot_11.png"
import roma10 from "./assets/img/Screenshot_12.png"
import Screenshot from "./assets/img/Screenshot_13.png"
import Screenshot1 from "./assets/img/Screenshot_20.jpg"
import Screenshot2 from "./assets/img/Screenshot_21.jpg"
import Screenshot3 from "./assets/img/Screenshot_22.jpg"
import Screenshot4 from "./assets/img/Screenshot_23.jpg"
import roma11 from "./assets/img/Screenshot_30.png"
import roma12 from "./assets/img/Screenshot_31.png"
import roma13 from "./assets/img/Screenshot_32.png"
import roma14 from "./assets/img/Screenshot_33.png"
import roma15 from "./assets/img/Screenshot_34.png"
import roma16 from "./assets/img/Screenshot_35.png"

const Korporatsiya = () => {
  const  handleDragStart  =  ( e )  =>  e . preventDefault ( ) ;

const  items  =  [ 
  < img  src = {roma11}  onDragStart = { handleDragStart }  rol = "taqdimot"  / > , 
  < img  src = {roma12}  onDragStart = { handleDragStart }  rol = "taqdimot"  / > , 
  < img  src = {roma13}  onDragStart = { handleDragStart }  roli ="presentation"  / > , 
  < img  src = {roma14}  onDragStart = { handleDragStart }  roli ="presentation"  / > , 
  < img  src = {roma15}  onDragStart = { handleDragStart }  roli ="presentation"  / > , 
  < img  src = {roma16}  onDragStart = { handleDragStart }  roli ="presentation"  / > , 
  
]
  return (
    
    <div>
   <Search/>
      {/* <div
        style={{
          width: "100%",
          height: "40px",
          backgroundColor: "purple",
          position: "relative",
          top: "-55px",
        }}
      >
        <a
          style={{
            color: "white",
            textDecoration: "none",
            paddingRight: "15px",
            paddingLeft: "250px",
            position: "relative",
            top: "5px",
          }}
          href=""
        >
          Abonentlarga
        </a>
        <a
          style={{
            color: "white",
            textDecoration: "none",
            paddingRight: "15px",
            position: "relative",
            top: "5px",
            opacity:"0.7"
          }}
          href=""
        >
          Korporatsialarga
        </a>
        <a
          style={{
            color: "white",
            textDecoration: "none",
            paddingRight: "15px",
            position: "relative",
            top: "5px",
            opacity:""
          }}
          href=""
        >
          Hamkorlarga
        </a>
        <a
          style={{
            color: "white",
            textDecoration: "none",
            paddingRight: "15px",
            position: "relative",
            top: "5px",
          }}
          href=""
        >
          Ma'lumotlarga
        </a>
        <a
          style={{
            color: "white",
            textDecoration: "none",
            paddingRight: "15px",
            position: "relative",
            top: "5px",
          }}
          href=""
        >
          Kompaniya yangiliklari
        </a>
        <a
          style={{
            color: "white",
            textDecoration: "none",
            paddingRight: "15px",
            position: "relative",
            top: "5px",
          }}
          href=""
        >
          Virtual qabulxona
        </a>
        <a
          style={{
            color: "white",
            textDecoration: "none",
            paddingRight: "15px",
            position: "relative",
            top: "5px",
          }}
          href=""
        >
          Chiroyli raqamlar
        </a>
        <a
          style={{
            color: "white",
            textDecoration: "none",
            paddingRight: "15px",
            position: "relative",
            top: "5px",
          }}
          href=""
        >
          Bo'sh ish o'rni
        </a>
        <a
          style={{
            color: "white",
            textDecoration: "none",
            position: "relative",
            top: "5px",
            paddingLeft: "315px",
          }}
          href=""
        >
          Kabinet
        </a>
      </div> */}
     
      <img
        src={roma}
        style={{ position: "relative", top: "30px", left: "300px" }}
        alt=""
        
      />
    
    <img src={roma6} style={{position:"relative", bottom:"50px", left:"500px"}} alt="" />
    <AliceCarousel mouseTracking items={items} />


 <div style={{display:"flex"}}>

    <Card className="card1" style={{position:"relative", left:"300px"}} maxW='sm'>
  <CardBody>
    <img src={roma7} alt="" />
    
    <Stack mt='6' spacing='3'>
      
      <Text>
       Yangi - Biznes ovozi hamda tarmoqda biznes tarif rejasi
      </Text>
     
    </Stack>
  </CardBody>

 
</Card>


<Card style={{position:"relative", left:"350px"}} maxW='sm'>
  <CardBody>
    <img src={roma8} alt="" />
    
    <Stack mt='6' spacing='3'>
      
      <Text>
       Yangi - M2M tariflari tizimi
      </Text>
     
    </Stack>
  </CardBody>

  <CardFooter>

  </CardFooter>
</Card>


<Card style={{position:"relative", left:"400px"}} maxW='sm'>
  <CardBody>
    <img src={roma9} alt="" />
    
    <Stack mt='6' spacing='3'>
      
      <Text>
       Korporativ Salom
      </Text>
     
    </Stack>
  </CardBody>

  <CardFooter>

  </CardFooter>
</Card>
 </div>



<p style={{position:"relative", paddingLeft:"320px", top:"50px"}}>Yangiliklar  /  Ma‘lumotlarrss RSS  / Yanvar  / Dekabr  / Barcha yangiliklar
</p>


<div style={{width:"100%", height:"150px", backgroundColor:"whitesmoke", position:"relative",top:"100px"}}>
<Button style={{height:"100%", width:"200px" , border:"1px solid gray", position:"relative", left:"500px", borderRadius:"0px"}} colorScheme='gray'>
  <div style={{width:"60px",heigh:"300px",padding:"10px 10px",borderRadius:"5px",backgroundColor:"pink",position:"relative",bottom:"30px",left:"60px"}}>
  26 <br /> YAN 
  </div>
  <br /> <p style={{position:"relative",top:"20px",right:"20px"}}> hurmatli mijozlar </p> </Button>
<Button style={{height:"100%", width:"200px" , border:"1px solid gray", position:"relative", left:"500px", borderRadius:"0px"}} colorScheme='gray'>
  <div style={{width:"60px",heigh:"300px",padding:"10px 10px",borderRadius:"5px",backgroundColor:"pink",position:"relative",bottom:"30px",left:"70px"}}>

  28 <br /> DEK
  </div>
   <br /> <p style={{position:"relative",top:"20px",right:"20px"}}> Bayramlar kunlari <br />  xizmatlarning ishlash </p> </Button>
<Button style={{height:"100%", width:"200px" , border:"1px solid gray", position:"relative", left:"500px", borderRadius:"0px"}} colorScheme='gray'>
  <div style={{width:"60px",heigh:"300px",padding:"10px 10px",borderRadius:"5px",backgroundColor:"pink",position:"relative",bottom:"30px",left:"90px"}}>

  22 <br /> DEK <br /> 
  </div>
 <p style={{position:"relative",top:"20px",right:"23px"}}>Abonent uchun ma'lumot</p> </Button>
<Button style={{height:"100%", width:"200px" , border:"1px solid gray", position:"relative", left:"500px", borderRadius:"0px"}} colorScheme='gray'>
  
  <div style={{width:"60px",heigh:"300px",padding:"10px 10px",borderRadius:"5px",backgroundColor:"pink",position:"relative",bottom:"30px",left:"70px"}}>

  06 <br /> DEK <br /> 
  </div>
 <p style={{position:"relative",top:"20px",right:"20px"}}> Biznesingiz uchun <br /> ulkam aksiya</p></Button>
</div>



  <div  style={{width:"100%", height:"150px", backgroundColor:"purple" , position:"relative", top:"250px"}}>
  <Button colorScheme='violet'  style={{position:"relative", left:"300px", width:"300px", height:"140px",borderRadius:"0px"}}>
   <Icon style={{position:"relative",top:"-30",left:"150px",marginBottom:"20px"}} boxSize={8} as="WarningIcon"/>
   Yangiliklar <br /> 
    Kompaniyaning yangi bank rekvizitlar
    <p></p>
  </Button>
  <Button colorScheme='violet'  style={{position:"relative", left:"300px", width:"300px", height:"140px", borderRadius:"0px"}}>
  <Icon style={{position:"relative",top:"-38",left:"50px",}} boxSize={8} as="ChatIcon"/>
    Call canter
  </Button>
  <Button colorScheme='violet'  style={{position:"relative", left:"300px", width:"300px", height:"140px", borderRadius:"0px"}}>
  <Icon style={{position:"relative",top:"-38",left:"130px",}} boxSize={8} as="ChatIcon"/>
    
    Ofislarimiz va dillerlarimiz manzili
  </Button>
  <Button colorScheme='violet'  style={{position:"relative", left:"300px", width:"300px", height:"140px", borderRadius:"0px"}}>
  <Icon style={{position:"relative",top:"-38",left:"110px",}} boxSize={8} as="ChatIcon"/>
   
    Firibkarrlarning oldini olish <br /> va Speak-up termog'i
  </Button>

  </div>
  <img style={{position:"relative", top:"250px"}} src={roma10} alt="" />
  

  <img src={roma5} alt="" style={{position:"relative", top:"250px"}} />
    </div>
    
  );
};

export default Korporatsiya;