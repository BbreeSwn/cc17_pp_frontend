import ImageSlide from "../layout/imgSlide"
import ProgramCard from "../layout/programCard"
import ProgramContainer from "../feature/authenticate/components/ProgramContainer"
import clip1 from "../statics/kidsProgram/clip1.jpg"
import clip2 from "../statics/kidsProgram/clip2.jpg"
import clip3 from "../statics/kidsProgram/clip3.jpg"
import clip4 from "../statics/kidsProgram/clip4.jpeg"

import Art from "../statics/coverImage/art.jpg"
import English from "../statics/coverImage/english.jpg"
import Eateat from "../statics/coverImage/eateat.jpg"
import Natural from "../statics/coverImage/natural.jpg"
import useAuth from "../hook/useAuth"
import { useEffect } from "react"


export default function KidsProgram() {
  const { loginAdmin} = useAuth();

 
  const programs = [
    { src: Art, title: "Art", description: "Description for Art program" },
    { src: English, title: "English", description: "Description for English program" },
    { src: Eateat, title: "EatEat", description: "Description for EatEat program" },
    { src: Natural, title: "Natural", description: "Description for Natural program" }
  ];

  useEffect(() => {
    loginAdmin()
  },[])

  return (
    <div>
      <ImageSlide
        src1={clip1}
        src2={clip2}
        src4={clip3}
        src5={clip4}
      />
      <ProgramCard />
      <div  className="grid grid-cols-3 place-items-center mt-10">
            {programs.map((program, index) => (
        <ProgramContainer key={index} program={program}
        />
      ))}
      </div>
    </div>
    
  );
}
