import { Hyperlink, Note, SectionHeader, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const Applications = () => {
    return (
        <div>
            <div className="w-5/12 mx-auto">
                <SectionHeader>
                    Applications
                </SectionHeader>
                <TextSection>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure dolorem nemo cum consequuntur, incidunt vero odio 
                    harum voluptates qui, totam repellat! 
                    <Hyperlink to="#">This is a hyperlink</Hyperlink> 
                    Obcaecati iusto, beatae ab esse ipsam perferendis, modi unde architecto 
                    fugit quo ipsum temporibus atque, nesciunt saepe officiis in 
                    eum sint deleniti.
                </TextSection>
                <Note>
                    Here's an example of a note
                </Note>
            </div>
        </div>
    )
}
export default Applications