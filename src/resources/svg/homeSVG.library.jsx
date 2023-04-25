import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const MainSVG = ({tier,setTier,setHover}) => {
    const navigate = useNavigate()
    const [title,setTitle] = useState("Explore")

    function setClick(current) {
        navigate(`/concept/tier${tier}`);
        setTier(current)
        setHover()
    }
    

    return (
        <>
            <p className="transition-all -mb-8 font-roboto text-center text-white text-4xl uppercase" style={{WebkitTextFillColor:"transparent",WebkitTextStroke:"1px"}}> {title}</p>
            <svg viewBox="0 0 500 500" onMouseLeave={()=>setTitle('Explore')}>
                <g className="scale-50">
                    <path className="fill-white" d="M252.7,227.1c14.1,0,25.6,11.5,25.6,25.6c0,14.1-11.5,25.6-25.6,25.6c-14.1,0-25.6-11.5-25.6-25.6    C227.1,238.6,238.6,227.1,252.7,227.1 M252.7,226.1c-14.7,0-26.6,11.9-26.6,26.6s11.9,26.6,26.6,26.6s26.6-11.9,26.6-26.6    S267.4,226.1,252.7,226.1L252.7,226.1z"/>
                    <path className="fill-white" d="M252.7,198.8c29.7,0,53.9,24.2,53.9,53.9s-24.2,53.9-53.9,53.9s-53.9-24.2-53.9-53.9S223,198.8,252.7,198.8     M252.7,197.8c-30.3,0-54.9,24.6-54.9,54.9s24.6,54.9,54.9,54.9s54.9-24.6,54.9-54.9S283,197.8,252.7,197.8L252.7,197.8z"/>
                    <path className="fill-white" d="M252.7,170.6c45.3,0,82.1,36.8,82.1,82.1s-36.8,82.1-82.1,82.1s-82.1-36.8-82.1-82.1S207.4,170.6,252.7,170.6     M252.7,169.6c-45.9,0-83.1,37.2-83.1,83.1s37.2,83.1,83.1,83.1s83.1-37.2,83.1-83.1S298.6,169.6,252.7,169.6L252.7,169.6z"/>
                    <path className="fill-white" d="M252.7,142.3c29.5,0,57.2,11.5,78.1,32.3c20.8,20.8,32.3,48.6,32.3,78.1s-11.5,57.2-32.3,78.1    c-20.8,20.8-48.6,32.3-78.1,32.3s-57.2-11.5-78.1-32.3c-20.8-20.8-32.3-48.6-32.3-78.1s11.5-57.2,32.3-78.1    S223.2,142.3,252.7,142.3 M252.7,141.3c-61.5,0-111.4,49.9-111.4,111.4s49.9,111.4,111.4,111.4s111.4-49.9,111.4-111.4    S314.2,141.3,252.7,141.3L252.7,141.3z"/>
                    <path className="fill-white" d="M252.7,114c37,0,71.8,14.4,98,40.6c26.2,26.2,40.6,61,40.6,98s-14.4,71.8-40.6,98c-26.2,26.2-61,40.6-98,40.6    s-71.8-14.4-98-40.6c-26.2-26.2-40.6-61-40.6-98s14.4-71.8,40.6-98S215.7,114,252.7,114 M252.7,113C175.6,113,113,175.6,113,252.7    s62.5,139.6,139.6,139.6s139.6-62.5,139.6-139.6S329.8,113,252.7,113L252.7,113z"/>
                    <path className="fill-white" d="M252.7,85.8c44.6,0,86.5,17.4,118,48.9s48.9,73.4,48.9,118s-17.4,86.5-48.9,118s-73.4,48.9-118,48.9    s-86.5-17.4-118-48.9s-48.9-73.4-48.9-118s17.4-86.5,48.9-118S208.1,85.8,252.7,85.8 M252.7,84.8C160,84.8,84.8,160,84.8,252.7    S160,420.6,252.7,420.6s167.9-75.2,167.9-167.9S345.4,84.8,252.7,84.8L252.7,84.8z"/>
                    <path className="fill-white" d="M252.7,57.5c26.3,0,51.9,5.2,76,15.3c23.2,9.8,44.1,23.9,62,41.8c17.9,17.9,32,38.8,41.8,62    c10.2,24.1,15.3,49.6,15.3,76s-5.2,51.9-15.3,76c-9.8,23.2-23.9,44.1-41.8,62c-17.9,17.9-38.8,32-62,41.8    c-24.1,10.2-49.6,15.3-76,15.3s-51.9-5.2-76-15.3c-23.2-9.8-44.1-23.9-62-41.8c-17.9-17.9-32-38.8-41.8-62    c-10.2-24.1-15.3-49.6-15.3-76s5.2-51.9,15.3-76c9.8-23.2,23.9-44.1,41.8-62c17.9-17.9,38.8-32,62-41.8    C200.8,62.7,226.3,57.5,252.7,57.5 M252.7,56.5c-108.3,0-196.2,87.8-196.2,196.2s87.8,196.2,196.2,196.2S448.8,361,448.8,252.7    S361,56.5,252.7,56.5L252.7,56.5z"/>
                    <path className="fill-white" d="M252.7,29.3c30.2,0,59.4,5.9,87,17.6c26.6,11.3,50.5,27.4,71,47.9c20.5,20.5,36.6,44.4,47.9,71    c11.7,27.5,17.6,56.8,17.6,87s-5.9,59.4-17.6,87c-11.3,26.6-27.4,50.5-47.9,71c-20.5,20.5-44.4,36.6-71,47.9    c-27.5,11.7-56.8,17.6-87,17.6s-59.4-5.9-87-17.6c-26.6-11.3-50.5-27.4-71-47.9c-20.5-20.5-36.6-44.4-47.9-71    c-11.7-27.5-17.6-56.8-17.6-87s5.9-59.4,17.6-87c11.3-26.6,27.4-50.5,47.9-71c20.5-20.5,44.4-36.6,71-47.9    C193.3,35.2,222.5,29.3,252.7,29.3 M252.7,28.3c-123.9,0-224.4,100.5-224.4,224.4s100.5,224.4,224.4,224.4    s224.4-100.5,224.4-224.4S376.6,28.3,252.7,28.3L252.7,28.3z"/>
                    <path className="fill-white" d="M252.7,1c34,0,66.9,6.7,98,19.8c30,12.7,56.9,30.8,80,53.9s41.3,50,53.9,80c13.1,31,19.8,64,19.8,98    s-6.7,66.9-19.8,98c-12.7,30-30.8,56.9-53.9,80s-50,41.3-80,53.9c-31,13.1-64,19.8-98,19.8s-66.9-6.7-98-19.8    c-30-12.7-56.9-30.8-80-53.9s-41.3-50-53.9-80c-13.1-31-19.8-64-19.8-98s6.7-66.9,19.8-98c12.7-30,30.8-56.9,53.9-80    s50-41.3,80-53.9C185.7,7.7,218.7,1,252.7,1 M252.7,0C113.1,0,0,113.1,0,252.7s113.1,252.7,252.7,252.7s252.7-113.1,252.7-252.7    S392.2,0,252.7,0L252.7,0z"/>
                </g>
                
                <g transform="translate(250,250)">
                    <g onClick={() => setClick(3)} onMouseEnter={()=>setHover(3)} onMouseLeave={()=>setHover()}>
                        <g className="group" onMouseEnter={() => setTitle('work')}>
                            <circle fill="#390052" r="204.54545454545453" className={`stroke-1 stroke-white transition-all group-hover:opacity-100 ${tier===3?'opacity-100':'opacity-40'}`}></circle>
                            <g transform="translate(102.27272727272724,-177.1415598649988)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(177.14155986499878,-102.27272727272727)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(204.54545454545453,0)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(177.1415598649988,102.27272727272724)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(102.27272727272724,177.1415598649988)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(1.2524796809461565e-14,204.54545454545453)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-102.27272727272731,177.14155986499878)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-177.14155986499878,102.27272727272734)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-204.54545454545453,2.504959361892313e-14)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-177.14155986499878,-102.2727272727273)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-102.27272727272735,-177.14155986499875)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                        </g>
                        <g className="group" onMouseEnter={() => setTitle('learn')}>
                            <circle fill="#390052" r="181.8181818181818" className={`stroke-1 stroke-white transition-all group-hover:opacity-100 ${tier===3?'opacity-100':'opacity-40'}`}></circle>
                            <g transform="translate(90.90909090909089,-157.4591643244434)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(157.45916432444338,-90.9090909090909)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(181.8181818181818,0)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(157.4591643244434,90.90909090909088)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(90.90909090909089,157.4591643244434)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(1.1133152719521393e-14,181.8181818181818)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-90.90909090909095,157.45916432444338)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-157.45916432444335,90.90909090909096)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-181.8181818181818,2.2266305439042785)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-157.45916432444338,-90.90909090909092)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-90.90909090909099,-157.45916432444335)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                        </g>
                        <g className="group" onMouseEnter={() => setTitle('live')}>
                            <circle fill="#390052" r="159.09090909090907" className={`stroke-1 stroke-white transition-all group-hover:opacity-100 ${tier===3?'opacity-100':'opacity-40'}`}></circle>
                            <g transform="translate(79.54545454545452,-137.77676878388795)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(137.77676878388795,-79.54545454545453)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(159.09090909090907,0)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(137.77676878388795,79.5454545454545)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(79.54545454545452,137.77676878388795)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(9.741508629581217e-15,159.09090909090907)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-79.54545454545456,137.77676878388795)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-137.77676878388792,79.54545454545459)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-159.09090909090907,1.9483017259162434e-14)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-137.77676878388795,-79.54545454545455)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-79.5454545454546,-137.7767687838879)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                        </g>
                    </g>
                    <g onClick={() => setClick(2)} onMouseEnter={()=>setHover(2)} onMouseLeave={()=>setHover()}>
                        <g className="group" onMouseEnter={() => setTitle('bond')}>
                            <circle fill="#a4df53" r="136.36363636363635" className={`stroke-1 stroke-white transition-all group-hover:opacity-100 ${tier===2?'opacity-100':'opacity-40'}`}></circle>
                            <g transform="translate(68.18181818181816,-118.09437324333254)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(118.09437324333253,-68.18181818181817)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(136.36363636363635,0)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(118.09437324333254,68.18181818181814)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(68.18181818181816,118.09437324333254)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(8.349864539641044e-15,136.36363636363635)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-68.1818181818182,118.09437324333253)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-118.0943732433325,68.18181818181822)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-136.36363636363635,1.6699729079282088e-14)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-118.09437324333253,-68.18181818181819)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-68.18181818181823,-118.09437324333248)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                        </g>
                        <g className="group" onMouseEnter={() => setTitle('connect')}>
                            <circle fill="#a4df53" r="113.63636363636363" className={`stroke-1 stroke-white transition-all group-hover:opacity-100 ${tier===2?'opacity-100':'opacity-40'}`}></circle>
                            <g transform="translate(56.8181818181818,-98.41197770277712)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all">
                                </circle>
                            </g>
                            <g transform="translate(98.41197770277711,-56.81818181818181)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(113.63636363636363,0)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(98.41197770277712,56.81818181818179)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(56.8181818181818,98.41197770277712)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(6.95822044970087e-15,113.63636363636363)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-56.81818181818184,98.41197770277711)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-98.4119777027771,56.81818181818185)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-113.63636363636363,1.391644089940174e-14)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-98.41197770277711,-56.81818181818183)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-56.81818181818186,-98.41197770277708)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                        </g>
                        <g className="group" onMouseEnter={() => setTitle('match')}>
                            <circle fill="#a4df53" r="90.9090909090909" className={`stroke-1 stroke-white transition-all group-hover:opacity-100 ${tier===2?'opacity-100':'opacity-40'}`}></circle>
                            <g transform="translate(45.454545454545446,-78.7295821622217)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(78.72958216222169,-45.45454545454545)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(90.9090909090909,0)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(78.7295821622217,45.45454545454544)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(45.454545454545446,78.7295821622217)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(5.566576359760696e-15,90.9090909090909)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-45.454545454545475,78.72958216222169)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-78.72958216222167,45.45454545454548)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-90.9090909090909,1.1133152719521393e-14)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-78.72958216222169,-45.45454545454546)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-45.454545454545496,-78.72958216222167)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                        </g>
                    </g>
                    <g onClick={() => setClick(1)} onMouseEnter={()=>setHover(1)} onMouseLeave={()=>setHover()}>
                        <g className="group" onMouseEnter={() => setTitle('emotion')}>
                            <circle fill="#fee201" r="68.18181818181817" className={`stroke-1 stroke-white transition-all group-hover:opacity-100 ${tier===1?'opacity-100':'opacity-40'}`}></circle>
                            <g transform="translate(34.09090909090908,-59.04718662166627)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(59.04718662166626,-34.090909090909086)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(68.18181818181817,0)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(59.04718662166627,34.09090909090907)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(34.09090909090908,59.04718662166627)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(4.174932269820522e-15,68.18181818181817)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-34.0909090909091,59.04718662166626)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-59.04718662166625,34.09090909090911)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-68.18181818181817,8.349864539641044e-15)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-59.04718662166626,-34.09090909090909)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-34.090909090909115,-59.04718662166624)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                        </g>
                        <g className="group" onMouseEnter={() => setTitle('cognition')}>
                            <circle fill="#fee201" r="45.45454545454545" className={`stroke-1 stroke-white transition-all group-hover:opacity-100 ${tier===1?'opacity-100':'opacity-40'}`}></circle>
                            <g transform="translate(22.727272727272723,-39.36479108111085)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(39.364791081110845,-22.727272727272727)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(45.45454545454545,0)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(39.36479108111085,22.72727272727272)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(22.727272727272723,39.36479108111085)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(2.783288179880348e-15,45.45454545454545)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-22.727272727272737,39.364791081110845)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-39.36479108111084,22.72727272727274)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-45.45454545454545,5.566576359760696e-15)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-39.364791081110845,-22.72727272727273)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-22.727272727272748,-39.36479108111084)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                        </g>
                        <g className="group" onMouseEnter={() => setTitle('instinct')}>
                            <circle fill="#fee201" r="22.727272727272727" className={`stroke-1 stroke-white transition-all group-hover:opacity-100 ${tier===1?'opacity-100':'opacity-40'}`}></circle>
                            <g transform="translate(11.363636363636362,-19.682395540555426)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(19.682395540555422,-11.363636363636363)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(22.727272727272727,0)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(19.682395540555426,11.36363636363636)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(11.363636363636362,19.682395540555426)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(1.391644089940174e-15,22.727272727272727)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-11.363636363636369,19.682395540555422)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-19.68239554055542,11.36363636363637)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-22.727272727272727,2.783288179880348e-15)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-19.682395540555422,-11.363636363636365)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                            <g transform="translate(-11.363636363636374,-19.68239554055542)">
                                <circle r="5" className="fill-white opacity-0 group-hover:opacity-100 transition-all"></circle>
                            </g>
                        </g>
                    </g>
                </g>
                <path className="stroke-1 stroke-white" markerEnd="url(#my-arrow)" d="M250,40L250,35"></path>
                <defs>
                    <marker id="my-arrow" refX="15" refY="8" markerWidth="17" markerHeight="16" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                        <path d="M 1 1 Q 7 5 16 8 Q 7 11 1 15 L 4 8 Z" className="fill-white stroke-white"></path>
                    </marker>
                </defs>
            </svg>
        </>
    )
}


