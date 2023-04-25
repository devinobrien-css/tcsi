import { NavMultiTab, NavTab } from "./NavTab.components"

const experimentsMultiTab = [
    {
        title:"Tier 1",
        path:"/concept/tier1"
    },
    {
        title:"Tier 2",
        path:"/concept/tier2"
    },
    {
        title:"Tier 3",
        path:"/concept/tier3"
    }
]

const exploreMultiTab = [
    {
        title:"Depthfullness",
        path:"/depthfullness"
    },
    {
        title:"Socio-Neurology",
        path:"/socio-neurological"
    },
    {
        title:"Components",
        path:"/components"
    }
]



export const ConceptNav = ({Burger}) => {
    return(
        <div className="flex justify-between">
            <p className="text-white font-extralight h-min my-auto text-2xl md:text-3xl py-2 px-4 whitespace-nowrap">Sympathetic Intelligence</p>

            <nav className={`text-gray-700 text-lg justify-end transition-all duration-1400 md:flex hidden`}>
                <NavTab path="/about-concept" title="about" />
                <NavTab path="/origins" title="origins" />
                <NavMultiTab path="/concept" title="the tiers" tabs={experimentsMultiTab}/>
                <div className="w-[4em]"></div>
                <div className="w-[4em] border-l"></div>
                <NavMultiTab path="/depthfullness" title="Explore" tabs={exploreMultiTab}/>
                <NavTab path="/applications" title="applications" />
                <NavTab path="/videos" title="videos" />
                <NavTab path="/experience" title="experience SI" />
            </nav>

            <Burger />
        </div>
    )
}
