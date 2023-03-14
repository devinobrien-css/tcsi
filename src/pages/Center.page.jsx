import { InputMd, Section, SectionHeader, TextAreaMd, TextSection } from "../components/custom.library"

/**
 * @returns 
 */
const Center = () => {
    return (
        <>
            <div className="relative p-4 sm:p-8 md:p-24 mt-16 md:mt-26 shadow bg-white md:w-4/5">
                <div className="md:flex">
                    <SectionHeader className="text-tcsi-blue my-auto md:w-1/2 sm:py-8">
                        Bringing depth to life
                    </SectionHeader>
                    <TextSection className="md:w-1/2 md:text-xl">
                        Sympathetic Intelligence is an innate regulatory sense and response mechanism which each of us has 
                        and which binds us all together as a species. It is present at that point of inflection which is at 
                        the center of every human transaction, the measure of which is seen in the degree of care exhibited 
                        by our behavior and the result of which can be a better society for all.
                    </TextSection>
                </div>
                <svg className="absolute left-[45%] md:right-1/4  top-[90%]" onClick={()=>document.querySelector("#message").scrollIntoView({
                    behavior:"smooth"
                })}>
                    <g>
                        <circle className="fill-[#A4DF53] stroke-2 stroke-white" cx="29.2" cy="29.2" r="29.2"/>
                        <g>
                            <polygon className="fill-white" points="29.2,46.7 44.3,20.5 14.2,20.5   "/>
                        </g>
                    </g>
                </svg>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="p-2 mt-24 pt-64" id="message">
                <p className="text-center">To learn more about the concept and the theory behind it, visit the Concept Section of this site.</p>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>

    )
}
export default Center