import { useEffect, useState } from "react";
import { Button, ButtonGroup, Heading, Icon, Stack,Text,Divider,Box } from "@chakra-ui/react";
import {  AddIcon, WarningIcon, ChatIcon, InfoIcon,   } from '@chakra-ui/icons'
import React, { Component } from 'react'
import { Input, InputLeftAddon,InputGroup, } from '@chakra-ui/react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from "react-router-dom";

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Search from "./Searcha"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal,
} from '@chakra-ui/react'

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
import Screenshot5 from "./assets/img/Screenshot_40.png"
import Screenshot6 from "./assets/img/Screenshot_41.png"
import Screenshot7 from "./assets/img/Screenshot_42.png"

const Abonent = () => {
  const  handleDragStart  =  ( e )  =>  e . preventDefault ( ) ;

const  items  =  [ 
  < img  src = {Screenshot}  onDragStart = { handleDragStart }  rol = "taqdimot"  / > , 
  < img  src = {Screenshot1}  onDragStart = { handleDragStart }  rol = "taqdimot"  / > , 
  < img  src = {Screenshot2}  onDragStart = { handleDragStart }  roli ="presentation"  / > , 
  < img  src = {Screenshot3}  onDragStart = { handleDragStart }  roli ="presentation"  / > , 
  < img  src = {Screenshot4}  onDragStart = { handleDragStart }  roli ="presentation"  / > , 
  
]
  return (
    <div>
      {/* <div
        style={{
          width: "100%",
          height: "40px",
          backgroundColor: "purple",
          position: "relative",
          bottom: "50px",
        }}
      >
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            paddingRight: "15px",
            paddingLeft: "250px",
            position: "relative",
            top: "5px",
          }}
          to={"/"}
        >
          Abonentlarga
        </Link>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            paddingRight: "15px",
            position: "relative",
            top: "5px",
          }}
          to={"/korporatsiya"}
        >
          Korporatsialarga
        </Link>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            paddingRight: "15px",
            position: "relative",
            top: "5px",
          }}
          to={"/hamkor"}
        >
          Hamkorlarga
        </Link>
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
      <Search/>
     
      <img
        src={roma}
        style={{ position: "relative", top: "30px", left: "300px" }}
        alt=""
        
      />
    
    <img src={roma6} style={{position:"relative", bottom:"50px", left:"500px"}} alt="" />
    <AliceCarousel mouseTracking items={items} />


    <div style={{display:"flex"}}>

   
  
   
    
   
    <Link
      style={{}}
      className="nav"
      to={"/sof"}
      
    >



 <Card className="card1" style={{position:"relative", left:"300px", textAlign:"center"}} maxW='sm'>
<CardBody>


     <img src={Screenshot5} alt="" /> 
      <Text>
      Sof tariflar 
      </Text>
        </CardBody>
        </Card>
          
    </Link>
      
     
  


 



    <Link
      style={{}}
      className="nav"
      to={"/sof"}
      
    >



 <Card className="card1" style={{position:"relative", left:"300px", textAlign:"center"}} maxW='sm'>
<CardBody>


     <img src={Screenshot6} alt="" /> 
      <Text>
     Hisobingizni shunchaki oson toldiring
      </Text>
        </CardBody>
        </Card>
          
    </Link>


    <Link
      style={{}}
      className="nav"
      to={"/sof"}
      
    >



 <Card className="card1" style={{position:"relative", left:"300px", textAlign:"center"}} maxW='sm'>
<CardBody>


     <img src={Screenshot7} alt="" /> 
      <Text>
      Sof tariflar 
      </Text>
        </CardBody>
        </Card>
          
    </Link>
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



  <div   style={{width:"100%", height:"150px" ,backgroundColor:"purple", position:"relative", top:"250px"}}>
  <Button colorScheme='violet'  style={{position:"relative", left:"300px", width:"300px", height:"140px", padding:"5px",borderRadius:"0px"}}>
   <Icon style={{position:"relative",top:"-30",left:"150px",marginBottom:"20px"}} boxSize={8} as={WarningIcon}/>
   Yangiliklar <br /> 
    Kompaniyaning yangi bank rekvizitlar
    <p></p>
  </Button>
  <Button colorScheme='violet'  style={{position:"relative", left:"300px", width:"300px", height:"140px", borderRadius:"0px"}}>
  <Icon style={{position:"relative",top:"-38",left:"50px",}} boxSize={8} as={ChatIcon}/>
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



  <Heading fontSize='2xl'  style={{position:"relative", marginLeft:"320px", top:"270px"}}>Hisobni to'ldirish</Heading>

  <div  style={{backgroundColor:"whitesmoke", width:"100%", height:"150px",position:"relative",top:"300px"}}>

  <Popover>
  <PopoverTrigger>
    <Button style={{padding:"20px", marginLeft:"400px",marginTop:"20px"}} colorScheme='purple'>U-tolovi orqali <br/> hisobni toldirish</Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
 
      <PopoverCloseButton />
      <PopoverBody>
      <InputGroup>
    <InputLeftAddon style={{marginTop:"25px"}} children='+998' />
    <Input style={{marginTop:"25px"}} type='tel' placeholder='phone number' />
  </InputGroup>

  <Input style={{marginTop:"25px", marginBottom:"10px"}} placeholder='Miqdor' />

    
        <Button style={{marginLeft:"100px"}} colorScheme='purple'>To'ldirish</Button>
      </PopoverBody>
    
    </PopoverContent>
  </Portal>
</Popover>

  </div>



 
  <img style={{position:"relative", top:"250px"}} src={roma10} alt="" />
  

  <img src={roma5} alt="" style={{position:"relative", top:"250px"}} />
    </div>
    
  );
};

export default Abonent;