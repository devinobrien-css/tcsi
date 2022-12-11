import { Icon } from "@iconify/react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

const HeaderNavTab = ({className,path,title}) => {
    const location = useLocation()
    console.log(location.pathname)

    return (
        <Link className="h-full group" to={path}>
            <div className={`capitalize my-auto p-4 group-hover:scale-110 transform transition-all border-b-4 ${className} ${path===location.pathname?" border-orange-500":"border-transparent"}`}>
                {title}
            </div>
        </Link>
    )
}

const HeaderNavMultiTab = ({title,tabs}) => {
    const [open,setOpen] = useState()
    const location = useLocation()
    let navigate = useNavigate();

    return (
        <div 
            className={`capitalize relative px-4 cursor-pointer border-b-4  ${location.pathname.includes(title)?" border-orange-500":"border-transparent"}`} 
            onClick={() => {open?setOpen():setOpen(true)}}
        >
            <div 
                className="flex h-full [&>*]:my-auto group"
                onClick={()=>{
                    if(open){
                        navigate(tabs[0].path)
                    }
                }}    
            >
                <p className={`pr-2 group-hover:scale-110 transform transition-all`}>{title}</p>
                <Icon icon={(open?"material-symbols:expand-circle-down-outline-rounded":"material-symbols:expand-circle-down-rounded")} className={`transition-all ${(open?"":"rotate-180")}`} />
            </div>
            <div className={`bg-gradient-to-tr from-indigo-300 to-green-500 bg-opacity-10 w-full overflow-hidden absolute top-full right-0 transition-all ${open?'h-[300%]':'h-[0%]'}`}>
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

/** Main navigation bar
 * @returns a nav bar on the top of the page
 */
const HeaderNav = () => {
    return (
        <>
            <div className="shadow flex w-full justify-between bg-gradient-to-r fixed from-indigo-300 to-green-500">
                <p className="text-white h-min my-auto text-3xl py-2 px-4">Sympathetic Intelligence</p>

                <nav className="flex text-gray-800 text-lg">
                    <HeaderNavTab path="/" title="home" />
                    <HeaderNavTab path="/origins" title="origins" />
                    <HeaderNavMultiTab path="/concept" title="concept" tabs={experimentsMultiTab} />
                    <HeaderNavTab path="/applications" title="applications" />
                    <HeaderNavTab path="/videos" title="videos" />
                    <HeaderNavTab path="/experiments" title="experiments" />
                </nav>
            </div>
            <br/>
            <br/>
            <br/>
        </>
    )
}
export default HeaderNav