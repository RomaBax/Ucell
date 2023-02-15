import { useEffect, useState } from "react";
import { Button, ButtonGroup, Heading, Icon,  } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon,ChatIcon } from '@chakra-ui/icons'
import Search from "./Searcha"

import roma from "./assets/img/Screenshot_1.png";
import tillo from "./assets/img/Screenshot_51.png";
import roma1 from "./assets/img/Screenshot_2.png"
import roma2 from "./assets/img/Screenshot_3.png"
import roma3 from "./assets/img/Screenshot_4.png"
import roma4 from "./assets/img/Screenshot_5.png"
import roma5 from "./assets/img/Screenshot_6.png"
const Photo = () => {
  return (
    <div>
      <Search / >
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
            opacity:"0.5"
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
      <button
        style={{
          height: "40px",
          width: "1px",
          border: "1px solid gray",
          position: "relative",
          left: "1490px",
          top:"-30px"
        }}
      ></button>
      <hr />
      <h3 style={{ paddingTop: "10px", paddingLeft: "290px" }}>Hamkorlarga</h3>
      <img src={tillo} alt="" />
        <div>

      <Heading fontSize='3xl' style={{position: "relative", left:"", textAlign:"center" }} as={"h3"}>Ta’minotchilar uchun ma’lumot</Heading>
      <h3   style={{textAlign:"center",}}>Maxsulot va/yoki xizmatlar bilan ta’minlovchi sifatida biz bilan hamkorlik qilishga bo‘lgan qiziqishingiz uchun tashakkur.</h3>

        </div>
        <Heading fontSize='3xl' style={{position: "relative", left:"", top:"80px", textAlign:"center" }}>Ucellning amaldagi xaridlari</Heading>
        



        <hr style={{position:"relative", top:"90px"}} />

        <div>
          <img style={{position:'relative', left:"280px",top:"120px"}} src={roma1} alt="" />
          <img style={{position:'relative', left:"280px",top:"120px"}} src={roma2} alt="" />
          <img style={{position:'relative', left:"280px",top:"120px"}} src={roma3} alt="" />
          <img style={{position:'relative', left:"280px",top:"120px"}} src={roma4} alt="" />
        </div>

        <div style={{width:"100%", height:"200px", backgroundColor:"whitesmoke", position:'relative',top:"150px"}}>
           <Heading fontSize='2xl' style={{position: "relative", left:"", top:"40px", textAlign:"center" }} >Biz bilan boglaqnish</Heading>
           <Button colorScheme='purple' size='lg' style={{borderRadius:"25px",position:"relative", top:"80px",left:"860px"}}>
            
    Maktub yo'llash
  </Button>
  <hr style={{position:'relative', top:"100px"}} />
        </div>
        <Button colorScheme='purple' size='xs' style={{position:"relative",left:"50px", top:"200px"}}>
    <Icon as={ChatIcon}></Icon>
    Yoqdi 6
  </Button>
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
  <img src={roma5} alt="" style={{position:"relative", top:"250px"}} />
    </div>
  );
};

export default Photo;