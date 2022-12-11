import { Icon } from "@iconify/react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"


const SideNavTab = ({className,path,title,icon,...rest}) => {
    const location = useLocation()
    console.log(location.pathname)

    return (
        <Link className="h-full group" to={path} {...rest}>
            <div className={`capitalize my-auto p-4 text-3xl group-hover:bg-blue-100 bg-opacity-90 transition-colors border-b-4 flex  ${className} ${path===location.pathname?" border-orange-500":"border-transparent"}`}>
                <Icon icon={icon} className="" />
                <span className="my-auto pl-2 font-teko">{title}</span>
            </div>
        </Link>
    )
}

const SideNavMultiTab = ({title,icon,path,tabs}) => {
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
                <Icon icon={icon} />
                <p className={`pr-2 group-hover:scale-110 transform transition-all`}>{title}</p>
                <Icon icon={(open?"material-symbols:expand-circle-down-outline-rounded":"material-symbols:expand-circle-down-rounded")} className={`transition-all ${(open?"":"rotate-180")}`} />
            </div>
            <div className={`w-full overflow-hidden transition-all ${open?'h-[300%]':'h-[0%]'}`}>
                {tabs.map((tab,index) => <SideNavTab className={``} key={`multitab-${tab.title}-${index}`} path={tab.path} title={tab.title}/>)}
            </div>
        </div>
    )
}


const contributionsMultiTab = [
    {
        title:"Research",
        path:"/contributing/research"
    },
    {
        title:"Volunteering",
        path:"/contributing/volunteering"
    },
    {
        title:"Donations",
        path:"/contributing/donations"
    }
]

/** Side navigation bar
 * @returns a nav bar on the left side of the page
 */
 const SideNav = () => {
    const [open,setOpen] = useState()

    return (
        <>
            <div 
                className={`z-[1000] shadow-xl border h-full bg-tcsi-dark-green fixed left-0 top-0 transition-width duration-800 ${open?"w-1/3":"w-2"}`}
                // onBlur={()=>setOpen()}
                tabindex="0"
            >
                <div 
                    className="absolute flex border-r border-t border-b bg-tcsi-dark-green cursor-pointer left-full top-14 h-10 w-4 rounded-r"
                    onClick={() => {open?setOpen():setOpen(true)}}   
                >

                    <Icon icon={"bi:chevron-bar-right"} width={40} className={`transform transition-all text-gray-800 ${open?"rotate-180":""}`}/>
                </div>

                <nav className={`text-gray-800 text-lg overflow-hidden ${open?"w-full":"w-0"}`}>
                    <p className="text-white h-min my-auto text-3xl p-2">The Center for Sympathetic Intelligence</p>
                    <SideNavTab path="/about" title="about" icon="tabler:info-square" onClick={() => setOpen()}/>
                    <SideNavTab path="/panels" title="panels" icon="carbon:machine-learning-model" onClick={() => setOpen()} />
                    <SideNavTab path="/publications" title="publications" icon="ph:books-duotone" onClick={() => setOpen()}/>
                    <SideNavMultiTab path="/contributing" title="Contributions" icon="ph:graph-duotone" tabs={contributionsMultiTab} />
                    <SideNavTab path="/contributing" title="contributing" icon="ph:graph-duotone" onClick={() => setOpen()}/>
                    <SideNavTab path="/contact" title="contact" icon="tabler:message-circle" onClick={() => setOpen()}/>
                </nav>
            </div>
        </>
    )
}
export default SideNav