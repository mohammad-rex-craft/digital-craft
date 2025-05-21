import TrueIcon from "@/components/icon/trueIcon";
import Image from "next/image";


const AboutSections = () => {
    return(
        <div className={'mt-20 p-12 sm:p-20 lg:p-32'} id={'about'} style={{background: "linear-gradient(to bottom, #333331 0%, #00042A 30%, #02062A 100%);"}}>
            <div className={'w-full h-full flex '}>
                <div className={'sm:w-1/2 w-full h-full flex flex-col gap-6'}>
                    <h3 className={'text-[20px] lg:text-[30px] xl:text-[40px] text-textColor text-center sm:text-left'}>Creative Web Agency Delivering Custom Solutions.</h3>
                    <div className={'flex  items-center'}>
                        <TrueIcon props={'w-7 h-5 mr-4'}/>
                        <p className={'text-white text-[12px] lg:text-[15px] xl:text-[18px] mr-2'}>Custom Web Design Solutions <span className={'text-[#1E7EB0]'}>To Drive Conversions</span> </p>
                    </div>
                    <div className={'flex  items-center'}>
                        <TrueIcon props={'w-7 h-5 mr-4'}/>
                        <p className={'text-white text-[12px] lg:text-[15px] xl:text-[18px] mr-2'}>Effective Marketing Campaigns <span className={'text-[#1E7EB0]'}>To Generate Growth</span> </p>
                    </div>
                    <div className={'flex  items-center'}>
                        <TrueIcon props={'w-7 h-5 mr-4'}/>
                        <p className={'text-white text-[12px] lg:text-[15px] xl:text-[18px] mr-2'}>Tailored Branding Strategies <span className={'text-[#1E7EB0]'}>To Drive Engagement</span> </p>
                    </div>
                    <p className={'text-white text-[10px] md:text-[14px] lg:text-[16px]'}>
                        Digital Craft is a web design company & digital marketing agency focused on growing brands online. We create effective brand strategies, custom web design, development, and digital marketing solutions to generate greater brand engagement and conversions. We work closely with our clients to ensure each project meets their brand guidelines and business goals and provide technical and marketing expertise to ensure optimal results.
                    </p>
                </div>
                <div className={'sm:flex hidden w-1/2 h-auto  justify-end'}>
                    <div className={'relative  w-[80%] h-[60%] lg:h-[80%]  xl:h-full max-w-[450px] translate-y-1/2 lg:translate-y-0'}>
                        <Image src={'/about.png'} alt={'...'} fill={true} ></Image>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutSections