import { Outlet, useLocation } from "react-router-dom"
import { Section, SectionHeader, SectionSubHeader, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const About = () => {
    const location = useLocation()
    
    return (
        <>
            {
                location.pathname.split('/').length>2?(
                    <Outlet />
                ):(
                    <>
                        <Section className="p-4 md:p-24 md:mt-8 shadow bg-white" id="scrollToSection">
                            <SectionHeader className="text-tcsi-lightblue">
                                About
                            </SectionHeader>
                            <SectionSubHeader className="text-gray-800">
                                The Origins of The Center for Sympathetic Intelligence
                            </SectionSubHeader>
                            <TextSection className="text-black">
                                The establishment of the Center, began when the Provost and 
                                Interim President at the State University of NY in Albany, 
                                Dr. James Stellar noticed that one of the instructors at the 
                                University, Robert Hamilton appeared to enjoy an especially 
                                good rapport with his students. During a conversation Dr. 
                                Stellar told Mr. Hamilton that he believed the instructor 
                                was doing something different. “If I am doing anything 
                                different, it is because I am sensitive to the role of 
                                Sympathetic Intelligence in teaching”. As a Neuroscientist, 
                                Robert's response was very intriguing to Dr. Stellar and he 
                                proposed they discuss it further.
                                <br/>
                                <br/>
                                Over the course of several conversations, Robert revealed that 
                                as an instructor he often found himself resorting to a tried 
                                and tested career as an Irish musician based in London while 
                                touring Europe and the world. Those were the days when musicians 
                                had to be real - the advantages of modern technology had not 
                                yet isolated the artist from the audience and Robert's band, 
                                The Fat Lady Sings we're especially close to their base. 
                                Through their performances the band had created a community of 
                                fans & Robert had found himself with a front row seat to a 
                                study on one of society's greatest open secrets - how to work 
                                a crowd!
                                <br/>
                                <br/>

                                Robert left the band In 1992 and became a Musician/Activist setting up Peace Together, a Peace initiative seeking to address ‘The Troubles’ in Northern Ireland and most especially to highlight the plight of young people there – 30 years of violence had taken it’s toll on generation after generation. In doing so, Robert hoped to put into practice everything he had learnt and witnessed in people over the course of his time working as a musician and successfully developing the band. People, he had realized were connected in a way that was neither documented nor ever really talked about.
                                <br/>
                                <br/>

                                In 1995 Peace Together came to an end, and Robert found himself in NY where a long period of reflection began. The question that continued to revisit his mind was “What was it that he had witnessed as a musician and activist in so many people over those years and that seemed to bind them so powerfully together”. Initially he referred to it as ‘Epiphanicism’ as this was how it manifested in terms of audiences, but finally he had come to realize that what was reflected in crowd behavior, was something deeper in each individual, and that existed from day to day in people as they went about their lives. He called it Sympathetic Intelligence.
                                <br/>
                                <br/>

                                It was also during this time that Robert began teaching and discovered that he had a real passion for both learning and teaching.
                                <br/>
                                <br/>

                                In 2001, Robert entered University College Dublin and spent three years studying law – qualifying with a degree in 2001. It was during the course of studying law and specifically studying Criminology, that Robert first contemplated the topic of ‘Empathy’ and the role that it played in determining a person’s potential criminal disposition. This lead to his developing a keener understanding and a stronger belief in the existence of Sympathetic Intelligence. This keen sensitivity to its existence meant that Robert over time naturally developed and adopted an approach to life that was both unique and very effective. This was what Dr. Jim Stellar had seen reflected in Robert’s students at the University.
                                <br/>
                                <br/>

                                Dr. Stellar and Robert were joined in writing about their common passion for Education by Emily Barrett which resulted in a series of articles that examined the various component parts of the modern University Environment. Sympathetic Intelligence was very much at the center of those pieces. Eventually they decided to form a committee, inviting Daniel Webster, Hadi Salavitabar and Ian MacDonald to join them in forming The Center. These six people presently form the Board of Directors for the Center, which is a Legally incorporated Not For Profit Entity with the State of New York.
                                <br/>
                                <br/>

                                No-one at The Center believes that we have invented or discovered something new. Sympathetic Intelligence has been with mankind since the beginning. Here we are in a similar position to Newton when he introduced us all to Gravity – he couldn’t claim to have either created or invented it – and nor can we.
                            </TextSection>
                        </Section>
                    </>
                )
            }
        </>
    )
}
export default About