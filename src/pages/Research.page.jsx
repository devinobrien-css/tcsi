import { Section, SectionHeader, TextSection } from "../components/custom.library"

/** Research page
 * @returns the sections of the research page
 */
const Research = () => {
    return (
        <Section className="p-4 md:p-24 md:mt-8 shadow bg-white">
            <SectionHeader className="text-tcsi-blue">
                Research
            </SectionHeader>
            <br/>
            <TextSection>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui possimus maiores temporibus nemo sapiente? Sint rem voluptatem officiis in tempore laborum vitae, consectetur minima accusamus temporibus mollitia corrupti, et corporis commodi fugiat. Eius nisi odio iste? Eos rem sequi ex, aliquid, laboriosam aut dolores molestias in sapiente perferendis, enim porro!
            </TextSection>
        </Section>
    )
}
export default Research