export const WhiteCirclesSVG = ({className,...rest}) => {
    return (
        <svg viewBox="0 0 500 500" className={`${className}`} {...rest}>
            <g className="scale-50">
                <path className="fill-white" d="M252.7,227.1c14.1,0,25.6,11.5,25.6,25.6c0,14.1-11.5,25.6-25.6,25.6c-14.1,0-25.6-11.5-25.6-25.6    C227.1,238.6,238.6,227.1,252.7,227.1 M252.7,226.1c-14.7,0-26.6,11.9-26.6,26.6s11.9,26.6,26.6,26.6s26.6-11.9,26.6-26.6    S267.4,226.1,252.7,226.1L252.7,226.1z"/>
                <path className="fill-white" d="M252.7,198.8c29.7,0,53.9,24.2,53.9,53.9s-24.2,53.9-53.9,53.9s-53.9-24.2-53.9-53.9S223,198.8,252.7,198.8     M252.7,197.8c-30.3,0-54.9,24.6-54.9,54.9s24.6,54.9,54.9,54.9s54.9-24.6,54.9-54.9S283,197.8,252.7,197.8L252.7,197.8z"/>
                <path className="fill-white" d="M252.7,170.6c45.3,0,82.1,36.8,82.1,82.1s-36.8,82.1-82.1,82.1s-82.1-36.8-82.1-82.1S207.4,170.6,252.7,170.6     M252.7,169.6c-45.9,0-83.1,37.2-83.1,83.1s37.2,83.1,83.1,83.1s83.1-37.2,83.1-83.1S298.6,169.6,252.7,169.6L252.7,169.6z"/>
                <path className="fill-white" d="M252.7,142.3c29.5,0,57.2,11.5,78.1,32.3c20.8,20.8,32.3,48.6,32.3,78.1s-11.5,57.2-32.3,78.1    c-20.8,20.8-48.6,32.3-78.1,32.3s-57.2-11.5-78.1-32.3c-20.8-20.8-32.3-48.6-32.3-78.1s11.5-57.2,32.3-78.1    S223.2,142.3,252.7,142.3 M252.7,141.3c-61.5,0-111.4,49.9-111.4,111.4s49.9,111.4,111.4,111.4s111.4-49.9,111.4-111.4    S314.2,141.3,252.7,141.3L252.7,141.3z"/>
                <path className="fill-white" d="M252.7,114c37,0,71.8,14.4,98,40.6c26.2,26.2,40.6,61,40.6,98s-14.4,71.8-40.6,98c-26.2,26.2-61,40.6-98,40.6    s-71.8-14.4-98-40.6c-26.2-26.2-40.6-61-40.6-98s14.4-71.8,40.6-98S215.7,114,252.7,114 M252.7,113C175.6,113,113,175.6,113,252.7    s62.5,139.6,139.6,139.6s139.6-62.5,139.6-139.6S329.8,113,252.7,113L252.7,113z"/>
                <path className="fill-white" d="M252.7,85.8c44.6,0,86.5,17.4,118,48.9s48.9,73.4,48.9,118s-17.4,86.5-48.9,118s-73.4,48.9-118,48.9    s-86.5-17.4-118-48.9s-48.9-73.4-48.9-118s17.4-86.5,48.9-118S208.1,85.8,252.7,85.8 M252.7,84.8C160,84.8,84.8,160,84.8,252.7    S160,420.6,252.7,420.6s167.9-75.2,167.9-167.9S345.4,84.8,252.7,84.8L252.7,84.8z"/>
                <path className="fill-white" d="M252.7,57.5c26.3,0,51.9,5.2,76,15.3c23.2,9.8,44.1,23.9,62,41.8c17.9,17.9,32,38.8,41.8,62    c10.2,24.1,15.3,49.6,15.3,76s-5.2,51.9-15.3,76c-9.8,23.2-23.9,44.1-41.8,62c-17.9,17.9-38.8,32-62,41.8    c-24.1,10.2-49.6,15.3-76,15.3s-51.9-5.2-76-15.3c-23.2-9.8-44.1-23.9-62-41.8c-17.9-17.9-32-38.8-41.8-62    c-10.2-24.1-15.3-49.6-15.3-76s5.2-51.9,15.3-76c9.8-23.2,23.9-44.1,41.8-62c17.9-17.9,38.8-32,62-41.8    C200.8,62.7,226.3,57.5,252.7,57.5 M252.7,56.5c-108.3,0-196.2,87.8-196.2,196.2s87.8,196.2,196.2,196.2S448.8,361,448.8,252.7    S361,56.5,252.7,56.5L252.7,56.5z"/>
                <path className="fill-white" d="M252.7,29.3c30.2,0,59.4,5.9,87,17.6c26.6,11.3,50.5,27.4,71,47.9c20.5,20.5,36.6,44.4,47.9,71    c11.7,27.5,17.6,56.8,17.6,87s-5.9,59.4-17.6,87c-11.3,26.6-27.4,50.5-47.9,71c-20.5,20.5-44.4,36.6-71,47.9    c-27.5,11.7-56.8,17.6-87,17.6s-59.4-5.9-87-17.6c-26.6-11.3-50.5-27.4-71-47.9c-20.5-20.5-36.6-44.4-47.9-71    c-11.7-27.5-17.6-56.8-17.6-87s5.9-59.4,17.6-87c11.3-26.6,27.4-50.5,47.9-71c20.5-20.5,44.4-36.6,71-47.9    C193.3,35.2,222.5,29.3,252.7,29.3 M252.7,28.3c-123.9,0-224.4,100.5-224.4,224.4s100.5,224.4,224.4,224.4    s224.4-100.5,224.4-224.4S376.6,28.3,252.7,28.3L252.7,28.3z"/>
                <path className="fill-white" d="M252.7,1c34,0,66.9,6.7,98,19.8c30,12.7,56.9,30.8,80,53.9s41.3,50,53.9,80c13.1,31,19.8,64,19.8,98    s-6.7,66.9-19.8,98c-12.7,30-30.8,56.9-53.9,80s-50,41.3-80,53.9c-31,13.1-64,19.8-98,19.8s-66.9-6.7-98-19.8    c-30-12.7-56.9-30.8-80-53.9s-41.3-50-53.9-80c-13.1-31-19.8-64-19.8-98s6.7-66.9,19.8-98c12.7-30,30.8-56.9,53.9-80    s50-41.3,80-53.9C185.7,7.7,218.7,1,252.7,1 M252.7,0C113.1,0,0,113.1,0,252.7s113.1,252.7,252.7,252.7s252.7-113.1,252.7-252.7    S392.2,0,252.7,0L252.7,0z"/>
            </g>
        </svg>
    )
}


