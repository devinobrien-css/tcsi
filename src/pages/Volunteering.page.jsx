import { Hyperlink, Note, Section, SectionHeader, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const Volunteering = () => {
    return (
    <Section className="p-4 md:p-24 md:mt-8 shadow bg-white">
        <SectionHeader className="text-tcsi-blue">
            Volunteering
        </SectionHeader>
        <TextSection>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam iste qui officia placeat 
            alias sapiente, expedita sunt velit? Molestias iusto eius veniam dolores accusamus, blanditiis hic 
            delectus nisi quisquam!
            <br/>
            <br/>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero odit modi cumque dolor fugit odio possimus 
            doloribus, explicabo necessitatibus saepe enim, molestias provident laudantium dignissimos reprehenderit 
            ad eveniet harum magnam placeat unde in tempora magni. Ab dolor odio ad error quibusdam. Commodi et 
            repudiandae deleniti earum quidem sint harum? Incidunt?
        </TextSection>
    </Section>
    )
}
export default Volunteering