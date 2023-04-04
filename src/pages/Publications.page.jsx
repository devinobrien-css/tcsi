import { ItalicSubHeader, Note, Section, SectionHeader, TextSection, WebsiteLink } from "../components/custom.library"

/** Publications Page
 * @returns the sections of the publications page
 */
const Publications = () => {
    return (
        <Section className="p-4 md:p-24 md:mt-8 shadow bg-white">
                <SectionHeader className="text-tcsi-lightblue">
                    Publications
                </SectionHeader>
                <br/>
                <SectionHeader>
                    Sympathetic Intelligence in Education
                </SectionHeader>
                <ItalicSubHeader>by Robert Hamilton, Emily Barrett, and Jim Stellar</ItalicSubHeader>
                <TextSection>
                    What underlies the success of the Ninja instructor as discussed in the last blog? We think the 
                    answer is most visible in the experiential context of project-based courses as discussed in the 
                    first blog. But then it goes much deeper and well into the larger teaching environment as we will 
                    lay out in this blog. 
                </TextSection>
                <WebsiteLink to="http://otherlobe.com/papers/sympathetic-intelligence-in-education/">
                    <Note>
                        Click to read a blog post about the center
                    </Note>
                </WebsiteLink>
                <br/>
                <br/>
                <SectionHeader>
                    Ninja - The Art of the Modern Instructor
                </SectionHeader>
                <ItalicSubHeader>by Robert Hamilton, Emily Barrett, and Jim Stellar</ItalicSubHeader>
                <TextSection>
                    In modern slang, Ninja means stealth and a Ninja is someone who commits “crazy” (outside the box) 
                    acts with powerfully positive results. Webster Dictionary defines a Ninja as “a person who excels 
                    in a particular skill.” We believe that Ninja lies at the core of what makes every instructor 
                    unique, powerful, and most importantly - effective. To us, Ninja is the bringing together of 
                    explicit and implicit approaches to teaching. These approaches and subsequent skills are what sets 
                    an excellent instructor apart from the rest. It is our hope over the course of this document and in 
                    subsequent pieces to explore the nexus between the explicit and implicit components of the brain 
                    and mind, and the role this nexus plays in both how we learn and teach. 
                </TextSection>
                <WebsiteLink to="http://otherlobe.com/papers/ninja-the-art-of-the-modern-instructor/">
                    <Note>
                        Click to read a blog post about NINJA
                    </Note>
                </WebsiteLink>
                <br/>
                <br/>
                <SectionHeader>
                    CONTRIBUTIVE PATHWAYS
                </SectionHeader>
                <ItalicSubHeader>by Robert Hamilton, Emily Barrett, and Jim Stellar</ItalicSubHeader>
                <TextSection>
                    In July, 2017 two instructors at the University of Albany, SUNY, in the College of Emergency 
                    Preparedness, Homeland Security, and Cybersecurity[1], SUNY, Robert Hamilton and Emily Barrett,
                    came face-to-face in a chance meeting during lunchtime.

                    Over the course of a two-hour conversation they both realized that each held a different piece of 
                    the same jigsaw puzzle, Robert was involved in the development of a new undergraduate course on 
                    cybersecurity, called “The Threat Within” that was based on virtual internships and was done in 
                    partnership with a company, iQ4,and Emily was involved in creating a program of real-world 
                    Internships for undergraduate students at the college. They quickly realized that they should be 
                    partners in a dual pursuit.
                </TextSection>
                <WebsiteLink to="http://otherlobe.com/papers/contributive-pathways/">
                    <Note>
                        Cick to read an article on Contributive Pathways
                    </Note>
                </WebsiteLink>
        </Section>
    )
}
export default Publications