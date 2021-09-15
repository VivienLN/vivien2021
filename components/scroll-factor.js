import { createRef, useRef, useState, useEffect } from 'react'

export default function ScrollFactor(props) {
    const wrapperRef = useRef(null)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        if(typeof window !== "undefined") {
            const handleScroll = event => {
                let windowHeight = window.innerHeight
                let wrapperBounds = wrapperRef.current.getBoundingClientRect()
                let posY = wrapperBounds.top + (wrapperBounds.bottom - wrapperBounds.top) / 2
                setOffset(-(windowHeight / 2 - posY) * (props.ratio - 1))
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