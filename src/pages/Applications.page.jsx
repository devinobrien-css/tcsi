import { Hyperlink, Note, Section, SectionHeader, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const Applications = () => {
    return (
        <Section className="text-white">
            <SectionHeader>
                Applications
            </SectionHeader>
            <TextSection>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iure dolorem nemo cum consequuntur, incidunt vero odio 
                harum voluptates qui, totam repellat! 
                <Hyperlink to="#">This is a hyperlink</Hyperlink> 
                Obcaecati iusto, beatae ab esse ipsam perferendis, modi unde architecto 
                fugit quo ipsum temporibus atque, nesciunt saepe officiis in 
                eum sint deleniti.
            </TextSection>
            <Note>
                Here's an example of a note
            </Note>
        </Section>
    )
}
export default Applications