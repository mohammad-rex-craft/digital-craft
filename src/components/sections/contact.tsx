'use client'
import {useState} from "react";


const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };
    return (
        <div className={'py-32 px-12 sm:px-20 lg:px-32 w-full'} style={{background: "linear-gradient(to bottom, #333331 0%, #121738 5%, #2D398B 100%);"}}>
            <div className={'flex justify-between flex-col gap-4 md:gap-0 md:flex-row'}>
                <div className={'md:w-1/2 w-full flex items-center'}>
                   <div className={'flex flex-col'}>
                       <span className={'text-white'}>Take The Silk Road To</span>
                       <h3 className={'inline-block leading-[1] text-[30px] md:text-[40px] xl:text-[50px] text-[#04E4FF] [text-shadow:_0_0_18px_#04E4FF]'} >Digitizing Your Business Growth</h3>
                   </div>
                </div>
                <div className={'md:w-1/2 w-full flex flex-col text-white'}>
                    <h4 className={'text-[15px] md:text-[20px] xl:text-[30px]'}>Start A Conversation With Us</h4>
                    <form onSubmit={handleSubmit} className={''}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name*
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email*
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone*
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Message*
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full border-2 border-white text-white bg-transparent py-2 px-4 rounded-md hover:bg-white hover:text-darkBlue"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection