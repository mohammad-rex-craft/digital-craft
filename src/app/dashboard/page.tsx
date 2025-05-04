'use client'

import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import {set, ref, update} from "firebase/database"
import type { FilePondFile } from 'filepond'
import {useEffect, useState} from 'react'
import {database} from "@/databese/firebase";
import LoadingIcon from "@/components/icon/loadingIcon";
import WordEdit from "@/components/dashboard/wordEdit";
interface DataItem {
    name: string;
    url: string;
    frontImg: string;
    backImg: string;
    description: string;
    id?: string; // سيتم إضافته عند جلب البيانات
}
const Page = () => {
    const [frontImage, setFrontImage] = useState<FilePondFile[]>([])
    const [backImage, setBackImage] = useState<FilePondFile[]>([])
    const [loading,setLoading] = useState(false)
    const [dataList, setDataList] = useState<DataItem[]>([])

    let [dataForm,setData] = useState({
        name:"",
        url:"",
        description:""
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const dataRef = ref(database, 'data')
                const response = await fetch(dataRef.toString() + '.json')
                const data = await response.json()

                if (data) {
                    // تحويل البيانات إلى مصفوفة مع الحفاظ على الـ ID
                    const dataArray = Object.keys(data).map(key => ({
                        ...data[key],
                        id: key
                    }))
                    setDataList(dataArray)
                }
            } catch (error) {
                console.error("Error fetching data:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    console.log(dataList)
    const handleSubmit = async () => {
        if (!frontImage[0]?.file || !backImage[0]?.file) {
            alert('Please upload both front and back images.');
            return;
        }

        try {
            setLoading(true);

            const getBase64 = (file: File): Promise<string> => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result as string);
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            };
            // @ts-ignore
            const frontBase64 = await getBase64(frontImage[0].file);
            // @ts-ignore
            const backBase64 = await getBase64(backImage[0].file);

            const payload:DataItem = {
                name: dataForm.name,
                url: dataForm.url,
                frontImg: frontBase64,
                backImg: backBase64,
                description: dataForm.description
            };
            const dataRef = ref(database, 'data');
            const response = await fetch(dataRef.toString() + '.json');
            let currentData = await response.json();
            if (!currentData) {
                currentData = [];
            } else if (!Array.isArray(currentData)) {

                currentData = Object.values(currentData);
            }
            const newData = [...currentData, payload];

            await set(dataRef, newData);

            window.location.reload();

        } catch (error) {
            console.error("Error submitting data:", error);
            alert("An error occurred while submitting data.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className={'flex flex-col gap-10'}>
            <div className="w-full h-full min-h-screen flex justify-center items-center">
                <div className="relative w-10/12 h-fit text-white p-20 rounded-3xl border-2 border-blue-600 shadow-xl shadow-blue-500" >
                    <h2 className="font-bold text-[30px]  ">DashBoard :</h2>
                    <LoadingIcon className={`w-10 h-10 absolute top-10 right-10 ${loading?'block':"hidden"}`}/>
                    <div className="flex flex-col gap-6 mt-10">
                        <div className="w-full max-w-[400px] z-20">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Site Name :</label>
                            <input  disabled={loading} onChange={(e)=>setData({...dataForm,name:e.target.value})} type="text" id="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent" />
                        </div>
                        <div className="w-full max-w-[400px] z-20">
                            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">Url :</label>
                            <input  disabled={loading} onChange={(e)=>setData({...dataForm,url:e.target.value})} type="url" id="url" required className="w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent" />
                        </div>
                        <div>
                            <label htmlFor="FrontImage" className="block text-sm font-medium text-gray-700 mb-1">Front Image :</label>
                            <FilePond
                                onupdatefiles={setFrontImage}
                                labelIdle="Upload Front Image"
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <label htmlFor="BackImage" className="block text-sm font-medium text-gray-700 mb-1">Back Image :</label>
                            <FilePond
                                disabled={loading}
                                onupdatefiles={setBackImage}
                                labelIdle="Upload Back Image"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description :</label>
                            <textarea  disabled={loading} id="description" onChange={(e)=>setData({...dataForm,description:e.target.value})} rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded-md bg-transparent"></textarea>
                        </div>
                        <button type={'button'} disabled={loading} onClick={handleSubmit} className="w-full border-2 border-white text-white bg-transparent py-2 px-4 rounded-md hover:bg-white hover:text-darkBlue">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className={'w-full my-32'}>
                 <WordEdit data={dataList} setDataList={setDataList} setLoading={setLoading} />
            </div>
        </div>
    )
}

export default Page
