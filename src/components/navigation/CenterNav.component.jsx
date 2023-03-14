import { NavMultiTab, NavTab } from "./NavTab.components"
import { TCSI } from "../../resources/svg/tcsiSVG.library"
import { useNavigate } from "react-router-dom"
import { Icon } from "@iconify/react"

const contributionsMultiTab = [
    {
        title:"Contributing",
        path:"/contributing"
    },
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

const aboutMultiTab = [
    {
        title:"About",
        path:"/about"
    },
    {
        title:"Mission",
        path:"/about/mission"
    },
    {
        title:"Board of Directors",
        path:"/about/board"
    }
]

const panelsMultiTab = [
    {
        title:"Panels",
        path:"/panels"
    },
    {
        title:"Education Panel",
        path:"/panels/education"
    },
    {
        title:"Arts Panel",
        path:"/panels/arts"
    },
    {
        title:"Police Panel",
        path:"/panels/police"
    },
    {
        title:"Healthcare Panel",
        path:"/panels/healthcare"
    },
    {
        title:"Panel Members",
        path:"/panels/members"
    }
]

export const CenterNav = ({Burger}) => {
    const navigate = useNavigate()

    return(
        <div className="flex justify-between w-full p-2">
            <TCSI 
                className="w-1/2 md:w-[15%]" 
                onClick={() => {
                    navigate('/center-home')
                }}
            />

            <nav className={`md:flex hidden text-gray-700 text-lg justify-end transition-all duration-1400`}>
                <Icon icon="ion:home-sharp"  className="my-auto" onClick={()=>navigate('/center-home')}/>
                <NavMultiTab path="/about" title="about" tabs={aboutMultiTab}/>
                <NavMultiTab path="/panels" title="panels" tabs={panelsMultiTab}/>
                <NavTab path="/publications" title="publications"/>
                <NavMultiTab path="/contributing" title="contributing" tabs={contributionsMultiTab}/>
                <NavTab path="/contact" title="contact"/>
            </nav>

            <Burger />
        </div>
    )
}