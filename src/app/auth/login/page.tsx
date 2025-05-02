'use client'
import Image from "next/image";
import {useEffect, useState} from "react";
import {signInWithEmailAndPassword,onAuthStateChanged} from "@firebase/auth";
import {auth} from "@/databese/firebase";
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';


const page = ()=>{
    const cookies = useCookies();
    const router = useRouter()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e:any) => {
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((res) => {
                    cookies.set('token',res.user.uid)
                    window.history.forward()
                    window.location.href = "/dashboard";
                }
            )
            .catch((error) => console.log(error))
    };



    return (
        <div className={'w-full h-screen flex justify-center items-center'}>
            <div className={'relative w-1/2 h-1/2 gap-12 text-white flex flex-col items-center px-10 py-5 rounded-3xl border-2 border-blue-600 shadow-xl shadow-blue-500'}>
                <div className={'absolute w-24 h-36 opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}>
                    <Image src={'/logo1.png'} alt={'...'} fill={true}/>
                </div>
                <h2 className={'text-[40px] font-[BoldItalicArt] z-20'}>digitalcraft200223@</h2>
                <div className="w-full max-w-[400px] z-20">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email :
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                    />
                </div>
                <div className=" w-full max-w-[400px] z-20">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password :
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    type="button"
                    className="w-fit z-20 border-2 border-white text-white bg-transparent py-2 px-4 rounded-md hover:bg-white hover:text-darkBlue"
                >
                    Submit
                </button>

            </div>
        </div>
    )


}


export default page