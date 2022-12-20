import { Note, Section, SectionHeader, SectionSubHeader, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const About = () => {
    return (
        <Section className="p-4 md:p-12 md:mt-8 shadow bg-white">
            <SectionHeader className="text-tcsi-lightblue">
                About
            </SectionHeader>
            <SectionSubHeader className="text-black">
                The Origins of The Center for Sympathetic Intelligence
            </SectionSubHeader>
            <TextSection className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iure dolorem nemo cum consequuntur, incidunt vero odio 
                harum voluptates qui, totam repellat! Obcaecati iusto, beatae 
                ab esse ipsam perferendis, modi unde architecto 
                fugit quo ipsum temporibus atque, nesciunt saepe officiis in 
                eum sint deleniti.
            </TextSection>
            <Note>
                Here's an example of a note
            </Note>
        </Section>

    )
}
export default About