import { BulletList, BulletPoint, DonationButton, Section, SectionHeader, TextSection } from "../components/custom.library"

/** Donations Page
 * @returns the sections of the donations page
 */
const Donations = () => {
    return (
        <Section className="p-4 md:p-24 md:mt-8 shadow bg-white">
            <DonationButton />
            <br/>
            <SectionHeader className="text-tcsi-blue">
                Donations
            </SectionHeader>
            <TextSection>
                <br/>
                Imagine - It's easy if you try!
                <br/>
                <br/>
                Here at the Center for Sympathetic Intelligence we believe we are forging a way forward to a better
                future, for what the world needs now is a more caring society.
                <br/>
                <br/>
                We also believe that the human race is an intelligent species that has so far failed to realize the 
                full potential of its deepest intelligence - the capacity to live in sympathy with each other.
                <br/>
                <br/>
                But here at the Center for Sympathetic Intelligence we imagine:
            </TextSection>
            <BulletList className="list-disc w-5/6 mx-auto">
                <BulletPoint>A Society where neighborliness is the norm rather than the exception!</BulletPoint>
                <BulletPoint>A workplace where people can earn a wage without suffering an environment filled with aggression, angst and stress!</BulletPoint>
                <BulletPoint>A Health Care Industry that really cares or a corporate financial world motivated in equal part between profit and socially responsible investing!</BulletPoint>
                <BulletPoint>A police force that rarely needs to exercise authority by force in conducting their day-to-day mission of keeping the peace or a police force that can rely on the force of reason and civility alone to ensure compliance.</BulletPoint>
                <BulletPoint>A higher educational system which really puts the student as a developing human person at the center of its mission and is also a great place for teachers, instructors and professors alike to work.</BulletPoint>
            </BulletList>
            <TextSection>
                <br/>
                <br/>
                Please consider donating to our mission - we are a Not For Profit Charity registered with the NY State 
                - this means you can use your generosity to reduce your tax imprint and know that your donation will 
                go to funding the Center and its Mission.
                <br/>
                <br/>
                To make a donation visit XXXXXXX
                <br/>
                <br/>
                To learn more about the Center and its work, visit the Mission Page.
                <br/>
                <br/>
                The Center for Sympathetic Intelligence - where ##bringing depth## to life is is our mission.
            </TextSection>
        </Section>
    )
}
export default Donations