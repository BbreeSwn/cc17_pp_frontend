import ImageSlide from "../layout/imgSlide"
import ProgramCard from "../layout/programCard"
import content1 from "../statics/homePageSlige/content1.jpg"
import content2 from "../statics/kidsProgram/clip1.jpg"
import content3 from "../statics/cardItem/Ep9-Keep.jpeg"
import content4 from "../statics/homePageSlige/content4.jpg"
import content5 from "../statics/homePageSlige/content5.png"

import pc1 from "../statics/cardItem/clip1.jpg"
import pc2 from "../statics/cardItem/clip2.jpg"
import pc3 from "../statics/cardItem/Ep9-Keep.jpeg"
import pc4 from "../statics/cardItem/กินกับลูก.jpg"

export default function HomePage() {
  const programs = [
    {src: pc1, title:"clip1", description:"aLWRjghoa;hg:OteihebtNEYRjmn" },
    {src: pc2, title:"clip2", description:"aLWRjghoa;hg:OteihebtNEYRjmn" },
    {src: pc3, title:"clip3", description:"aLWRjghoa;hg:OteihebtNEYRjmn" },
    {src: pc4, title:"clip4", description:"aLWRjghoa;hg:OteihebtNEYRjmn" },
  ]

  return (
<div>
    <ImageSlide
    src1={content1}
    src2={content2}
    src3={content3}
    src4={content4}
    src5={content5}
    />
<ProgramCard programs={programs} />
</div>
  );
}

{/* <div><img src={content1} className="w-[640px] rounded-2xl shadow-md" /></div>
<div><img src={content2} className="w-[640px] rounded-2xl shadow-md" /></div>
<div><img src={content3} className="w-[640px] rounded-2xl shadow-md" /></div>
<div><img src={content4} className="w-[640px] rounded-2xl shadow-md" /></div>
<div><img src={content5} className="w-[640px] rounded-2xl shadow-md" /></div> */}