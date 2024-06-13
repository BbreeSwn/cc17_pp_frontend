
// import content1 from "../statics/cardslide/content1.jpg"
// import content2 from "../statics/cardslide/content2.jpg"
// import content3 from "../statics/cardslide/content3.jpg"
// import content4 from "../statics/cardslide/content4.jpg"
// import content5 from "../statics/cardslide/content5.png"

export default function ImageSlide ({src1 , src2 ,src3 , src4, src5}){ // ตัด alt ออกเพราะใช้ images.alt ไม่ได้
return (
  <>
<div className="mt-10 flex space-x-5 animate-loop-scroll w-screen">
  <img loading="lazy" src={src1} alt="img1" className="size-2/4 rounded-lg shadow-md" />
  <img loading="lazy" src={src2} alt="img2" className="size-2/4 rounded-lg shadow-md" />
  <img loading="lazy" src={src3} alt="img3" className="size-2/4 rounded-lg shadow-md"  />
  <img loading="lazy" src={src4} alt="img4" className="size-2/4 rounded-lg shadow-md"  />
  <img loading="lazy" src={src5} alt="img5" className="size-2/4 rounded-lg shadow-md"  />
</div>

</>

)
};

/* 
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);



    <div className="slider-container flex justify-center mt-10 w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === slideIndex ? 'active' : ''}`}
        >
          <img src={image.src} alt={image.alt} className='rounded-lg' />
        </div>
      ))}
    </div>
*/
