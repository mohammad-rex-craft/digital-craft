import Link from "next/link";
import LinkIcon from "@/components/icon/LinkIcon";


const Cards = ({imageOne,imageTow,name,title,link}:{imageOne:string,imageTow:string,name:string,title:string,link:string}) => {

    return (
        <>
            <div className={'h-[80%] w-full relative'}>
                <img src={imageOne} alt={'...'} className={'w-full h-full rounded-2xl z-10 relative group-hover:opacity-0 duration-500'}></img>
                <img src={imageTow} alt={'...'} className={'w-full h-full rounded-2xl absolute left-0 top-0'}></img>
            </div>
            <div className={'absolute left-0 bottom-0 z-10 h-fit w-3/4 bg-white flex flex-col p-2 text-black'} style={{boxShadow: '4px 6.5px 17.5px 0 #cdcdcd;'}}>
                <h6 className={'text-[12px] md:text-[15px] lg:text-[16px] xl:text-[15px] text-[BoldItalicArt]'}>{name}</h6>
                <p className={'text-[8px] md:text-[10px] lg:text-[12px] line-clamp-1 '}>{title}</p>
                <Link href={link}>
                    <LinkIcon props={'w-5 h-5 md:w-4 md:h-4'}/>
                </Link>
            </div>
        </>
    )
}

export default Cards