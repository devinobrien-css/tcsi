import { NavTab } from "./NavTab.components"

export const ConceptNav = ({Burger}) => {
    return(
        <div className="flex justify-between">
            <p className="text-white font-extralight h-min my-auto text-2xl md:text-3xl py-2 px-4 whitespace-nowrap">Sympathetic Intelligence</p>

            <nav className={`text-gray-700 text-lg justify-end transition-all duration-1400 md:flex hidden pr-6`}>
                <NavTab path="/origins" title="origins" />
                <NavTab path="/concept/tier1" title="the tiers"/>
                <div className="border border-gray-800 border-opacity-20 my-auto h-4/5"></div>
                <NavTab path="/dephtfullness" title="Depthfullness" />
                <NavTab path="/socio-neurological" title="Socio-Neurology" />
                <NavTab path="/applications" title="applications" />
                <NavTab path="/applications" title="applications" />
                <NavTab path="/videos" title="videos" />
                <NavTab path="/components" title="Components" />
            </nav>
            <Burger />
        </div>
    )
}
