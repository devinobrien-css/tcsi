import { useNavigate } from "react-router-dom"
import { tierReferences } from "../../manifest"

/** Tier button
 * @returns a styled tier button
 */
export const TierButton = ({children,tab,tier}) => {
    const navigate = useNavigate()

    return (
        <button 
            className={`rounded-tl rounded-tr w-1/3 p-1 text-sm md:p-2 text-md font-lato border border-transparent hover:bg-white hover:bg-opacity-30 transition-all ${tab===tier?`${tierReferences[tier].bgColor} ${tierReferences[tier].textColor}`:'text-white'}`}
            onClick={() => {
                navigate(tier)
            }}
        >{children}</button>
    )
}