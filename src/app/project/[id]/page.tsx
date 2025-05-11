'use client'

import {use, useEffect, useState} from 'react';
import {DataItem, useData} from "@/hook/getData";
import Image from "next/image";
import Link from "next/link";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

const Page = ({ params }: Props) => {
    const [data,setData] = useState<DataItem|null>()
    const resolvedParams = use(params);
    const { getItemById,loading } = useData();
    useEffect(()=>{
        getItemById(resolvedParams.id).then((items)=>{
            return setData(items)
        })

    },[])

    return (
        <div className={'w-full flex flex-col items-center text-white py-20 px-10 gap-10'}>
            <h2 className={'text-[25px] md:text-[30px] lg:text-[40px]'}>{data?.name}</h2>
            {loading?
                <SkeletonTheme  baseColor="#202020" highlightColor="#444" width={'80%'} height={'80vh'} >
                        <Skeleton  />
                </SkeletonTheme>
                :<Image src={data?.detielsImg??"/noImg.jpeg"} className={'rounded-2xl !h-auto !relative'} alt={'...'} fill={true}></Image>

            }
            <div className={'flex flex-col justify-center items-center gap-6'}>
                <Link href={data?.url??"/"} className={'text-[22px] md:text-[28px] lg:text-[35px] cursor-pointer'}>Developed using:</Link>
                <div className={'flex gap-6  flex-wrap'}>
                    {data?.code?.map((e,index)=>(
                        <div key={index} className={`w-16 h-16 lg:w-24 lg:h-24 flex justify-center items-center rounded-full text-[16px] lg:text-[25px] `}
                             style={{background:`${e.color}`,boxShadow: "0 0 27.5px -11.5px #ffffff"}}
                        >{e.code}</div>
                    ))}
                </div>
            </div>

            <div className={'flex flex-col gap-6'}>
                <h3 className={'text-[22px] md:text-[28px] lg:text-[35px]'}>Description :</h3>
                <p>{data?.description}</p>
            </div>


        </div>
    );
};

export default Page;