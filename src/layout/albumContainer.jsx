

export default function AlbumContainer({title ,description,src, onClick}){
    return(            
        <div className="flex flex-col mt-14">
        <div className="flex">
            <img src={src} className=" w-1/3 rounded-lg ml-10 shadow-xl hover:border-[4px] hover:border-orange-300  "/>
            <div className="flex flex-col mt-20 ml-40 gap-10">
                <h2 className=" text-2xl text-orange-500 hover:text-gray-500 cursor-pointer " onClick={onClick}>{title}</h2>
                <span className="text-gray-500">{description}</span>
                </div>
                
        </div>
        <div className="flex justify-center m-auto border-b-[2px] border-b-gray-500 border-dashed w-[80%] mt-14">

        </div>
        </div>

    )
}

// text-zinc-600 hover:text-orange-600 cursor-pointer