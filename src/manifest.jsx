/*
 Metadata for the application
--------------------------------
 Index:
   I. Router
   II. Concept Page Tabs 
*/

import { createBrowserRouter } from "react-router-dom";
import Videos from "./pages/Videos.page";
import Concept from "./pages/Concept.page";
import Error from "./pages/Error.page";
import Origins from "./pages/Origins.page";
import Applications from "./pages/Applications.page";
import { TierOne } from "./pages/Concept.library/tierOne.component";
import { TierTwo } from "./pages/Concept.library/tierTwo.component";
import { TierThree } from "./pages/Concept.library/tierThree.component";
import { TierOneSVG, TierThreeSVG, TierTwoSVG } from "./resources/svg/conceptSVG.library";
import Home from "./pages/Home.page";
import HeaderNav from "./components/headerNav.component";
import SideNav from "./components/sideNav.component";
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
import Experiments from "./pages/Experiments.page";

const RenderPage = ({children,type}) => {
    return (
        <div className={`transition-colors duration-1000 h-screen overflow-y-scroll ${type==="concept"?"bg-gradient bg-cover bg-no-repeat":"bg-concert bg-no-repeat bg-contain bg-tcsi-dark-green"}`}>
            <HeaderNav />
            <SideNav />
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
        path: "about",
        element:<RenderPage><About/></RenderPage>,
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
        path: "Depthfullness",
        element:<RenderPage type="concept"><Depthfullness/></RenderPage>,
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
        path: "experiments",
        element: <RenderPage type="concept"><Experiments/></RenderPage>,
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