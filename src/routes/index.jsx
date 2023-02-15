import { Routes, Route } from "react-router-dom"
import Abonent from "../Abonentlarga"
import Korporatsiya from "../Korpratsiyalarga"
import Photo from "../Photo"
import Tarif from "../Tarif"
import Sof from "../Sof"


const Index =() => {
  return(
    <Routes>
      <Route path="/" element={<Abonent />}/>
      <Route path="/korporatsiya" element={<Korporatsiya />}/>
      <Route path="/hamkor" element={<Photo />}/>
      <Route path="/sof" element={<Sof />}/>
      <Route path="/tarif" element={<Tarif />}/>

    </Routes>
  )
}

export default Index