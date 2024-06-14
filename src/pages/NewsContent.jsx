import ImageSlide from "../layout/imgSlide";
import ProgramCard from "../layout/programCard";
import content1 from "../statics/homePageSlige/content1.jpg"
import content2 from "../statics/homePageSlige/content2.jpg"
import content3 from "../statics/homePageSlige/content3.jpg"
import content4 from "../statics/homePageSlige/content4.jpg"
import content5 from "../statics/homePageSlige/content5.png"

export default function NewsContent () {
    const programs = [
        {src:content1 , title:"บทความ1", description:"บทความบทความบทความบทความ"},
        {src:content2 , title:"บทความ2", description:"บทความบทความบทความบทความ"},
        {src:content3 , title:"บทความ3", description:"บทความบทความบทความบทความ"},
        {src:content4 , title:"บทความ4", description:"บทความบทความบทความบทความ"},
        {src:content5 , title:"บทความ5", description:"บทความบทความบทความบทความ"},
   
    ]
    return(
        <>
        <ImageSlide
        src1={content1} 
        src2={content2} 
        src3={content3} 
        src4={content4} 
        src5={content5} 
        />
        <ProgramCard programs={programs} />
        </>
    )
}