import { Icon } from "@iconify/react"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { MainSVG } from '../resources/svg/homeSVG.library.jsx'

const HeaderNavTab = ({className,path,title,...rest}) => {
    const location = useLocation()

    return (
        <Link className="h-full group" to={path} >
            <div {...rest} className={`capitalize my-auto [&>*]:my-auto p-4 group-hover:scale-110 font-extralight transform transition-all border-b-4 ${className} ${path===location.pathname?" border-orange-500":"border-transparent"}`}>
                <span>{title}</span>
            </div>
        </Link>
    )
}

const HeaderNavMultiTab = ({className,title,tabs,setNavOpen}) => {
    const [open,setOpen] = useState()
    const location = useLocation()
    let navigate = useNavigate();

    return (
        <>

            <button 
                onBlur={() => {
                    setTimeout(() => {
                        if(open)
                            setOpen()
                    },100)
                }}
                className={`h-full capitalize relative cursor-pointer border-b-4 ${className} ${location.pathname.includes(title)?" border-orange-500":"border-transparent"}`} 
                onClick={(event) => {
                    if(open) setOpen()
                    else{
                        setOpen(true)
                    }

                }}
            >
                <div 
                    className="flex h-full w-max [&>*]:my-auto group p-4"
                >
                    <p className={`pr-2 group-hover:scale-110 transform transition-all font-extralight`}>{title}</p>
                    <Icon icon={(open?"material-symbols:expand-circle-down-outline-rounded":"material-symbols:expand-circle-down-rounded")} className={`transition-all ${(open?"":"rotate-180")}`} />
                </div>
                <div className={`z-[601] bg-gradient-to-tr from-indigo-300 to-green-500 bg-opacity-10 overflow-hidden absolute whitespace-nowrap w-fit min-w-full left-0 top-full right-0 transition-all ${open?'h-48':'h-[0%]'}`}>
                    {tabs.map((tab,index) => <HeaderNavTab className={``} onClick={() => {
                        console.log('click')
                        // setOpen()
                        navigate(tabs[index].path)
                        // setNavOpen()
                    }} key={`multitab-${tab.title}-${index}`} path={tab.path} title={tab.title}/>)}
                </div>
            </button>
        </>
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
        title:"Components",
        path:"/components"
    }
]

/** Main navigation bar
 * @returns a nav bar on the top of the page
 */
const HeaderNav = ({ type }) => {
    const [open,setOpen] = useState()
    const [hidden,setHidden] = useState(type!=='concept')
    console.log(type)

    useEffect(()=>{
        if(type!=='concept')
            setHidden(true)
    },[type])


    return (
        <>
            <div className={`z-[499] shadow flex justify-between bg-gradient-to-r fixed right-0 from-indigo-300 to-green-500 transition-all duration-1200 ${hidden?'w-8 overflow-hidden rounded-l-full':'w-full'}`}>

                <div className={`flex ${hidden?'flex-nowrap':'md:flex-nowrap flex-wrap'}`}>
                    {
                        type!=='concept'?
                        (
                            <Icon icon="material-symbols:arrow-circle-left-outline-rounded" width="30" className={`text-white my-auto  ${hidden?' mr-2 shrink-0':'ml-3 rotate-180'}`} onClick={()=> hidden?setHidden():setHidden(true)} />
                        ):(
                            <></>
                        )
                    }
                    <p className="text-white font-extralight h-min my-auto text-2xl md:text-3xl py-2 px-4 whitespace-nowrap">Sympathetic Intelligence</p>

                </div>

                <nav className={`flex text-gray-700 text-lg justify-end transition-all duration-1400  ${hidden?'w-0 overflow-hidden opacity-0':'opacity-1 overflow-hidden md:overflow-visible md:w-full w-0'}`}>
                    <HeaderNavTab path="/" title="home" />
                    <HeaderNavTab path="/origins" title="origins" />
                    <HeaderNavMultiTab path="/concept" title="concept" tabs={experimentsMultiTab} setNavOpen={setOpen}/>
                    <HeaderNavMultiTab path="/depthfullness" title="Explore" tabs={exploreMultiTab} setNavOpen={setOpen}/>
                    <HeaderNavTab path="/applications" title="applications" />
                    <HeaderNavTab path="/videos" title="videos" />
                    <HeaderNavTab path="/experience" title="experience SI" />
                </nav>

                <button className="text-white md:w-0 transition-all">
                    <Icon icon={"charm:menu-hamburger"} width="50" onClick={()=> open?setOpen():setOpen(true)}/>
                </button>
            </div>

            {/* MOBILE VERSION MODAL */}
            <div  className={`z-[500] absolute overflow-hidden transition-all duration-[800ms] top-0 right-0 ${open?'w-full h-full opacity-100':'w-0 h-0 opacity-0'} bg-gradient bg-cover bg-no-repeat`}>
                <button className="absolute top-2 right-2 text-white" onClick={()=>setOpen()}>
                    <Icon icon={"ph:x-circle-bold"} width="50"/>
                </button>
                <nav className="flex flex-col items-center text-gray-200 text-lg justify-between transition-all" onClick={()=>{
                    // setTimeout(()=>{
                    //     setOpen()
                    // },100)
                }}>
                    <HeaderNavTab path="/" title="home" onClick={() => {setOpen()}}/>
                    <HeaderNavTab path="/origins" title="origins" onClick={() => {setOpen()}}/>
                    <HeaderNavMultiTab path="/concept" title="concept" tabs={experimentsMultiTab} setNavOpen={setOpen} />
                    <HeaderNavMultiTab path="/depthfullness" title="Explore" tabs={exploreMultiTab} setNavOpen={setOpen}/>
                    <HeaderNavTab path="/applications" title="applications" onClick={() => {setOpen()}}/>
                    <HeaderNavTab path="/videos" title="videos" onClick={() => {setOpen()}}/>
                    <HeaderNavTab path="/experience" title="experience SI" onClick={() => {setOpen()}}/>
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