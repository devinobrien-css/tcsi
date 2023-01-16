import { InputMd, Section, SectionHeader, TextAreaMd, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const Contact = () => {
    return (
        <Section className="p-4 md:p-12 md:mt-8 shadow bg-white">
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
        </Section>
    )
}
export default Contact