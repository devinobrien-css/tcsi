export const Section = ({className,children,...rest}) => {
    return (
        <div className={`w-10/12 sm:w-8/12 md:w-1/2 mx-auto my-4 ${className}`} {...rest}>
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
            className={`text-justify font-roboto ${className}`}
            {...rest}
        >
            {children}
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
            className={`text-3xl md:text-4xl font-light mt-4 font-roboto ${className}`}
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
export const SectionSubHeader = ({children,className,...rest}) => {
    return (
        <p 
            className={`text-2xl font-bold mt-4 font-roboto ${className}`}
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
            className={`underline bold text-gray-200 hover:text-blue-300 transition-colors px-1 ${className}`}
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

