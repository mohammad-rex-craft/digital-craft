'use client'
import Cards from "@/components/Cards";
import ArrowIcon from "@/components/icon/arrowIcon";
import {useEffect, useState} from "react";
import {ref} from "firebase/database";
import {database} from "@/databese/firebase";

interface DataItem {
    name: string;
    url: string;
    frontImg: string;
    backImg: string;
    description: string;
    id?: string; // سيتم إضافته عند جلب البيانات
}
const WorkSection = () => {


    const [dataList, setDataList] = useState<DataItem[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
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
            }
        }

        fetchData()
    }, [])
    return (
        <div className={' w-full'}   style={{background: "linear-gradient(to bottom, #00042A 0%, #00042A 82%, #333331 100%);"}}>
            <div className={'flex flex-col items-center px-12 sm:px-20 lg:px-32 pt-10 gap-2 md:gap-4 '}>
                <p className={'text-white text-[12px] lg:text-[14px] xl:text-[16px]'}>OUR WORK</p>
                <h3 className={'text-[20px] lg:text-[30px] xl:text-[40px] text-textColor text-center'}>Featured Website Design Projects</h3>
                <p className={'text-textColor text-center text-[12px] lg:text-[14px] xl:text-[16px]'}>
                    Have a sneak peek at some of our recent work delivered to our esteemed global clients belonging to various industry verticals. Get a feel for the innovative, quality-rich product you will receive when you collaborate with JPLoft as your trusted technology partner for your web and app development project
                </p>
                <div className={'w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center'}>
                    {dataList.map((item, index) => (
                            <div key={index}  className={'flex flex-col relative  group cursor-pointer'}>
                                <Cards
                                    imageOne={item.frontImg}
                                    imageTow={item.backImg}
                                    name={item.name}
                                    title={item.description}
                                    link={item.url}
                                />
                            </div>

                    ))}

                </div>
                <div className={'w-full flex justify-center my-7 '}>
                    <div className={'flex gap-1 text-textColor text-[BoldItalicArt]  cursor-pointer justify-center items-center group'}>
                        <span className={'text-[12px]'}>MORE</span>
                        <ArrowIcon classN={'w-4 h-4 mt-1 rotate-90 group-hover:translate-y-1 duration-200'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkSection