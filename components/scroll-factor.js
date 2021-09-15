import { createRef, useRef, useState, useEffect } from 'react'

export default function ScrollFactor(props) {
    const wrapperRef = useRef(null)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        if(typeof window !== "undefined") {
            const getCenterY = () =>  {
                let bounds = wrapperRef.current.getBoundingClientRect()
                return bounds.top + (bounds.bottom - bounds.top) / 2
            }
            const originalY = getCenterY()

            const handleScroll = event => {
                let windowHeight = window.innerHeight
                let posY = getCenterY()
                // The position where the element offset is 0
                let origin = (originalY < windowHeight && originalY > 0) ? originalY : windowHeight / 2;
                setOffset(-(props.ratio - 1) * (origin  - posY))
            }            
            handleScroll()
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div ref={wrapperRef} >
            <div className="scrollFactorTransform" style={{transform: 'translateY(' + offset + 'px)'}}>
                { props.children }
            </div>
        </div>
    )
}