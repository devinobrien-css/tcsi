import { Icon } from "@iconify/react"
import { useState } from "react"

/** Standard text section for paragraphs
 * @param {React.Component.jsx} children jsx component or string
 * @param {String} className list of additional classes
 * @returns a paragraph styled text section
 */
export const Section = ({className,children,...rest}) => {
    return (
        <div className={`w-11/12 sm:w-8/12 md:w-1/2 mx-auto my-4 ${className}`} {...rest}>
            {children}
        </div>
    )
}

/** Standard text section for paragraphs
 * @param {React.Component.jsx} children jsx component or string
 * @param {String} className list of additional classes
 * @returns a paragraph styled text section
 */
export const TextSection = ({children,className,...rest}) => {
    return (
        <p 
            className={`text-justify font-roboto text-md font-light ${className}`}
            {...rest}
        >
            {children}
        </p>
    )
}

export const ExpandableTextSection = ({children,className,...rest}) => {
    const [open,setOpen] = useState(false)
    return (
        <p 
            onClick={()=>open?setOpen():setOpen(true)}
            className={`text-justify font-roboto text-md font-light flex flex-col ${className}`}
            {...rest}
        >
            <span className={`transition-all transform ${open ? 'h-32' : 'h-0 overflow-clip'}`}>
                {children}
            </span>
            <span className={`cursor-pointer text-tcsi-yellow`}>{open ? 'click to read less...' : 'click to read more...'}</span>
        </p>
    )
}


/**
 * @param {*} param0 
 * @returns 
 */
export const InputMd = ({className,children,...rest}) => {
    return (
        <input 
            className={`w-full focus:outline-none focus:ring focus:ring-tcsi-dark-green border-tcsi-dark-green rounded border-b-2 px-4 py-2 my-2 ${className}`}
            placeholder={children}
            {...rest}
        />
    )
}

/**
 * @param {*} param0 
 * @returns 
 */
 export const TextAreaMd = ({className,children,...rest}) => {
    return (
        <textarea 
            className={`w-full focus:outline-none focus:ring focus:ring-tcsi-dark-green border-tcsi-dark-green rounded border-b-2 px-4 py-2 my-2 ${className}`}
            placeholder={children}
            {...rest}
        />
    )
}


/** Outlined section header
 * @param {React.Component.jsx} children jsx component or string
 * @param {String} className list of additional classes
 * @returns a header component
 */
export const OutlinedHeader = ({children,className,...rest}) => {
    return (
        <p 
            style={{WebkitTextFillColor:"transparent",WebkitTextStroke:"1px"}}
            className={`uppercase font-roboto md:text-6xl text-4xl text-gray-300 ${className}`}
            {...rest}
        >
            {children}
        </p>
    )
}

/** Standard section header
 * @param {React.Component.jsx} children jsx component or string
 * @param {String} className list of additional classes
 * @returns a header component
 */
 export const SectionHeader = ({children,className,...rest}) => {
    return (
        <p 
            className={`text-3xl md:text-3xl font-light font-roboto ${className}`}
            {...rest}
        >
            {children}
        </p>
    )
}

/** Standard section sub header
 * @param {React.Component.jsx} children jsx component or string
 * @param {String} className list of additional classes
 * @returns a header component
 */
export const SectionSubHeader = ({children,className,...rest}) => {
    return (
        <p 
            className={`text-xl font-medium mt-4 font-roboto ${className}`}
            {...rest}
        >
            {children}
        </p>
    )
}

/** Italic sub header
 * @param {React.Component.jsx} children jsx component or string
 * @param {String} className list of additional classes
 * @returns a header component
 */
export const ItalicSubHeader = ({children,className,...rest}) => {
    return (
        <p 
            className={`text-md font-light font-roboto italic ${className}`}
            {...rest}
        >
            {children}
        </p>
    )
}

export const RedButton = ({className,children,...rest}) => {
    return (
        <button className={`bg-red-500 text-white p-4 rounded-lg ${className} hover:scale-105 hover:bg-red-400 transition-all transform`} {...rest}>
            {children}
        </button>
    )
}

/** Standard section note
 * @param {React.Component.jsx} children jsx component or string
 * @param {String} className list of additional classes
 * @returns a footnote component
 */
export const Note = ({children,className,...rest}) => {
    return (
        <p
            className={`relative rounded bg-gray-300 bg-opacity-30 my-2 py-2 shadow-xl  ${className}`}
            {...rest}
        >
            <div className="absolute h-full bg-tcsi-lightblue w-3 rounded-xl top-0 "></div>
            <span className="pl-4 text-gray-700 font-lato">
                {children}
            </span>
        </p>
    )
}

/** Standard inline link
 * @param {React.Component.jsx} children jsx component or string
 * @param {String} className list of additional classes
 * @returns a link component
 */
export const Hyperlink = ({to,children,className,...rest}) => {
    
    return(
        <a
            href={to}
            className={`underline bold text-blue-600 cursor-pointer hover:text-blue-400 transition-colors px-1 ${className}`}
            target="_blank"
            rel="noreferrer"
            {...rest}
        >
            {children}
        </a>
    )
}

/** Website link wrapper
 * @param {React.Component.jsx} children jsx component or string
 * @param {String} className list of additional classes
 * @returns a link component
 */
export const WebsiteLink = ({to,children,className,...rest}) => {
    
    return(
        <a
            href={to}
            className={`${className}`}
            target="_blank"
            rel="noreferrer"
            {...rest}
        >
            {children}
        </a>
    )
}


export const VideoAdSm = ({className,children,href,embed,...rest}) => {
    return (
        <a href={href} target="_blank" rel="noreferrer" {...rest} className={`bg-white block h-min rounded-lg overflow-clip hover:scale-105 transition-all transform cursor-pointer ${className}`}>
            <object data={embed} width='100%' >
            </object>
            <p className="p-2 font-lato text-gray-700 text-center">{children}</p>
        </a>
    )
}

export const BulletList = ({className,children}) => {
    return (
        <ul className={`list-disc w-5/6 mx-auto ${className}`}>
            {children}
        </ul>
    )
}

export const BulletPoint = ({children}) => {
    return (
        <li className="font-roboto font-light">{children}</li>
    )
}


export const DonationButton = () => {
    return (
        <div>
            <a 
                href="https://www.paypal.com/donate/?hosted_button_id=2CEQEM5YVDZ2N&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWxvYmplY3RzLmNvbS9kb25hdGUvc2RrL2RvbmF0ZS1zZGsuanMiLCJhdHRycyI6eyJkYXRhLXVpZCI6IjBhZDVkMzA0ZjBfbWRlNm5kbTZuZHEifX0&targetMeta=eyJ6b2lkVmVyc2lvbiI6IjlfMF81OCIsInRhcmdldCI6IkRPTkFURSIsInNka1ZlcnNpb24iOiIwLjguMCJ9"
                target="_blank"
                rel="noreferrer"
                className="flex shadow-lg border rounded p-2 w-4/5 md:w-1/2 mx-auto hover:scale-105 transform transition-all cursor-pointer"
            >
                <Icon icon="logos:paypal" width="50" className="my-auto"/>
                <p className="font-light text-lg p-1 text-center">Click here to donate on Paypal</p>
            </a>
        </div>
    )
}