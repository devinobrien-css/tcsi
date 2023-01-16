import gsap from "gsap"
import { useEffect } from "react"
import { OutlinedHeader, SectionHeader, TextSection } from "../../components/custom.library"




export const TierTwo = () => {
    useEffect(() => {
        gsap.fromTo("#tier-section",{
            opacity:0
        },{
            opacity:1,
            duration:1.5
        })
    },[])

    return (
        <div id="tier-section">
            <SectionHeader>Tier 2 - Interpersonal/Between</SectionHeader>
            <TextSection>
                Sympathetic Intelligence at this level is driven by a 
                survivalist Need, Desire and Capacity to belong or be connected
                by the individual, but extends intelligence beyond the 
                individual and is said to be within, between and amongst all 
                of us. It starts with person-to-person engagement and builds 
                to an ever-strengthening attachment with those immediately 
                around each individual extending to a social network as we 
                become members of groups such as partnerships, teams and 
                communities. We first match, then connect and bond. 
                Sympathetic Intelligence at this level becomes a multi-layered 
                Collective phenomenon that manifests in a multitude of ways 
                from flow states visible in teams to the vibes felt in 
                audiences.
            </TextSection>
            <br/>
            <OutlinedHeader>match</OutlinedHeader>
            <TextSection>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Voluptatem officiis quas tempore nisi a ullam esse eligendi 
                repellat quod, optio dicta dolores delectus aperiam et eaque, 
                molestias qui corrupti unde pariatur blanditiis laboriosam 
                temporibus, animi maxime. Quam quos nobis dolor ratione quia. 
            </TextSection>
            <br/>
            <OutlinedHeader>connect</OutlinedHeader>
            <TextSection>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Voluptatem officiis quas tempore nisi a ullam esse eligendi 
                repellat quod, optio dicta dolores delectus aperiam et eaque, 
                molestias qui corrupti unde pariatur blanditiis laboriosam 
                temporibus, animi maxime. Quam quos nobis dolor ratione quia. 
            </TextSection>
            <br/>
            <OutlinedHeader>bond</OutlinedHeader>
            <TextSection>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Voluptatem officiis quas tempore nisi a ullam esse eligendi 
                repellat quod, optio dicta dolores delectus aperiam et eaque, 
                molestias qui corrupti unde pariatur blanditiis laboriosam 
                temporibus, animi maxime. Quam quos nobis dolor ratione quia. 
            </TextSection>
            <br/>
            <br/>
        </div>
    )
}