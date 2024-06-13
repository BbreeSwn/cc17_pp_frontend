import { Outlet} from 'react-router-dom'
import Header from './Header'

export default function MainContainer(){
    return( 
    <>
    <Header />
    <Outlet />
    </>
    )
}

/*
container เป้นหน้า main layout ถ้ามีส่วนไหนทีี่ใช้องค์ประกอบเดียวกัน ก็สร้าง component แยก แล้วเอามาใส่รวมกัน
ส่วนไหนที่เป็นส่วนที่แตกต่างกันของแต่ละหน้า คือส่วนของ outlet
outlet คือส่วนที่แตกต่างกันออกไป ในแต่ละ container
layout 
ถ้ามี sidebar ก้เอามาใส่
*/