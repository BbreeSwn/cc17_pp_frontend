export default function Input({ placeholder, type = "text", error , value ,onChange,name }) {
    return (
      <>
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-1 ${
            error //error มีไหม ถ้ามีกรอบแดง ถ้าไม่มีกรอบ ฟ้า
              ? "border-red-500 focus:ring-red-300"
              : "border-grey-500 focus:border-blue-500  focus:ring-blue-400"
          } `}
        />
        {error ? <small className="text-red-500">{error}</small> : null}
      </>
    );
  }