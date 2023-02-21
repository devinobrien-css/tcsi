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

export const CenterNav = () => {
    const navigate = useNavigate()

    return(
        <div className="flex justify-between w-full p-2">
            <TCSI 
                className="w-[15%]" 
                onClick={() => {
                    navigate('/about')
                }}
            />

            <nav className={`flex text-gray-700 text-lg justify-end transition-all duration-1400`}>
                <NavTab path="/about" title="about" icon="tabler:info-square" />
                <NavTab path="/panels" title="panels" icon="carbon:machine-learning-model"  />
                <NavTab path="/articles" title="articles" icon="ph:books-duotone" />
                <NavMultiTab path="/contributing" title="concept" tabs={contributionsMultiTab}/>
                <NavTab path="/contact" title="contact" icon="tabler:message-circle" />
            </nav>
        </div>
    )
}