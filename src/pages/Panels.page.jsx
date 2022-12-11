import { Note, SectionHeader, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const Panels = () => {
    return (
        <div>
            <div className="w-6/12 p-4 mx-auto [&>*]:text-gray-600 shadow bg-white">
                <SectionHeader>
                    Panels
                </SectionHeader>
                <TextSection>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure dolorem nemo cum consequuntur, incidunt vero odio 
                    harum voluptates qui, totam repellat! Obcaecati iusto, beatae 
                    ab esse ipsam perferendis, modi unde architecto 
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
export default Panels