export const CircleSVG = ({className,...rest}) => {


    return (
        <>

            <svg viewBox="0 0 500 500" className={` ${className}`} {...rest}>
                
                
                <g transform="translate(250,250)">
                    <g>
                        <g className="group">
                            <circle fill="#390052" r="204.54545454545453" className={`stroke-1 stroke-white transition-all opacity-50`}></circle>
                        </g>
                        <g className="group" >
                            <circle fill="#390052" r="181.8181818181818" className={`stroke-1 stroke-white transition-all opacity-50`}></circle>
                        </g>
                        <g className="group" >
                            <circle fill="#390052" r="159.09090909090907" className={`stroke-1 stroke-white transition-all opacity-50`}></circle>
                        </g>
                    </g>
                    <g>
                        <g className="group" >
                            <circle fill="#a4df53" r="136.36363636363635" className={`stroke-1 stroke-white transition-all opacity-50`}></circle>
                        </g>
                        <g className="group" >
                            <circle fill="#a4df53" r="113.63636363636363" className={`stroke-1 stroke-white transition-all opacity-50`}></circle>
                        </g>
                        <g className="group" >
                            <circle fill="#a4df53" r="90.9090909090909" className={`stroke-1 stroke-white transition-all opacity-50`}></circle>
                        </g>
                    </g>
                    <g>
                        <g className="group" >
                            <circle fill="#fee201" r="68.18181818181817" className={`stroke-1 stroke-white transition-all opacity-50`}></circle>
                        </g>
                        <g className="group" >
                            <circle fill="#fee201" r="45.45454545454545" className={`stroke-1 stroke-white transition-all opacity-50`}></circle>
                        </g>
                        <g className="group" >
                            <circle fill="#fee201" r="22.727272727272727" className={`stroke-1 stroke-white transition-all opacity-50`}></circle>
                            
                        </g>
                    </g>
                </g>

                <defs>
                    <marker id="my-arrow" refX="15" refY="8" markerWidth="17" markerHeight="16" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                        <path d="M 1 1 Q 7 5 16 8 Q 7 11 1 15 L 4 8 Z" className="fill-white stroke-white"></path>
                    </marker>
                </defs>
            </svg>
        </>
    )
}

/**
 * 
 * @param {string} className string of additional classes to append to this svg
 * @param {integer} partition specifies the partition of people that should render 
 * @param {*} rest any further functionality/parameters passed into this element
 *  
 * @returns 
 */
