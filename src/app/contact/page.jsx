import ContactDetails from "./components/ContactDetails"
import ContactForm from "./components/ContactForm"
import ContactTitle from "./components/ContactTitle"



const ContactPage = () => {
    
    return (

        <main className="w-full flex flex-wrap justify-center pt-12 max-w-[1000px]">
            <div className="w-full flex flex-wrap justify-center pl-6">
                <ContactTitle/>
            </div>
            <div className="w-full flex flex-wrap flex-col md:flex-row justify-center">
                <ContactDetails/>
                <ContactForm/>
            </div>
        </main>

    )

}

export default ContactPage