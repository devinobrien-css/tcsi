import { Note, Section, SectionHeader, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const Research = () => {
    return (
        <Section className="p-4 md:p-12 md:mt-8 shadow bg-white">
            <SectionHeader>
                Research
            </SectionHeader>
            <TextSection>
                In the spirit of sympathetic intelligence itself, we seek 
                contributions at the intersetion of SI and your domain. To 
                contirbute research, please xyz...
            </TextSection>
            <TextSection>
                {/* <Hyperlink>volunteering</Hyperlink> */}
            </TextSection>
            <Note>
                Here's an example of a note
            </Note>
        </Section>
    )
}
export default Research