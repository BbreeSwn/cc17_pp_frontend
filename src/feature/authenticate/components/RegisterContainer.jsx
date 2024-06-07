import { useState } from "react";
import Button from "../../../components/button";
import Modal from "../../../components/modal";
import RegisterForm from "./registerForm";

export default function RegisterContainer(){
   const [open , setOpen] = useState(false); // true เปิด false ปิด

return (
    <>
    <div className="text-center">
    <Button bg="green" onClick={() => setOpen(true)}>สร้างบันชีผู้ใช้</Button>
    </div>
    <Modal title="ลงทะเบียน" open={open} onClose={() => setOpen(false)} ><RegisterForm />  </Modal>
    </>
)
}

//สร้าง props ชื่อ open มีค่าเอามาจาก state open ค่าจะเปิด หรือปิด ขึ้นอยู่กับ props