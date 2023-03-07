import { NavMultiTab, NavTab } from "./NavTab.components"
import { TCSI } from "../../resources/svg/tcsiSVG.library"
import { useNavigate } from "react-router-dom"

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

export const CenterNav = ({Burger}) => {
    const navigate = useNavigate()

    return(
        <div className="flex justify-between w-full p-2">
            <TCSI 
                className="w-1/3 md:w-[15%]" 
                onClick={() => {
                    navigate('/about')
                }}
            />

            <nav className={`md:flex hidden text-gray-700 text-lg justify-end transition-all duration-1400`}>
                <NavMultiTab path="/about" title="about" tabs={aboutMultiTab}/>
                <NavTab path="/panels" title="panels" icon="carbon:machine-learning-model"  />
                <NavTab path="/publications" title="publications" icon="ph:books-duotone" />
                <NavMultiTab path="/contributing" title="contributing" tabs={contributionsMultiTab}/>
                <NavTab path="/contact" title="contact" icon="tabler:message-circle" />
            </nav>

            <Burger />
        </div>
    )
}