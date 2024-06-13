import pic1 from "../statics/head-body/02-1.png";
import pic2 from "../statics/head-body/line.png";
import pic3 from "../statics/head-body/07.png";
import pic4 from "../statics/head-body/kids.png";

export default function ProgramCard({ src1, src2, src3, src4 }) {
  return (
    <>
      <div
        name="header-card"
        className="flex justify-center items-center gap-x-10 mt-10"
      >
        <div>
          <img src={pic1} alt="happy1" className="max-w-60" />
        </div>
        <div>
          <img src={pic2} className="max-w-96" alt="line" />
        </div>
        <div>
          <img src={pic3} alt="happy2" className="max-w-60" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={pic4} className="max-w-80" />
      </div>

      <div
        name="program-card"
        className="grid grid-cols-3 place-items-center mt-10"
      >

        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10">
          <figure>
            <img src={src1} alt="card1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">TITLE</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>


        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10">
          <figure>
            <img src={src2} alt="card2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Title</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>


        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10">
          <figure>
            <img src={src3} alt="card3" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Title</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>


        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10 mb-10">
          <figure>
            <img src={src4} alt="card4" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Title</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </>
  );
}
