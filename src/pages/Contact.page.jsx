import { InputMd, SectionHeader, TextAreaMd, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const Contact = () => {
    return (
        <div>
            <div className="w-6/12 p-4 mx-auto [&>*]:text-gray-600 shadow bg-white">
                <SectionHeader>
                    Contact
                </SectionHeader>
                <TextSection>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure dolorem nemo cum consequuntur, incidunt vero odio 
                    harum voluptates qui.
                </TextSection>
                <InputMd>Your Name</InputMd>
                <InputMd>Your Email</InputMd>
                <TextAreaMd>Your Message</TextAreaMd>
                
            </div>
        </div>
    )
}
export default Contact