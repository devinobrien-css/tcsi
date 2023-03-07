import { Note, Section, SectionHeader, SectionSubHeader, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const Board = () => {
    return (
        <>
            
            <Section className="p-4 md:p-12 md:mt-16 shadow bg-white" id="scrollToSection">
                <SectionHeader className="text-tcsi-lightblue">
                    The Board of the Center
                </SectionHeader>
                <TextSection className="text-black">

                </TextSection>
            </Section>
        </>
    )
}
export default Board