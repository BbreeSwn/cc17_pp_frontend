import ImageSlide from "../layout/imgSlide"
import ProgramCard from "../layout/programCard"
import clip1 from "../statics/kidsProgram/clip1.jpg"
import clip2 from "../statics/kidsProgram/clip2.jpg"
import clip3 from "../statics/kidsProgram/clip3.jpg"
import clip4 from "../statics/kidsProgram/clip4.jpeg"

import art from "../statics/coverImage/art.jpg"
import english from "../statics/coverImage/english.jpg"
import eateat from "../statics/coverImage/eateat.jpg"
import natural from "../statics/coverImage/natural.jpg"


export default function KidsProgram() {
  const programs = [
    { src: art, title: "Art", description: "Description for Art program" },
    { src: english, title: "English", description: "Description for English program" },
    { src: eateat, title: "EatEat", description: "Description for EatEat program" },
    { src: natural, title: "Natural", description: "Description for Natural program" }
  ];

  return (
    <div>
      <ImageSlide
        src1={clip1}
        src2={clip2}
        src4={clip3}
        src5={clip4}
      />
      <ProgramCard programs={programs} />
    </div>
  );
}
