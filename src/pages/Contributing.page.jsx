import { Outlet, useLocation, useOutlet } from "react-router-dom"
import { Hyperlink, Note, SectionHeader, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const Contributing = () => {
    const location = useLocation()
    const outlet = useOutlet()

    console.log(outlet)

    return (
        <div>
            <div className="w-6/12 p-4 mx-auto [&>*]:text-gray-600 shadow bg-white">
                <SectionHeader>
                    Contributing
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
                <Outlet />
            </div>
        </div>
    )
}
export default Contributing