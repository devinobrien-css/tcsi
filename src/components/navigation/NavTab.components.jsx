import { Icon } from "@iconify/react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"


export const NavTab = ({className,path,title,...rest}) => {
    const location = useLocation()

    return (
        <Link className="h-full group" to={path} >
            <div {...rest} className={`capitalize my-auto [&>*]:my-auto p-4 group-hover:border-red-500 font-extralight transform transition-all border-b-4 ${className} ${path===location.pathname?" border-tcsi-yellow":"border-transparent"}`}>
                <span>{title}</span>
            </div>
        </Link>
    )
}


export const NavMultiTab = ({className,title,tabs}) => {
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
                className={`h-full my-auto capitalize relative cursor-pointer border-b-4 ${className} ${location.pathname.startsWith(title)?" border-orange-500":"border-transparent"}`} 
                onClick={() => {
                    if(open) setOpen()
                    else setOpen(true)
                }}
            >
                <div className="flex h-full w-max [&>*]:my-auto group p-4">
                    <p className={`pr-2 group-hover:border-red-500 transform transition-all font-extralight`}>{title}</p>
                    <Icon icon={(open?"material-symbols:expand-circle-down-outline-rounded":"material-symbols:expand-circle-down-rounded")} className={`transition-all ${(open?"":"rotate-180")}`} />
                </div>
                <div className={`z-[601] rounded-b-lg bg-gray-300 bg-opacity-20 absolute overflow-hidden whitespace-nowrap w-fit min-w-full left-0 top-[105%] transition-all ${open?`h-[${100*tabs.length}%]`:'h-[0%]'}`}>
                    <div className="backdrop-blur-lg bg-white bg-opacity-50">
                        {tabs.map((tab,index) => <NavTab className={``} onClick={() => {
                            navigate(tabs[index].path)
                        }} key={`multitab-${tab.title}-${index}`} path={tab.path} title={tab.title}/>)}
                    </div>
                </div>
            </button>
        </>
    )
}