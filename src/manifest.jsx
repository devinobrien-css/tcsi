/*
 Metadata for the application
--------------------------------
 Index:
   I. Router
   II. Concept Page Tabs 
*/

import { createBrowserRouter, useLocation } from "react-router-dom";
import Videos from "./pages/Videos.page";
import Concept from "./pages/Concept.page";
import Error from "./pages/Error.page";
import Origins from "./pages/Origins.page";
import Applications from "./pages/Applications.page";
import { TierOne } from "./pages/Concept.library/tierOne.component";
import { TierTwo } from "./pages/Concept.library/tierTwo.component";
import { TierThree } from "./pages/Concept.library/tierThree.component";
import { TierOneSVG, TierThreeSVG, TierTwoSVG } from "./resources/svg/conceptSVG.library";

import About from "./pages/About.page";
import Panels from "./pages/Panels.page";
import Contributing from "./pages/Contributing.page";
import Contact from "./pages/Contact.page";
import Publications from "./pages/Publications.page";
import Donations from "./pages/Donations.page";
import Research from "./pages/Research.page";
import Volunteering from "./pages/Volunteering.page";
import Depthfullness from "./pages/Depthfullness.page";
import Socioneurological from "./pages/Socioneurological.page";
import Components from "./pages/Components.page";
import Experience from "./pages/Experience.page";
import AboutConcept from "./pages/AboutConcept.page";
import Home from "./pages/Home.page";
import Nav from "./components/navigation/Nav";
import Mission from "./pages/Mision.page";
import Board from "./pages/Board.page";
import PolicePanel from "./pages/PanelPolice.page";
import ArtsPanel from "./pages/PanelArts.page";
import HealthcarePanel from "./pages/PanelHealthcare.page";
import PanelMembers from "./pages/PanelMembers.page";
import EducationPanel from "./pages/PanelEducation.page";
import Center from "./pages/Center.page";
import Examples from "./pages/Examples.page";


const RenderPage = ({children,type}) => {
    const location = useLocation();

    return (
        <div className={`transition-colors duration-1000 min-h-screen h-[100%] overflow-y-scroll ${type==="concept"?"bg-cover bg-gradient bg-no-repeat":"bg-concert bg-no-repeat bg-contain bg-tcsi-dark-green"}`}>
            <div className="overflow-hidden">
                {location.pathname === "/"?<></>:<Nav  type={type}/>}
            </div>
            {children}
        </div>
    )
}

/** Browser Router - path and page references
 */
export const router = createBrowserRouter([
    {
        path: "/",
        element: <RenderPage type="concept"><Home/></RenderPage>,
        errorElement:<Error />,
    },
    {
        path: "/center-home",
        element: <RenderPage><Center/></RenderPage>,
        errorElement:<Error />,
    },
    {
        path: "about",
        element:<RenderPage><About/></RenderPage>,
        children:[
            {
                path: "/about/mission",
                element: <Mission />,
            },
            {
                path: "/about/board",
                element: <Board />,
            }
        ],
        errorElement:<Error />,
    },
    {
        path: "panels",
        element:<RenderPage><Panels/></RenderPage>,
        children:[
            {
                path: "/panels/police",
                element: <PolicePanel />,
            },
            {
                path: "/panels/arts",
                element: <ArtsPanel />,
            },
            {
                path: "/panels/education",
                element: <EducationPanel />,
            },
            {
                path: "/panels/healthcare",
                element: <HealthcarePanel />,
            },
            {
                path: "/panels/members",
                element: <PanelMembers />,
            }
        ],
        errorElement:<Error />,
    },
    {
        path: "about-concept",
        element:<RenderPage type="concept"><AboutConcept/></RenderPage>,
        errorElement:<Error />,
    },
    {
        path: "contributing",
        element:<RenderPage><Contributing/></RenderPage>,
        children:[
            {
                path: "/contributing/donations",
                element: <Donations />,
            },
            {
                path: "/contributing/research",
                element: <Research />,
            },
            {
                path: "/contributing/volunteering",
                element: <Volunteering />,
            }
        ],
        errorElement:<Error />,
    },
    {
        path: "publications",
        element:<RenderPage><Publications/></RenderPage>,
        errorElement:<Error />,
    },
    {
        path: "contact",
        element:<RenderPage><Contact/></RenderPage>,
        errorElement:<Error />,
    },
    {
        path: "panels",
        element:<RenderPage><Panels/></RenderPage>,
        errorElement:<Error />,
    },
    {
        path: "depthfullness",
        element:<RenderPage type="concept"><Depthfullness/></RenderPage>,
        errorElement:<Error />,
    },
    {
        path: "examples",
        element:<RenderPage type="concept"><Examples/></RenderPage>,
        errorElement:<Error />,
    },
    {
        path: "Socio-Neurological",
        element:<RenderPage type="concept"><Socioneurological/></RenderPage>,
        errorElement:<Error />,
    },
    {
        path: "Components",
        element:<RenderPage type="concept"><Components/></RenderPage>,
        errorElement:<Error />,
    },
    {
        path: "origins",
        element: <RenderPage type="concept"><Origins/></RenderPage>,
        errorElement:<Error />,
    },
    {
        path: "concept",
        element: <RenderPage type="concept"><Concept/></RenderPage>,
        children:[
            {
                path: "/concept/:tier",
                element: <></>,
            }
        ],
        errorElement:<Error />,
    },
    {
        path: "applications",
        element: <RenderPage type="concept"><Applications/></RenderPage>,
        errorElement:<Error />,
    },
    {
        path: "videos",
        element: <RenderPage type="concept"><Videos/></RenderPage>,
        errorElement:<Error />,
    },
    {
        path: "experience",
        element: <RenderPage type="concept"><Experience/></RenderPage>,
        errorElement:<Error />,
    },
    {
        path: "donations",
        element: <RenderPage><Donations/></RenderPage>,
        errorElement:<Error />,
    },
]);

/** Tab navigation for the Concept page
 */
export const tierReferences = {
    'tier1':{
        page: TierOne,
        svg: TierOneSVG,
        bgColor:'bg-tcsi-yellow',
        textColor:'text-black',
    },
    'tier2':{
        page: TierTwo,
        svg: TierTwoSVG,
        bgColor:'bg-tcsi-green',
        textColor:'text-black',
    },
    'tier3':
    {
        page:TierThree,
        svg:TierThreeSVG,
        bgColor:'bg-tcsi-navy',
        textColor:'text-white',
    }
}