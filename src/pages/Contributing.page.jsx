import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Hyperlink, Section, SectionHeader, SectionSubHeader, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const Contributing = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <>
            {
                location.pathname.split('/').length>2?(
                    <Outlet />
                ):(
                    <>
                        <Section className="p-4 md:p-24 md:mt-8 shadow bg-white" id="scrollToSection">
                            <SectionHeader className="text-tcsi-lightblue">
                                Contributing to the Center
                            </SectionHeader>
                            <TextSection className="text-black">
                                In the spirit of sympathetic intelligence itself, we seek contributions at the intersetion of SI and your domain. To contirbute research, please xyz...
                                <br/>
                                <br/>
                                We are also looking for volunteers running the center - Please go to 
                                <Hyperlink onClick={()=>navigate('volunteering')}>
                                    Volunteering
                                </Hyperlink> for details.
                                <br/>
                                <br/>
                                We are a registered non-for-profit organization. Your financial contributions are what makes this center operate. To donate, go to 
                                <Hyperlink onClick={()=>navigate('donations')}>
                                    Donations
                                </Hyperlink>
                            </TextSection>
                        </Section>
                    </>
                )
            }
        </>
    )
}
export default Contributing