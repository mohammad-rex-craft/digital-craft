'use client'

import {use, useEffect, useState} from 'react';
import {useData} from "@/hook/getData";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

const Page = ({ params }: Props) => {
    const [data,setData] = useState<object|null>()
    const resolvedParams = use(params);
    const { getItemById } = useData();
    useEffect(()=>{
        getItemById(resolvedParams.id).then((items)=>{
            return setData(items)
        })

    },[])
    return (
        <div className={''}>

        </div>
    );
};

export default Page;