export const GroupOfPeople = ({className,partition=1,...rest}) => {
    return (
        <svg id="group-of-people" x="0px" y="0px" viewBox="0 0 521 355.1" {...rest}>
            <g id="cluster-1">
                <g id="girl-outline" transform="translate(0 -30)">
                    <circle className="fill-none stroke-white" cx="279.2" cy="107.8" r="26.2"/>
                    <g>
                        <path className="fill-white" d="M298.2,142.4c6.4,0,10.9,2.6,13.3,7.8c0.9,1.8,3.3,6.8,6.7,13.7c10.1,20.7,31.1,63.8,32,67.1    c1.2,4.5,0.4,10-5.4,12.3c-1.7,0.6-3.3,1-4.9,1c-5.3,0-8.5-3.8-9-4.3L319,215.6c-0.2-0.4-0.5-0.6-0.9-0.6c-0.1,0-0.2,0-0.3,0.1    c-0.5,0.2-0.8,0.6-0.7,1.1l8.6,43.9c0,0,0,0,0,0c0.3,1.1,0.7,4.3-0.4,5.8c-0.4,0.5-1,0.8-1.9,0.8h-13c-0.6,0-1,0.4-1,1v75.6    c0,0,0,0.1,0,0.1c0,0,0.4,3.8-2.2,6.7c-2,2.2-5.3,3.4-9.8,3.4c-14.5,0-14.5-8.6-14.5-11.5v-75c0-0.6-0.4-1-1-1h-2.5h-3.3h-2.5    c-0.6,0-1,0.4-1,1v75c0,2.8,0,11.5-14.5,11.5c-4.5,0-7.8-1.1-9.8-3.4c-2.6-2.9-2.2-6.7-2.2-6.7c0,0,0-0.1,0-0.1v-75.6    c0-0.6-0.4-1-1-1h-13c-0.8,0-1.5-0.3-1.9-0.8c-1.1-1.5-0.7-4.6-0.4-5.8c0,0,0,0,0-0.1l8.6-43.9c0.1-0.5-0.2-1-0.7-1.1    c-0.1,0-0.2-0.1-0.3-0.1c-0.4,0-0.7,0.2-0.9,0.6L224.7,240c-0.4,0.5-3.7,4.3-9,4.3c-1.6,0-3.2-0.3-4.9-1    c-5.7-2.2-6.5-7.8-5.4-12.3c0.9-3.3,21.9-46.4,32-67.1c3.4-6.9,5.8-11.9,6.7-13.7c2.5-5.2,7-7.8,13.3-7.8h18.7h3.3H298.2     M298.2,141.4c-2.6,0-13.2,0-18.7,0c-2,0-3.3,0-3.3,0c-5.5,0-16.1,0-18.7,0c-3.6,0-10.6,0.7-14.2,8.4c-3.7,7.8-37.5,76.5-38.7,81    c-1.3,5.1-0.1,11.1,6,13.4c1.9,0.7,3.7,1,5.2,1c6.3,0,9.8-4.8,9.8-4.8l12-24.5L229,260c0,0-1.9,7.8,3.2,7.8c5.2,0,13,0,13,0v75.6    c0,0-1.3,11.2,13,11.2s15.5-7.9,15.5-12.5c0-4.5,0-75,0-75h2.5h3.3h2.5c0,0,0,70.4,0,75c0,4.5,1.3,12.5,15.5,12.5    c14.2,0,13-11.2,13-11.2v-75.6c0,0,7.8,0,13,0s3.2-7.8,3.2-7.8l-8.6-43.9l12,24.5c0,0,3.5,4.8,9.8,4.8c1.6,0,3.3-0.3,5.2-1    c6.1-2.4,7.3-8.3,6-13.4c-1.1-4.4-35-73.1-38.7-81C308.8,142.1,301.8,141.4,298.2,141.4L298.2,141.4z"/>
                    </g>
                </g>
            </g>

            <g id="cluster-2" className={`${partition===2||partition===3?'opacity-100':'opacity-0'} transition-all transform duration-1000`}>
                <g id="boy-outline" transform="translate(10 -30) ">
                    <g>
                        <path className="fill-white" d="M143.5,88.3c13.9,0,25.2,11.3,25.2,25.2c0,13.9-11.3,25.2-25.2,25.2c-13.9,0-25.2-11.3-25.2-25.2    C118.3,99.6,129.6,88.3,143.5,88.3 M143.5,87.3c-14.5,0-26.2,11.7-26.2,26.2c0,14.5,11.7,26.2,26.2,26.2    c14.5,0,26.2-11.7,26.2-26.2C169.7,99,158,87.3,143.5,87.3L143.5,87.3z"/>
                    </g>
                    <g>
                        <path className="fill-white" d="M163.1,143c6.4,0,10.9,2.6,13.3,7.8c0.9,1.8,3.3,6.8,6.7,13.7c10.1,20.7,31.1,63.8,32,67.1    c1.2,4.5,0.4,10-5.4,12.3c-1.7,0.6-3.3,1-4.9,1c-5.3,0-8.5-3.8-9-4.3l-19-39c-0.2-0.3-0.5-0.6-0.9-0.6c-0.1,0-0.1,0-0.2,0    c-0.5,0.1-0.8,0.5-0.8,1l-0.5,66.3v75.6c0,0,0,0.1,0,0.1c0,0,0.4,3.8-2.2,6.7c-2,2.2-5.3,3.4-9.8,3.4c-14.5,0-14.5-8.6-14.5-11.5    v-75c0-0.6-0.4-1-1-1h-2.5h-3.3h-2.5c-0.6,0-1,0.4-1,1v75c0,2.8,0,11.5-14.5,11.5c-4.5,0-7.8-1.1-9.8-3.4    c-2.6-2.9-2.2-6.7-2.2-6.7c0,0,0-0.1,0-0.1l0-75.6l0.5-68.3c0-0.5-0.3-0.9-0.8-1c-0.1,0-0.2,0-0.2,0c-0.4,0-0.7,0.2-0.9,0.6    l-20.1,41c-0.4,0.5-3.7,4.3-9,4.3c-1.6,0-3.2-0.3-4.9-1c-5.7-2.2-6.5-7.8-5.4-12.3c0.9-3.3,21.9-46.4,32-67.1    c3.4-6.9,5.8-11.9,6.7-13.7c2.5-5.2,7-7.8,13.3-7.8h18.7h3.3H163.1 M163.1,142c-2.6,0-13.2,0-18.7,0c-2,0-3.3,0-3.3,0    c-5.5,0-16.1,0-18.7,0c-3.6,0-10.6,0.7-14.2,8.4c-3.7,7.8-37.5,76.5-38.7,81c-1.3,5.1-0.1,11.1,6,13.4c1.9,0.7,3.7,1,5.2,1    c6.3,0,9.8-4.8,9.8-4.8l20.1-41.1l-0.5,68.3v75.6c0,0-1.3,11.2,13,11.2c14.2,0,15.5-7.9,15.5-12.5c0-4.5,0-75,0-75h2.5h3.3h2.5    c0,0,0,70.4,0,75c0,4.5,1.3,12.5,15.5,12.5c14.2,0,13-11.2,13-11.2v-75.6l0.5-66.3l19.1,39.1c0,0,3.5,4.8,9.8,4.8    c1.6,0,3.3-0.3,5.2-1c6.1-2.4,7.3-8.3,6-13.4c-1.1-4.4-35-73.1-38.7-81C173.7,142.7,166.7,142,163.1,142L163.1,142z"/>
                    </g>
                </g>
                <g id="boy-outline" transform="translate(260 -30) ">
                    <g>
                        <path className="fill-white" d="M143.5,88.3c13.9,0,25.2,11.3,25.2,25.2c0,13.9-11.3,25.2-25.2,25.2c-13.9,0-25.2-11.3-25.2-25.2    C118.3,99.6,129.6,88.3,143.5,88.3 M143.5,87.3c-14.5,0-26.2,11.7-26.2,26.2c0,14.5,11.7,26.2,26.2,26.2    c14.5,0,26.2-11.7,26.2-26.2C169.7,99,158,87.3,143.5,87.3L143.5,87.3z"/>
                    </g>
                    <g>
                        <path className="fill-white" d="M163.1,143c6.4,0,10.9,2.6,13.3,7.8c0.9,1.8,3.3,6.8,6.7,13.7c10.1,20.7,31.1,63.8,32,67.1    c1.2,4.5,0.4,10-5.4,12.3c-1.7,0.6-3.3,1-4.9,1c-5.3,0-8.5-3.8-9-4.3l-19-39c-0.2-0.3-0.5-0.6-0.9-0.6c-0.1,0-0.1,0-0.2,0    c-0.5,0.1-0.8,0.5-0.8,1l-0.5,66.3v75.6c0,0,0,0.1,0,0.1c0,0,0.4,3.8-2.2,6.7c-2,2.2-5.3,3.4-9.8,3.4c-14.5,0-14.5-8.6-14.5-11.5    v-75c0-0.6-0.4-1-1-1h-2.5h-3.3h-2.5c-0.6,0-1,0.4-1,1v75c0,2.8,0,11.5-14.5,11.5c-4.5,0-7.8-1.1-9.8-3.4    c-2.6-2.9-2.2-6.7-2.2-6.7c0,0,0-0.1,0-0.1l0-75.6l0.5-68.3c0-0.5-0.3-0.9-0.8-1c-0.1,0-0.2,0-0.2,0c-0.4,0-0.7,0.2-0.9,0.6    l-20.1,41c-0.4,0.5-3.7,4.3-9,4.3c-1.6,0-3.2-0.3-4.9-1c-5.7-2.2-6.5-7.8-5.4-12.3c0.9-3.3,21.9-46.4,32-67.1    c3.4-6.9,5.8-11.9,6.7-13.7c2.5-5.2,7-7.8,13.3-7.8h18.7h3.3H163.1 M163.1,142c-2.6,0-13.2,0-18.7,0c-2,0-3.3,0-3.3,0    c-5.5,0-16.1,0-18.7,0c-3.6,0-10.6,0.7-14.2,8.4c-3.7,7.8-37.5,76.5-38.7,81c-1.3,5.1-0.1,11.1,6,13.4c1.9,0.7,3.7,1,5.2,1    c6.3,0,9.8-4.8,9.8-4.8l20.1-41.1l-0.5,68.3v75.6c0,0-1.3,11.2,13,11.2c14.2,0,15.5-7.9,15.5-12.5c0-4.5,0-75,0-75h2.5h3.3h2.5    c0,0,0,70.4,0,75c0,4.5,1.3,12.5,15.5,12.5c14.2,0,13-11.2,13-11.2v-75.6l0.5-66.3l19.1,39.1c0,0,3.5,4.8,9.8,4.8    c1.6,0,3.3-0.3,5.2-1c6.1-2.4,7.3-8.3,6-13.4c-1.1-4.4-35-73.1-38.7-81C173.7,142.7,166.7,142,163.1,142L163.1,142z"/>
                    </g>
                </g>
            </g>

            <g id="cluster-3" className={`${partition===3?'opacity-100':'opacity-0'} transition-all transform duration-1000`}>
                <g id="boy-outline" transform="translate(-10 -60) scale(0.7)">
                    <g>
                        <path className="fill-white" d="M143.5,88.3c13.9,0,25.2,11.3,25.2,25.2c0,13.9-11.3,25.2-25.2,25.2c-13.9,0-25.2-11.3-25.2-25.2    C118.3,99.6,129.6,88.3,143.5,88.3 M143.5,87.3c-14.5,0-26.2,11.7-26.2,26.2c0,14.5,11.7,26.2,26.2,26.2    c14.5,0,26.2-11.7,26.2-26.2C169.7,99,158,87.3,143.5,87.3L143.5,87.3z"/>
                    </g>
                    <g>
                        <path className="fill-white" d="M163.1,143c6.4,0,10.9,2.6,13.3,7.8c0.9,1.8,3.3,6.8,6.7,13.7c10.1,20.7,31.1,63.8,32,67.1    c1.2,4.5,0.4,10-5.4,12.3c-1.7,0.6-3.3,1-4.9,1c-5.3,0-8.5-3.8-9-4.3l-19-39c-0.2-0.3-0.5-0.6-0.9-0.6c-0.1,0-0.1,0-0.2,0    c-0.5,0.1-0.8,0.5-0.8,1l-0.5,66.3v75.6c0,0,0,0.1,0,0.1c0,0,0.4,3.8-2.2,6.7c-2,2.2-5.3,3.4-9.8,3.4c-14.5,0-14.5-8.6-14.5-11.5    v-75c0-0.6-0.4-1-1-1h-2.5h-3.3h-2.5c-0.6,0-1,0.4-1,1v75c0,2.8,0,11.5-14.5,11.5c-4.5,0-7.8-1.1-9.8-3.4    c-2.6-2.9-2.2-6.7-2.2-6.7c0,0,0-0.1,0-0.1l0-75.6l0.5-68.3c0-0.5-0.3-0.9-0.8-1c-0.1,0-0.2,0-0.2,0c-0.4,0-0.7,0.2-0.9,0.6    l-20.1,41c-0.4,0.5-3.7,4.3-9,4.3c-1.6,0-3.2-0.3-4.9-1c-5.7-2.2-6.5-7.8-5.4-12.3c0.9-3.3,21.9-46.4,32-67.1    c3.4-6.9,5.8-11.9,6.7-13.7c2.5-5.2,7-7.8,13.3-7.8h18.7h3.3H163.1 M163.1,142c-2.6,0-13.2,0-18.7,0c-2,0-3.3,0-3.3,0    c-5.5,0-16.1,0-18.7,0c-3.6,0-10.6,0.7-14.2,8.4c-3.7,7.8-37.5,76.5-38.7,81c-1.3,5.1-0.1,11.1,6,13.4c1.9,0.7,3.7,1,5.2,1    c6.3,0,9.8-4.8,9.8-4.8l20.1-41.1l-0.5,68.3v75.6c0,0-1.3,11.2,13,11.2c14.2,0,15.5-7.9,15.5-12.5c0-4.5,0-75,0-75h2.5h3.3h2.5    c0,0,0,70.4,0,75c0,4.5,1.3,12.5,15.5,12.5c14.2,0,13-11.2,13-11.2v-75.6l0.5-66.3l19.1,39.1c0,0,3.5,4.8,9.8,4.8    c1.6,0,3.3-0.3,5.2-1c6.1-2.4,7.3-8.3,6-13.4c-1.1-4.4-35-73.1-38.7-81C173.7,142.7,166.7,142,163.1,142L163.1,142z"/>
                    </g>
                </g>
                <g id="boy-outline" transform="translate(260 -30) scale(0.7)">
                    <g>
                        <path className="fill-white" d="M143.5,88.3c13.9,0,25.2,11.3,25.2,25.2c0,13.9-11.3,25.2-25.2,25.2c-13.9,0-25.2-11.3-25.2-25.2    C118.3,99.6,129.6,88.3,143.5,88.3 M143.5,87.3c-14.5,0-26.2,11.7-26.2,26.2c0,14.5,11.7,26.2,26.2,26.2    c14.5,0,26.2-11.7,26.2-26.2C169.7,99,158,87.3,143.5,87.3L143.5,87.3z"/>
                    </g>
                    <g>
                        <path className="fill-white" d="M163.1,143c6.4,0,10.9,2.6,13.3,7.8c0.9,1.8,3.3,6.8,6.7,13.7c10.1,20.7,31.1,63.8,32,67.1    c1.2,4.5,0.4,10-5.4,12.3c-1.7,0.6-3.3,1-4.9,1c-5.3,0-8.5-3.8-9-4.3l-19-39c-0.2-0.3-0.5-0.6-0.9-0.6c-0.1,0-0.1,0-0.2,0    c-0.5,0.1-0.8,0.5-0.8,1l-0.5,66.3v75.6c0,0,0,0.1,0,0.1c0,0,0.4,3.8-2.2,6.7c-2,2.2-5.3,3.4-9.8,3.4c-14.5,0-14.5-8.6-14.5-11.5    v-75c0-0.6-0.4-1-1-1h-2.5h-3.3h-2.5c-0.6,0-1,0.4-1,1v75c0,2.8,0,11.5-14.5,11.5c-4.5,0-7.8-1.1-9.8-3.4    c-2.6-2.9-2.2-6.7-2.2-6.7c0,0,0-0.1,0-0.1l0-75.6l0.5-68.3c0-0.5-0.3-0.9-0.8-1c-0.1,0-0.2,0-0.2,0c-0.4,0-0.7,0.2-0.9,0.6    l-20.1,41c-0.4,0.5-3.7,4.3-9,4.3c-1.6,0-3.2-0.3-4.9-1c-5.7-2.2-6.5-7.8-5.4-12.3c0.9-3.3,21.9-46.4,32-67.1    c3.4-6.9,5.8-11.9,6.7-13.7c2.5-5.2,7-7.8,13.3-7.8h18.7h3.3H163.1 M163.1,142c-2.6,0-13.2,0-18.7,0c-2,0-3.3,0-3.3,0    c-5.5,0-16.1,0-18.7,0c-3.6,0-10.6,0.7-14.2,8.4c-3.7,7.8-37.5,76.5-38.7,81c-1.3,5.1-0.1,11.1,6,13.4c1.9,0.7,3.7,1,5.2,1    c6.3,0,9.8-4.8,9.8-4.8l20.1-41.1l-0.5,68.3v75.6c0,0-1.3,11.2,13,11.2c14.2,0,15.5-7.9,15.5-12.5c0-4.5,0-75,0-75h2.5h3.3h2.5    c0,0,0,70.4,0,75c0,4.5,1.3,12.5,15.5,12.5c14.2,0,13-11.2,13-11.2v-75.6l0.5-66.3l19.1,39.1c0,0,3.5,4.8,9.8,4.8    c1.6,0,3.3-0.3,5.2-1c6.1-2.4,7.3-8.3,6-13.4c-1.1-4.4-35-73.1-38.7-81C173.7,142.7,166.7,142,163.1,142L163.1,142z"/>
                    </g>
                </g>
                <g id="girl-outline" transform="translate(0 -30) scale(0.6)">
                    <circle className="fill-none stroke-white" cx="279.2" cy="107.8" r="26.2"/>
                    <g>
                        <path className="fill-white" d="M298.2,142.4c6.4,0,10.9,2.6,13.3,7.8c0.9,1.8,3.3,6.8,6.7,13.7c10.1,20.7,31.1,63.8,32,67.1    c1.2,4.5,0.4,10-5.4,12.3c-1.7,0.6-3.3,1-4.9,1c-5.3,0-8.5-3.8-9-4.3L319,215.6c-0.2-0.4-0.5-0.6-0.9-0.6c-0.1,0-0.2,0-0.3,0.1    c-0.5,0.2-0.8,0.6-0.7,1.1l8.6,43.9c0,0,0,0,0,0c0.3,1.1,0.7,4.3-0.4,5.8c-0.4,0.5-1,0.8-1.9,0.8h-13c-0.6,0-1,0.4-1,1v75.6    c0,0,0,0.1,0,0.1c0,0,0.4,3.8-2.2,6.7c-2,2.2-5.3,3.4-9.8,3.4c-14.5,0-14.5-8.6-14.5-11.5v-75c0-0.6-0.4-1-1-1h-2.5h-3.3h-2.5    c-0.6,0-1,0.4-1,1v75c0,2.8,0,11.5-14.5,11.5c-4.5,0-7.8-1.1-9.8-3.4c-2.6-2.9-2.2-6.7-2.2-6.7c0,0,0-0.1,0-0.1v-75.6    c0-0.6-0.4-1-1-1h-13c-0.8,0-1.5-0.3-1.9-0.8c-1.1-1.5-0.7-4.6-0.4-5.8c0,0,0,0,0-0.1l8.6-43.9c0.1-0.5-0.2-1-0.7-1.1    c-0.1,0-0.2-0.1-0.3-0.1c-0.4,0-0.7,0.2-0.9,0.6L224.7,240c-0.4,0.5-3.7,4.3-9,4.3c-1.6,0-3.2-0.3-4.9-1    c-5.7-2.2-6.5-7.8-5.4-12.3c0.9-3.3,21.9-46.4,32-67.1c3.4-6.9,5.8-11.9,6.7-13.7c2.5-5.2,7-7.8,13.3-7.8h18.7h3.3H298.2     M298.2,141.4c-2.6,0-13.2,0-18.7,0c-2,0-3.3,0-3.3,0c-5.5,0-16.1,0-18.7,0c-3.6,0-10.6,0.7-14.2,8.4c-3.7,7.8-37.5,76.5-38.7,81    c-1.3,5.1-0.1,11.1,6,13.4c1.9,0.7,3.7,1,5.2,1c6.3,0,9.8-4.8,9.8-4.8l12-24.5L229,260c0,0-1.9,7.8,3.2,7.8c5.2,0,13,0,13,0v75.6    c0,0-1.3,11.2,13,11.2s15.5-7.9,15.5-12.5c0-4.5,0-75,0-75h2.5h3.3h2.5c0,0,0,70.4,0,75c0,4.5,1.3,12.5,15.5,12.5    c14.2,0,13-11.2,13-11.2v-75.6c0,0,7.8,0,13,0s3.2-7.8,3.2-7.8l-8.6-43.9l12,24.5c0,0,3.5,4.8,9.8,4.8c1.6,0,3.3-0.3,5.2-1    c6.1-2.4,7.3-8.3,6-13.4c-1.1-4.4-35-73.1-38.7-81C308.8,142.1,301.8,141.4,298.2,141.4L298.2,141.4z"/>
                    </g>
                </g>
                <g id="girl-outline" transform="translate(-140 60) scale(0.8)">
                    <circle className="fill-none stroke-white" cx="279.2" cy="107.8" r="26.2"/>
                    <g>
                        <path className="fill-white" d="M298.2,142.4c6.4,0,10.9,2.6,13.3,7.8c0.9,1.8,3.3,6.8,6.7,13.7c10.1,20.7,31.1,63.8,32,67.1    c1.2,4.5,0.4,10-5.4,12.3c-1.7,0.6-3.3,1-4.9,1c-5.3,0-8.5-3.8-9-4.3L319,215.6c-0.2-0.4-0.5-0.6-0.9-0.6c-0.1,0-0.2,0-0.3,0.1    c-0.5,0.2-0.8,0.6-0.7,1.1l8.6,43.9c0,0,0,0,0,0c0.3,1.1,0.7,4.3-0.4,5.8c-0.4,0.5-1,0.8-1.9,0.8h-13c-0.6,0-1,0.4-1,1v75.6    c0,0,0,0.1,0,0.1c0,0,0.4,3.8-2.2,6.7c-2,2.2-5.3,3.4-9.8,3.4c-14.5,0-14.5-8.6-14.5-11.5v-75c0-0.6-0.4-1-1-1h-2.5h-3.3h-2.5    c-0.6,0-1,0.4-1,1v75c0,2.8,0,11.5-14.5,11.5c-4.5,0-7.8-1.1-9.8-3.4c-2.6-2.9-2.2-6.7-2.2-6.7c0,0,0-0.1,0-0.1v-75.6    c0-0.6-0.4-1-1-1h-13c-0.8,0-1.5-0.3-1.9-0.8c-1.1-1.5-0.7-4.6-0.4-5.8c0,0,0,0,0-0.1l8.6-43.9c0.1-0.5-0.2-1-0.7-1.1    c-0.1,0-0.2-0.1-0.3-0.1c-0.4,0-0.7,0.2-0.9,0.6L224.7,240c-0.4,0.5-3.7,4.3-9,4.3c-1.6,0-3.2-0.3-4.9-1    c-5.7-2.2-6.5-7.8-5.4-12.3c0.9-3.3,21.9-46.4,32-67.1c3.4-6.9,5.8-11.9,6.7-13.7c2.5-5.2,7-7.8,13.3-7.8h18.7h3.3H298.2     M298.2,141.4c-2.6,0-13.2,0-18.7,0c-2,0-3.3,0-3.3,0c-5.5,0-16.1,0-18.7,0c-3.6,0-10.6,0.7-14.2,8.4c-3.7,7.8-37.5,76.5-38.7,81    c-1.3,5.1-0.1,11.1,6,13.4c1.9,0.7,3.7,1,5.2,1c6.3,0,9.8-4.8,9.8-4.8l12-24.5L229,260c0,0-1.9,7.8,3.2,7.8c5.2,0,13,0,13,0v75.6    c0,0-1.3,11.2,13,11.2s15.5-7.9,15.5-12.5c0-4.5,0-75,0-75h2.5h3.3h2.5c0,0,0,70.4,0,75c0,4.5,1.3,12.5,15.5,12.5    c14.2,0,13-11.2,13-11.2v-75.6c0,0,7.8,0,13,0s3.2-7.8,3.2-7.8l-8.6-43.9l12,24.5c0,0,3.5,4.8,9.8,4.8c1.6,0,3.3-0.3,5.2-1    c6.1-2.4,7.3-8.3,6-13.4c-1.1-4.4-35-73.1-38.7-81C308.8,142.1,301.8,141.4,298.2,141.4L298.2,141.4z"/>
                    </g>
                </g>
                <g id="girl-outline" transform="translate(100 -30) scale(0.5)">
                    <circle className="fill-none stroke-white" cx="279.2" cy="107.8" r="26.2"/>
                    <g>
                        <path className="fill-white" d="M298.2,142.4c6.4,0,10.9,2.6,13.3,7.8c0.9,1.8,3.3,6.8,6.7,13.7c10.1,20.7,31.1,63.8,32,67.1    c1.2,4.5,0.4,10-5.4,12.3c-1.7,0.6-3.3,1-4.9,1c-5.3,0-8.5-3.8-9-4.3L319,215.6c-0.2-0.4-0.5-0.6-0.9-0.6c-0.1,0-0.2,0-0.3,0.1    c-0.5,0.2-0.8,0.6-0.7,1.1l8.6,43.9c0,0,0,0,0,0c0.3,1.1,0.7,4.3-0.4,5.8c-0.4,0.5-1,0.8-1.9,0.8h-13c-0.6,0-1,0.4-1,1v75.6    c0,0,0,0.1,0,0.1c0,0,0.4,3.8-2.2,6.7c-2,2.2-5.3,3.4-9.8,3.4c-14.5,0-14.5-8.6-14.5-11.5v-75c0-0.6-0.4-1-1-1h-2.5h-3.3h-2.5    c-0.6,0-1,0.4-1,1v75c0,2.8,0,11.5-14.5,11.5c-4.5,0-7.8-1.1-9.8-3.4c-2.6-2.9-2.2-6.7-2.2-6.7c0,0,0-0.1,0-0.1v-75.6    c0-0.6-0.4-1-1-1h-13c-0.8,0-1.5-0.3-1.9-0.8c-1.1-1.5-0.7-4.6-0.4-5.8c0,0,0,0,0-0.1l8.6-43.9c0.1-0.5-0.2-1-0.7-1.1    c-0.1,0-0.2-0.1-0.3-0.1c-0.4,0-0.7,0.2-0.9,0.6L224.7,240c-0.4,0.5-3.7,4.3-9,4.3c-1.6,0-3.2-0.3-4.9-1    c-5.7-2.2-6.5-7.8-5.4-12.3c0.9-3.3,21.9-46.4,32-67.1c3.4-6.9,5.8-11.9,6.7-13.7c2.5-5.2,7-7.8,13.3-7.8h18.7h3.3H298.2     M298.2,141.4c-2.6,0-13.2,0-18.7,0c-2,0-3.3,0-3.3,0c-5.5,0-16.1,0-18.7,0c-3.6,0-10.6,0.7-14.2,8.4c-3.7,7.8-37.5,76.5-38.7,81    c-1.3,5.1-0.1,11.1,6,13.4c1.9,0.7,3.7,1,5.2,1c6.3,0,9.8-4.8,9.8-4.8l12-24.5L229,260c0,0-1.9,7.8,3.2,7.8c5.2,0,13,0,13,0v75.6    c0,0-1.3,11.2,13,11.2s15.5-7.9,15.5-12.5c0-4.5,0-75,0-75h2.5h3.3h2.5c0,0,0,70.4,0,75c0,4.5,1.3,12.5,15.5,12.5    c14.2,0,13-11.2,13-11.2v-75.6c0,0,7.8,0,13,0s3.2-7.8,3.2-7.8l-8.6-43.9l12,24.5c0,0,3.5,4.8,9.8,4.8c1.6,0,3.3-0.3,5.2-1    c6.1-2.4,7.3-8.3,6-13.4c-1.1-4.4-35-73.1-38.7-81C308.8,142.1,301.8,141.4,298.2,141.4L298.2,141.4z"/>
                    </g>
                </g>
                <g id="girl-outline" transform="translate(300 30) scale(0.5)">
                    <circle className="fill-none stroke-white" cx="279.2" cy="107.8" r="26.2"/>
                    <g>
                        <path className="fill-white" d="M298.2,142.4c6.4,0,10.9,2.6,13.3,7.8c0.9,1.8,3.3,6.8,6.7,13.7c10.1,20.7,31.1,63.8,32,67.1    c1.2,4.5,0.4,10-5.4,12.3c-1.7,0.6-3.3,1-4.9,1c-5.3,0-8.5-3.8-9-4.3L319,215.6c-0.2-0.4-0.5-0.6-0.9-0.6c-0.1,0-0.2,0-0.3,0.1    c-0.5,0.2-0.8,0.6-0.7,1.1l8.6,43.9c0,0,0,0,0,0c0.3,1.1,0.7,4.3-0.4,5.8c-0.4,0.5-1,0.8-1.9,0.8h-13c-0.6,0-1,0.4-1,1v75.6    c0,0,0,0.1,0,0.1c0,0,0.4,3.8-2.2,6.7c-2,2.2-5.3,3.4-9.8,3.4c-14.5,0-14.5-8.6-14.5-11.5v-75c0-0.6-0.4-1-1-1h-2.5h-3.3h-2.5    c-0.6,0-1,0.4-1,1v75c0,2.8,0,11.5-14.5,11.5c-4.5,0-7.8-1.1-9.8-3.4c-2.6-2.9-2.2-6.7-2.2-6.7c0,0,0-0.1,0-0.1v-75.6    c0-0.6-0.4-1-1-1h-13c-0.8,0-1.5-0.3-1.9-0.8c-1.1-1.5-0.7-4.6-0.4-5.8c0,0,0,0,0-0.1l8.6-43.9c0.1-0.5-0.2-1-0.7-1.1    c-0.1,0-0.2-0.1-0.3-0.1c-0.4,0-0.7,0.2-0.9,0.6L224.7,240c-0.4,0.5-3.7,4.3-9,4.3c-1.6,0-3.2-0.3-4.9-1    c-5.7-2.2-6.5-7.8-5.4-12.3c0.9-3.3,21.9-46.4,32-67.1c3.4-6.9,5.8-11.9,6.7-13.7c2.5-5.2,7-7.8,13.3-7.8h18.7h3.3H298.2     M298.2,141.4c-2.6,0-13.2,0-18.7,0c-2,0-3.3,0-3.3,0c-5.5,0-16.1,0-18.7,0c-3.6,0-10.6,0.7-14.2,8.4c-3.7,7.8-37.5,76.5-38.7,81    c-1.3,5.1-0.1,11.1,6,13.4c1.9,0.7,3.7,1,5.2,1c6.3,0,9.8-4.8,9.8-4.8l12-24.5L229,260c0,0-1.9,7.8,3.2,7.8c5.2,0,13,0,13,0v75.6    c0,0-1.3,11.2,13,11.2s15.5-7.9,15.5-12.5c0-4.5,0-75,0-75h2.5h3.3h2.5c0,0,0,70.4,0,75c0,4.5,1.3,12.5,15.5,12.5    c14.2,0,13-11.2,13-11.2v-75.6c0,0,7.8,0,13,0s3.2-7.8,3.2-7.8l-8.6-43.9l12,24.5c0,0,3.5,4.8,9.8,4.8c1.6,0,3.3-0.3,5.2-1    c6.1-2.4,7.3-8.3,6-13.4c-1.1-4.4-35-73.1-38.7-81C308.8,142.1,301.8,141.4,298.2,141.4L298.2,141.4z"/>
                    </g>
                </g>
                <g id="boy-outline" transform="translate(260 -30) scale(0.7)">
                    <g>
                        <path className="fill-white" d="M143.5,88.3c13.9,0,25.2,11.3,25.2,25.2c0,13.9-11.3,25.2-25.2,25.2c-13.9,0-25.2-11.3-25.2-25.2    C118.3,99.6,129.6,88.3,143.5,88.3 M143.5,87.3c-14.5,0-26.2,11.7-26.2,26.2c0,14.5,11.7,26.2,26.2,26.2    c14.5,0,26.2-11.7,26.2-26.2C169.7,99,158,87.3,143.5,87.3L143.5,87.3z"/>
                    </g>
                    <g>
                        <path className="fill-white" d="M163.1,143c6.4,0,10.9,2.6,13.3,7.8c0.9,1.8,3.3,6.8,6.7,13.7c10.1,20.7,31.1,63.8,32,67.1    c1.2,4.5,0.4,10-5.4,12.3c-1.7,0.6-3.3,1-4.9,1c-5.3,0-8.5-3.8-9-4.3l-19-39c-0.2-0.3-0.5-0.6-0.9-0.6c-0.1,0-0.1,0-0.2,0    c-0.5,0.1-0.8,0.5-0.8,1l-0.5,66.3v75.6c0,0,0,0.1,0,0.1c0,0,0.4,3.8-2.2,6.7c-2,2.2-5.3,3.4-9.8,3.4c-14.5,0-14.5-8.6-14.5-11.5    v-75c0-0.6-0.4-1-1-1h-2.5h-3.3h-2.5c-0.6,0-1,0.4-1,1v75c0,2.8,0,11.5-14.5,11.5c-4.5,0-7.8-1.1-9.8-3.4    c-2.6-2.9-2.2-6.7-2.2-6.7c0,0,0-0.1,0-0.1l0-75.6l0.5-68.3c0-0.5-0.3-0.9-0.8-1c-0.1,0-0.2,0-0.2,0c-0.4,0-0.7,0.2-0.9,0.6    l-20.1,41c-0.4,0.5-3.7,4.3-9,4.3c-1.6,0-3.2-0.3-4.9-1c-5.7-2.2-6.5-7.8-5.4-12.3c0.9-3.3,21.9-46.4,32-67.1    c3.4-6.9,5.8-11.9,6.7-13.7c2.5-5.2,7-7.8,13.3-7.8h18.7h3.3H163.1 M163.1,142c-2.6,0-13.2,0-18.7,0c-2,0-3.3,0-3.3,0    c-5.5,0-16.1,0-18.7,0c-3.6,0-10.6,0.7-14.2,8.4c-3.7,7.8-37.5,76.5-38.7,81c-1.3,5.1-0.1,11.1,6,13.4c1.9,0.7,3.7,1,5.2,1    c6.3,0,9.8-4.8,9.8-4.8l20.1-41.1l-0.5,68.3v75.6c0,0-1.3,11.2,13,11.2c14.2,0,15.5-7.9,15.5-12.5c0-4.5,0-75,0-75h2.5h3.3h2.5    c0,0,0,70.4,0,75c0,4.5,1.3,12.5,15.5,12.5c14.2,0,13-11.2,13-11.2v-75.6l0.5-66.3l19.1,39.1c0,0,3.5,4.8,9.8,4.8    c1.6,0,3.3-0.3,5.2-1c6.1-2.4,7.3-8.3,6-13.4c-1.1-4.4-35-73.1-38.7-81C173.7,142.7,166.7,142,163.1,142L163.1,142z"/>
                    </g>
                </g>
                <g id="boy-outline" transform="translate(260 -30) scale(0.5)">
                    <g>
                        <path className="fill-white" d="M143.5,88.3c13.9,0,25.2,11.3,25.2,25.2c0,13.9-11.3,25.2-25.2,25.2c-13.9,0-25.2-11.3-25.2-25.2    C118.3,99.6,129.6,88.3,143.5,88.3 M143.5,87.3c-14.5,0-26.2,11.7-26.2,26.2c0,14.5,11.7,26.2,26.2,26.2    c14.5,0,26.2-11.7,26.2-26.2C169.7,99,158,87.3,143.5,87.3L143.5,87.3z"/>
                    </g>
                    <g>
                        <path className="fill-white" d="M163.1,143c6.4,0,10.9,2.6,13.3,7.8c0.9,1.8,3.3,6.8,6.7,13.7c10.1,20.7,31.1,63.8,32,67.1    c1.2,4.5,0.4,10-5.4,12.3c-1.7,0.6-3.3,1-4.9,1c-5.3,0-8.5-3.8-9-4.3l-19-39c-0.2-0.3-0.5-0.6-0.9-0.6c-0.1,0-0.1,0-0.2,0    c-0.5,0.1-0.8,0.5-0.8,1l-0.5,66.3v75.6c0,0,0,0.1,0,0.1c0,0,0.4,3.8-2.2,6.7c-2,2.2-5.3,3.4-9.8,3.4c-14.5,0-14.5-8.6-14.5-11.5    v-75c0-0.6-0.4-1-1-1h-2.5h-3.3h-2.5c-0.6,0-1,0.4-1,1v75c0,2.8,0,11.5-14.5,11.5c-4.5,0-7.8-1.1-9.8-3.4    c-2.6-2.9-2.2-6.7-2.2-6.7c0,0,0-0.1,0-0.1l0-75.6l0.5-68.3c0-0.5-0.3-0.9-0.8-1c-0.1,0-0.2,0-0.2,0c-0.4,0-0.7,0.2-0.9,0.6    l-20.1,41c-0.4,0.5-3.7,4.3-9,4.3c-1.6,0-3.2-0.3-4.9-1c-5.7-2.2-6.5-7.8-5.4-12.3c0.9-3.3,21.9-46.4,32-67.1    c3.4-6.9,5.8-11.9,6.7-13.7c2.5-5.2,7-7.8,13.3-7.8h18.7h3.3H163.1 M163.1,142c-2.6,0-13.2,0-18.7,0c-2,0-3.3,0-3.3,0    c-5.5,0-16.1,0-18.7,0c-3.6,0-10.6,0.7-14.2,8.4c-3.7,7.8-37.5,76.5-38.7,81c-1.3,5.1-0.1,11.1,6,13.4c1.9,0.7,3.7,1,5.2,1    c6.3,0,9.8-4.8,9.8-4.8l20.1-41.1l-0.5,68.3v75.6c0,0-1.3,11.2,13,11.2c14.2,0,15.5-7.9,15.5-12.5c0-4.5,0-75,0-75h2.5h3.3h2.5    c0,0,0,70.4,0,75c0,4.5,1.3,12.5,15.5,12.5c14.2,0,13-11.2,13-11.2v-75.6l0.5-66.3l19.1,39.1c0,0,3.5,4.8,9.8,4.8    c1.6,0,3.3-0.3,5.2-1c6.1-2.4,7.3-8.3,6-13.4c-1.1-4.4-35-73.1-38.7-81C173.7,142.7,166.7,142,163.1,142L163.1,142z"/>
                    </g>
                </g>
                <g id="boy-outline" transform="translate(140 170) scale(0.5)">
                    <g>
                        <path className="fill-white" d="M143.5,88.3c13.9,0,25.2,11.3,25.2,25.2c0,13.9-11.3,25.2-25.2,25.2c-13.9,0-25.2-11.3-25.2-25.2    C118.3,99.6,129.6,88.3,143.5,88.3 M143.5,87.3c-14.5,0-26.2,11.7-26.2,26.2c0,14.5,11.7,26.2,26.2,26.2    c14.5,0,26.2-11.7,26.2-26.2C169.7,99,158,87.3,143.5,87.3L143.5,87.3z"/>
                    </g>
                    <g>
                        <path className="fill-white" d="M163.1,143c6.4,0,10.9,2.6,13.3,7.8c0.9,1.8,3.3,6.8,6.7,13.7c10.1,20.7,31.1,63.8,32,67.1    c1.2,4.5,0.4,10-5.4,12.3c-1.7,0.6-3.3,1-4.9,1c-5.3,0-8.5-3.8-9-4.3l-19-39c-0.2-0.3-0.5-0.6-0.9-0.6c-0.1,0-0.1,0-0.2,0    c-0.5,0.1-0.8,0.5-0.8,1l-0.5,66.3v75.6c0,0,0,0.1,0,0.1c0,0,0.4,3.8-2.2,6.7c-2,2.2-5.3,3.4-9.8,3.4c-14.5,0-14.5-8.6-14.5-11.5    v-75c0-0.6-0.4-1-1-1h-2.5h-3.3h-2.5c-0.6,0-1,0.4-1,1v75c0,2.8,0,11.5-14.5,11.5c-4.5,0-7.8-1.1-9.8-3.4    c-2.6-2.9-2.2-6.7-2.2-6.7c0,0,0-0.1,0-0.1l0-75.6l0.5-68.3c0-0.5-0.3-0.9-0.8-1c-0.1,0-0.2,0-0.2,0c-0.4,0-0.7,0.2-0.9,0.6    l-20.1,41c-0.4,0.5-3.7,4.3-9,4.3c-1.6,0-3.2-0.3-4.9-1c-5.7-2.2-6.5-7.8-5.4-12.3c0.9-3.3,21.9-46.4,32-67.1    c3.4-6.9,5.8-11.9,6.7-13.7c2.5-5.2,7-7.8,13.3-7.8h18.7h3.3H163.1 M163.1,142c-2.6,0-13.2,0-18.7,0c-2,0-3.3,0-3.3,0    c-5.5,0-16.1,0-18.7,0c-3.6,0-10.6,0.7-14.2,8.4c-3.7,7.8-37.5,76.5-38.7,81c-1.3,5.1-0.1,11.1,6,13.4c1.9,0.7,3.7,1,5.2,1    c6.3,0,9.8-4.8,9.8-4.8l20.1-41.1l-0.5,68.3v75.6c0,0-1.3,11.2,13,11.2c14.2,0,15.5-7.9,15.5-12.5c0-4.5,0-75,0-75h2.5h3.3h2.5    c0,0,0,70.4,0,75c0,4.5,1.3,12.5,15.5,12.5c14.2,0,13-11.2,13-11.2v-75.6l0.5-66.3l19.1,39.1c0,0,3.5,4.8,9.8,4.8    c1.6,0,3.3-0.3,5.2-1c6.1-2.4,7.3-8.3,6-13.4c-1.1-4.4-35-73.1-38.7-81C173.7,142.7,166.7,142,163.1,142L163.1,142z"/>
                    </g>
                </g>
            </g>
        </svg>
    )
}