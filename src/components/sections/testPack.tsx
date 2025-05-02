'use client'
import './index.css'
import RexDateTimePickerStander from "@/components/sections/RexDateTimePickerStander";
import dayjs from "dayjs";
import {useForm} from "react-hook-form";
import RexInput from "@/components/sections/RexDateTimePickerStander";
import {useState} from "react";


const TestPack = ()=>{


    const [date, setDate] = useState('');


    const {setValue,handleSubmit} = useForm()

    const onSubmit = (data:any) => {
        console.log(data);
    };




    return (
        <form  onSubmit={handleSubmit(onSubmit)} className={'bg-white min-h-screen flex flex-col gap-6 justify-center items-center'}>







           <RexInput
             getValue={(item)=>setDate(item)}
           />

            <button type={'button'} onClick={()=>console.log(date)}>submit</button>

            <input type={'text'}></input>

        </form>
    )
}











export default TestPack