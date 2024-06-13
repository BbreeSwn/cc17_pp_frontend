export default function Input({ placeholder, type = "text" , value ,onChange,name, error }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-3 py-1.5 border rounded-md focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-400"
            : "border-grey-300 focus:border-blue-500  focus:ring-blue-400"
        } `}
        value={value} //ผูกค่า value ต้องส่ง props เข้ามา และส่งไปผูกกับ state
        onChange={onChange} // add evenlistener เข้าไปในกล่อง input
        name={name}
      />
      {error ? <small className="text-red-500"> {error} </small> : null}
    </>
  );
}