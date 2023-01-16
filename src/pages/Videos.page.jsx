import { Section, SectionHeader, TextSection, VideoAdSm } from "../components/custom.library"


const Videos = () => {
    return (
        <Section className="text-white">
            <SectionHeader>
                Videos
            </SectionHeader>
            <TextSection  >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iure dolorem nemo cum consequuntur, incidunt vero odio harum 
                voluptates qui, totam debitis cupiditate repellat! Obcaecati 
                iusto, beatae ab esse ipsam perferendis, modi unde architecto 
                fugit quo ipsum temporibus atque, nesciunt saepe officiis in 
                eum sint deleniti.
            </TextSection>
            <div className="md:flex justify-between my-2">
                <VideoAdSm className="md:w-[48%]" href="https://youtu.be/NmiwAV9i5cY" embed="https://youtube.com/embed/NmiwAV9i5cY">
                    What do we mean by "Sympathy"?
                </VideoAdSm>
                <VideoAdSm className="md:w-[48%] mt-4 md:mt-0" href="https://youtu.be/q2bykgueC1I" embed="https://youtube.com/embed/q2bykgueC1I">
                    The Center's Affiliation with SOS
                </VideoAdSm>
            </div>
        </Section>
    )
}
export default Videos
