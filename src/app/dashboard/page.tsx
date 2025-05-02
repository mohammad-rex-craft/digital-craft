'use client'

import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'

import type { FilePondFile } from 'filepond'


import { useState } from 'react'

const Page = () => {
    const [frontImage, setFrontImage] = useState<FilePondFile[]>([])
    const [backImage, setBackImage] = useState<FilePondFile[]>([])

    let [data,setData] = useState({
        name:"",
        url:"",
        description:""
    })

    const handleSubmit = async () => {
        if (!frontImage[0].file || !backImage[0].file) {
            alert('Please upload both front and back images.');
            return;
        }

        const getBase64 = (file: File): Promise<string> => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result as string);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        };

        const frontBase64 = await getBase64(frontImage[0].file);
        const backBase64 = await getBase64(backImage[0].file);
        const payload = {
            ...data,
            frontImage: frontBase64,
            backImage: backBase64,
        };

        console.log(payload);


    };


    return (
        <div className="w-full h-full min-h-screen flex justify-center items-center">
            <div className="w-10/12 h-fit text-white p-20 rounded-3xl border-2 border-blue-600 shadow-xl shadow-blue-500">
                <h2 className="font-bold text-[30px]">DashBoard :</h2>
                <div className="flex flex-col gap-6 mt-10">
                    <div className="w-full max-w-[400px] z-20">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Site Name :</label>
                        <input onChange={(e)=>setData({...data,name:e.target.value})} type="text" id="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent" />
                    </div>
                    <div className="w-full max-w-[400px] z-20">
                        <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">Url :</label>
                        <input onChange={(e)=>setData({...data,url:e.target.value})} type="url" id="url" required className="w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent" />
                    </div>
                    <FilePond
                        onupdatefiles={setFrontImage}
                        labelIdle="Upload Front Image"
                    />
                    <FilePond
                        onupdatefiles={setBackImage}
                        labelIdle="Upload Back Image"
                    />
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description :</label>
                        <textarea id="description" onChange={(e)=>setData({...data,description:e.target.value})} rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent"></textarea>
                    </div>
                    <button type={'button'} onClick={handleSubmit} className="w-full border-2 border-white text-white bg-transparent py-2 px-4 rounded-md hover:bg-white hover:text-darkBlue">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Page
