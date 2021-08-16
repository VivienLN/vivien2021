import InViewTransition from '../../in-view-transition'
import { useInView } from 'react-intersection-observer'
import Section from './section'
import Hexagon from '../../icons/hexagon'
import React, { useState, useEffect } from 'react'

export default function AnimatedNumber(props) {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: .4,
        triggerOnce: true,
        delay: props.delay || 0
    });
    const [currentValue, setCurrentValue] = useState(0)
    let align = props.align || 'left'
    let numberTransitionDuration = 2000
    let numberTransitionDelay = 10
    let numberTransitionStep = props.value / (numberTransitionDuration / numberTransitionDelay)

    useEffect(() => {
        let id = setInterval(() => {
            if(inView) {
                setCurrentValue(Math.min(props.value, currentValue + numberTransitionStep));
            }
        }, numberTransitionDelay);
        return () => clearInterval(id);
    });

    return (
        <Section>
            <style jsx>{`
                .hexagon :global(svg path) {
                    transition: 2.5s cubic-bezier(0.165, 0.840, 0.440, 1.000);
                    stroke-dasharray: 470;
                    stroke-dashoffset: 470;
                }                
                .hexagon.inView :global(svg path) {
                    stroke-dashoffset: 0;
                }
            `}</style>
            <div className="mx-auto md:w-3/4 lg:w-1/2">
                <div className="md:grid grid-cols-2 gap-2">
                    <div className={align == 'right' ? 'col-start-2' : 'col-start-1'} >
                        <InViewTransition>
                            <div ref={ref} className="relative">
                                <div className="text-gray-darker">
                                    <Hexagon />
                                </div>
                                <div className={ 'text-primary w-full h-full absolute inset-0 hexagon ' + (inView ? 'inView' : '') }>
                                    <Hexagon />
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-center text-center">
                                    <div className="text-3xl font-extrabold">{ pretiffyValue(currentValue) }</div>
                                    <div className="text-base">{ props.label }</div>
                                </div>
                            </div>
                        </InViewTransition>
                    </div>
                </div>
            </div>
        </Section>
    )
}

function pretiffyValue(value) {
    return Math.ceil(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}