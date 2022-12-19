import { useState } from "react"

export const MainSVG = () => {
    const [tier,setTier] = useState()
    const [title,setTitle] = useState(" ")

    return (
        <div className="">
            <p className="transition-all -mb-8 font-roboto text-center text-white text-4xl uppercase" style={{WebkitTextFillColor:"transparent",WebkitTextStroke:"1px"}}> {title}</p>
            <svg viewBox="0 0 500 500">
                <g transform="translate(250,250)">
                    <g onClick={() => setTier(3)}>
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
                            <g transform="translate(-181.818181818181s8,2.2266305439042785e-14)">
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
                    <g onClick={() => setTier(2)}>
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
                    <g onClick={() => setTier(1)}>
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
                <path fill="none" stroke="#ffffff" className="stroke-1" marker-end="url(#my-arrow)" d="M250,40L250,35"></path>
                <defs>
                    <marker id="my-arrow" refX="15" refY="8" markerWidth="17" markerHeight="16" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                        <path d="M 1 1 Q 7 5 16 8 Q 7 11 1 15 L 4 8 Z" className="fill-white stroke-white"></path>
                    </marker>
                </defs>
            </svg>
        </div>
    )
}