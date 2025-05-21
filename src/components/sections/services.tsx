import OurImageHolder from "@/components/OurImageHolder";


const ServicesSection = () => {

    return(
        <div className={'bg-[#00042A]'} id={'services'}>
            <div className={'w-full '} style={{background: "linear-gradient(to bottom,rgba(1, 5, 42, 1) 0%,rgba(30, 126, 176, 0.45) 30%,rgba(30, 126, 176, 0.45) 66%,rgba(51, 51, 49, 1) 100%)"}}>
               <div className={'w-full h-full p-12 sm:p-20 lg:p-32 flex flex-col items-center gap-12'}>
                   <h3 className={'text-[20px] lg:text-[30px] xl:text-[40px] text-textColor font-[BoldItalicArt]'}>Our Web & App Development Services Will Help You Thrive</h3>
                   <p className={'text-[10px] lg:text-[12px] xl:text-[15px] text-textColor'}>Our cutting-edge, technology-driven web and mobile app development services will help your business build revenue and thrive.</p>
                   <div
                       className={'w-full lg:w-[80%] h-[280px] md:h-[360px] lg:h-[180px] xl:h-[200px]  grid justify-items-center gap-4 grid-cols-2 lg:grid-cols-4'}>

                       <OurImageHolder image={'/mobile.png'} title={'Mobile'}/>
                       <OurImageHolder image={'/wep.png'} title={'Web'}/>
                       <OurImageHolder image={'/pc.png'} title={'Desktop'}/>
                       <OurImageHolder image={'/data.png'} title={'Database'}/>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default ServicesSection