import { Icon } from "@iconify/react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { MainSVG } from '../resources/svg/homeSVG.library.jsx'
const HeaderNavTab = ({className,path,title}) => {
    const location = useLocation()
    console.log(location.pathname)

    return (
        <Link className="h-full group" to={path}>
            <div className={`capitalize my-auto [&>*]:my-auto p-4 group-hover:scale-110 transform transition-all border-b-4 ${className} ${path===location.pathname?" border-orange-500":"border-transparent"}`}>
                <span>{title}</span>
            </div>
        </Link>
    )
}

const HeaderNavMultiTab = ({className,title,tabs}) => {
    const [open,setOpen] = useState()
    const location = useLocation()
    let navigate = useNavigate();

    return (
        <div 
            className={`h-full min-h-32 capitalize relative px-4 cursor-pointer border-b-4 ${className} ${location.pathname.includes(title)?" border-orange-500":"border-transparent"}`} 
            onClick={() => {open?setOpen():setOpen(true)}}
        >
            <div 
                className="flex h-full w-max [&>*]:my-auto group"
                onClick={()=>{
                    if(open){
                        navigate(tabs[0].path)
                    }
                }}    
            >
                <p className={`pr-2 group-hover:scale-110 transform transition-all`}>{title}</p>
                <Icon icon={(open?"material-symbols:expand-circle-down-outline-rounded":"material-symbols:expand-circle-down-rounded")} className={`transition-all ${(open?"":"rotate-180")}`} />
            </div>
            <div className={`z-50 bg-gradient-to-tr from-indigo-300 to-green-500 bg-opacity-10 overflow-hidden absolute whitespace-nowrap w-fit min-w-full left-0 top-full right-0 transition-all ${open?'h-48':'h-[0%]'}`}>
                {tabs.map((tab,index) => <HeaderNavTab className={``} key={`multitab-${tab.title}-${index}`} path={tab.path} title={tab.title}/>)}
            </div>
        </div>
    )
}


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
        title:"Socio-Neurological",
        path:"/socio-neurological"
    },
    {
        title:"Copmonents",
        path:"/components"
    }
]

/** Main navigation bar
 * @returns a nav bar on the top of the page
 */
const HeaderNav = () => {
    const [open,setOpen] = useState()
    return (
        <>
            <div className="shadow flex w-full justify-between bg-gradient-to-r fixed from-indigo-300 to-green-500">
                <p className="text-white h-min my-auto text-3xl py-2 px-4 whitespace-nowrap">Sympathetic Intelligence</p>

                <nav className="flex text-gray-800 text-lg md:opacity-100 opacity-0 w-0 md:w-full justify-end transition-all">
                    <HeaderNavTab path="/" title="home" />
                    <HeaderNavTab path="/origins" title="origins" />
                    <HeaderNavMultiTab path="/concept" title="concept" tabs={experimentsMultiTab} />
                    <HeaderNavMultiTab path="/depthfullness" title="Explore" tabs={exploreMultiTab} />
                    <HeaderNavTab path="/applications" title="applications" />
                    <HeaderNavTab path="/videos" title="videos" />
                    <HeaderNavTab path="/experiments" title="experiments" />
                </nav>

                <button className="md:invisible visible md:w-0 transition-all">
                    <Icon icon={"charm:menu-hamburger"} width="50" onClick={()=> open?setOpen():setOpen(true)}/>
                </button>
            </div>
            <div className={`z-50 absolute overflow-hidden transition-all duration-[800ms] top-0 right-0 ${open?'w-full h-full':'w-0 h-0'} bg-gradient bg-cover bg-no-repeat`}>
                <button className="absolute top-2 right-2" onClick={()=>setOpen()}>
                    <Icon icon={"ph:x-circle-bold"} width="50"/>
                </button>
                <nav className="flex flex-col items-center text-gray-800 text-lg justify-between transition-all" onClick={()=>{
                    setTimeout(()=>{
                        setOpen()
                    },100)
                }}>
                    <HeaderNavTab path="/" title="home" />
                    <HeaderNavTab path="/origins" title="origins" />
                    <HeaderNavMultiTab path="/concept" title="concept" tabs={experimentsMultiTab} />
                    <br/>
                    <HeaderNavMultiTab path="/depthfullness" title="Explore" tabs={exploreMultiTab} />
                    <HeaderNavTab path="/applications" title="applications" />
                    <HeaderNavTab path="/videos" title="videos" />
                    <HeaderNavTab path="/experiments" title="experiments" />
                </nav>
                <MainSVG className="absolute"/>
            </div>
            <br/>
            <br/>
            <br/>
        </>
    )
}
export default HeaderNav