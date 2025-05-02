import Nav from "@/components/nav/Nav";
import HomeSection from "@/components/sections/home";
import AboutSections from "@/components/sections/about";
import OurSection from "@/components/sections/our";
import ProcessSection from "@/components/sections/process";
import WorkSection from "@/components/sections/work";
import WhyAus from "@/components/sections/whyAus";
import ContactSection from "@/components/sections/contact";
import FooterSection from "@/components/sections/footer";
import TestPack from "@/components/sections/testPack";

export default function Home() {
    return (
        <>
            <Nav/>
            <HomeSection/>
            {/*<TestPack/>*/}
            <AboutSections/>
            <OurSection/>
            <ProcessSection/>
            <WorkSection/>
            <WhyAus/>
            <ContactSection/>
            <FooterSection/>
        </>
    );
}