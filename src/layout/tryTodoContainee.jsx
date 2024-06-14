

export default function TryToDoContainer({ src }) {
  return (
    <div name="card-container" className=" flex justify-center">
      <div className="w-3/6 mt-14 flex flex-row p-3 shadow-lg shadow-orange-500/50 ... ">

          <img src={src} className=" w-2/6 rounded-2xl ml-10 hover:border-[2px] hover:border-orange-300" />

        <div className= "mt-10 ml-5">
        <button className="bg-orange-400 w-[100%]  rounded-xl p-2 hover:bg-green-400">Download File</button>
      </div>
      </div>
    </div>
  );
}
