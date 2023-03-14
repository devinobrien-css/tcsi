import { Note, Section, SectionHeader, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const HealthcarePanel = () => {
    return (
        <Section className="p-4 md:p-24 md:mt-8 shadow bg-white">
            <SectionHeader className="text-tcsi-lightblue">
                Healthare
            </SectionHeader>
            <TextSection>
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
export default HealthcarePanel