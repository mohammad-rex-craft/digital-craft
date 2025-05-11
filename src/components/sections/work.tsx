'use client'
import Cards from "@/components/Cards";
import ArrowIcon from "@/components/icon/arrowIcon";
import Link from "next/link";
import {useData} from "@/hook/getData";
import {useRouter} from "next/navigation";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const WorkSection = () => {


    let { dataList, loading, error } = useData()
    const router = useRouter();
    const handleCardClick = (id: string) => {
        router.push(`/project/${id}`);
    };
    return (
        <div className={' w-full'}   style={{background: "linear-gradient(to bottom, #00042A 0%, #00042A 82%, #333331 100%);"}}>
            <div className={'flex flex-col items-center px-12 sm:px-20 lg:px-32 pt-10 gap-2 md:gap-4 '}>
                <p className={'text-white text-[12px] lg:text-[14px] xl:text-[16px]'}>OUR WORK</p>
                <h3 className={'text-[20px] lg:text-[30px] xl:text-[40px] text-textColor text-center'}>Featured Website Design Projects</h3>
                <p className={'text-textColor text-center text-[12px] lg:text-[14px] xl:text-[16px]'}>
                    Have a sneak peek at some of our recent work delivered to our esteemed global clients belonging to various industry verticals. Get a feel for the innovative, quality-rich product you will receive when you collaborate with JPLoft as your trusted technology partner for your web and app development project
                </p>
                <div className={'w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center'}>
                    {loading?
                        [1,2,3].map((index)=>(
                            <SkeletonTheme key={index} baseColor="#202020" highlightColor="#444" width={'200px'} height={'200px'} >
                                <div className={'flex gap-6'}>
                                    <Skeleton />
                                </div>
                            </SkeletonTheme>
                        ))
                        :dataList?.slice(0, 6).map((item, index) => (
                            <div key={index} onClick={()=>handleCardClick(item.id!)} className={'flex flex-col relative  group cursor-pointer'}>
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
                <div className={'w-full flex justify-center  my-7 '}>
                    <Link href={'/projects'} className={'flex gap-1 text-textColor text-[BoldItalicArt]  cursor-pointer justify-center items-center group'}>
                        <span className={'text-[12px]'}>MORE</span>
                        <ArrowIcon classN={'w-4 h-4 mt-1 rotate-90 group-hover:translate-y-1 duration-200'}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WorkSection