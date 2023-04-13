import { BulletList, BulletPoint, Hyperlink, ItalicSubHeader, Note, SectionHeader, SectionSubHeader, TextSection, WebsiteLink } from "../components/custom.library";

const Examples = () => {
    return (
        <div className="p-4 text-white">
            <SectionHeader>Example Components</SectionHeader>
            <hr/>
            <hr/>
            <br/>
            <SectionHeader>This is a SectionHeader component</SectionHeader>
            <br/>
            <SectionSubHeader>This is a SectionSubHeader component</SectionSubHeader>
            <br/>
            <ItalicSubHeader>This is an ItalicSectionSubHeader component</ItalicSubHeader>
            <br/>
            <TextSection>This is a TestSection component. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, minima assumenda voluptatem, velit quo architecto laudantium harum dicta fugiat incidunt nulla corporis? Corrupti.</TextSection>
            <br/>
            <Note>This is an example of a note</Note>
            <br/>
            <Hyperlink to="#">
                This text is a Hyperlink component
            </Hyperlink>
            <br/>
            <br/>
            <WebsiteLink to='#'>
                <Note>This note is now a hyperlink because it is wrapped in a WebsiteLink component. Click to see</Note>
            </WebsiteLink>
            <br/>

            <TextSection>To make a table, we use the BulletList and BulletPoint components</TextSection>
            <BulletList>
                <BulletPoint>Item 1</BulletPoint>
                <BulletPoint>Item 2</BulletPoint>
                <BulletPoint>Item 3</BulletPoint>
                <BulletPoint>
                    <Hyperlink to='#'>
                        A bullet can be hyperlinked!
                    </Hyperlink>
                </BulletPoint>
                <BulletPoint>Item 3</BulletPoint>
            </BulletList>
        </div>
    )
}
export default Examples;