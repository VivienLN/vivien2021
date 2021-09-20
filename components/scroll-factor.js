import { createRef, useRef, useState, useEffect } from 'react'

export default function ScrollFactor(props) {
    const wrapperRef = useRef()
    const requestRef = useRef()
    const [offset, setOffset] = useState(0)

    var originalY = null
    const getCenterY = () =>  {
        let bounds = wrapperRef.current.getBoundingClientRect()
        return bounds.top + (bounds.bottom - bounds.top) / 2
    }

    const updateOffset = () => {
        if(!wrapperRef.current) {
            return
        }
        originalY = (originalY === null) ? getCenterY() : originalY
        let windowHeight = window.innerHeight
        let posY = getCenterY()
        let origin = (originalY < windowHeight && originalY > 0) ? originalY : windowHeight / 2
        setOffset(-(props.ratio - 1) * (origin  - posY))

        requestRef.current = requestAnimationFrame(updateOffset)
    }

    useEffect(() => {
        if(typeof window !== "undefined") {
            requestRef.current = requestAnimationFrame(updateOffset)
            return () => cancelAnimationFrame(requestRef.current)
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