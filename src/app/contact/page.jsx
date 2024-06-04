import ContactDetails from "./components/ContactDetails"
import ContactForm from "./components/ContactForm"
import ContactTitle from "./components/ContactTitle"

const ContactPage = () => {
    
    return (
        <div className="max-w-[1200px] relative w-full flex flex-wrap justify-center px-4 md:px-12 lg:px-18 pt-[6rem]">
            <div className="w-full flex flex-wrap justify-start">
                <ContactTitle/>
            </div>
            <div className="max-w-[1200px] w-full flex flex-wrap flex-col md:flex-row justify-center">
            <div className="flex  w-[95%] md:w-[50%] flex-wrap justify-center md:px-8 lg:pr-10">
                <ContactDetails/>
            </div>
            <div className="flex w-[95%] md:w-[50%] flex-wrap justify-center md:px-8 lg:pr-10">
                <ContactForm/>
            </div>
            <div className="hidden absolute items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
               <div className="w-[20px] bg-primary h-[1px]"></div>
               <p className="p-4">OU</p> 
               <div className="w-[20px] bg-primary h-[1px]"></div>
            </div>
            </div>
        </div>
    )
}

export default ContactPage