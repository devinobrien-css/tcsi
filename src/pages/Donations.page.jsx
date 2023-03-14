import { Icon } from "@iconify/react"
import { Section, SectionHeader, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const Donations = () => {
    return (
        <Section className="p-4 md:p-24 md:mt-8 shadow bg-white">
            <div>
                <a 
                    href="https://www.paypal.com/donate/?hosted_button_id=2CEQEM5YVDZ2N&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWxvYmplY3RzLmNvbS9kb25hdGUvc2RrL2RvbmF0ZS1zZGsuanMiLCJhdHRycyI6eyJkYXRhLXVpZCI6IjBhZDVkMzA0ZjBfbWRlNm5kbTZuZHEifX0&targetMeta=eyJ6b2lkVmVyc2lvbiI6IjlfMF81OCIsInRhcmdldCI6IkRPTkFURSIsInNka1ZlcnNpb24iOiIwLjguMCJ9"
                    target="_blank"
                    rel="noreferrer"
                    className="flex shadow-lg border rounded p-2 w-4/5 md:w-1/2 mx-auto hover:scale-105 transform transition-all cursor-pointer"
                    
                >
                    <Icon icon="logos:paypal" width="50" className="my-auto"/>
                    <p className="font-light text-lg p-1 text-center">Click here to donate on Paypal</p>
                </a>
            </div>
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
            <ul className="list-disc w-5/6 mx-auto">
                <li>A Society where neighborliness is the norm rather than the exception!</li>
                <li>A workplace where people can earn a wage without suffering an environment filled with aggression, angst and stress!</li>
                <li>A Health Care Industry that really cares or a corporate financial world motivated in equal part between profit and socially responsible investing!</li>
                <li>A police force that rarely needs to exercise authority by force in conducting their day-to-day mission of keeping the peace or a police force that can rely on the force of reason and civility alone to ensure compliance.</li>
                <li>A higher educational system which really puts the student as a developing human person at the center of its mission and is also a great place for teachers, instructors and professors alike to work.</li>
            </ul>
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