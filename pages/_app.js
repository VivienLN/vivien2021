import styles from "../css/app.scss"
import { AnimatePresence, motion } from "framer-motion";
import React from 'react'

export default function App({Component, pageProps, router}) {
    const [isBrowserNavigation, setIsBrowserNavigation] = React.useState(false);

    React.useEffect(() => {
        router.beforePopState(({ url, as, options }) => {
            setIsBrowserNavigation(true)
            return true;
        })
    }, [])

    return (
        <AnimatePresence exitBeforeEnter onExitComplete={() => {handleExitComplete(isBrowserNavigation); setIsBrowserNavigation(false);}}>
            <Component {...pageProps} key={router.route} />
            <motion.div
                key={router.route + "AnimOut"}
                className="bg-primary inset-0 fixed z-40 origin-bottom-left"
                initial={{ scaleY: 0, }}
                exit={isBrowserNavigation ? null : { scaleY: 1 }}
                transition={{ delay: 0, duration: .8, ease: "easeInOut" }}
            />
            <motion.div
                key={router.route + "AnimIn"}
                className="bg-primary inset-0 fixed z-40 origin-top-left"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={isBrowserNavigation ? null : { scaleY: 0 }}
                transition={{ delay: 0, duration: .8, ease: "easeInOut" }}
            />

        </AnimatePresence>
    )
}

function handleExitComplete(isBrowserNavigation) {
    // Window not defined, we are Server side, dont bother
    if(typeof window === 'undefined') {
        console.log('no window')
        return false
    }

    if(isBrowserNavigation) {
        
    } else {
        if(window.location.hash) {
            let target = document.querySelector(window.location.hash)
            if(target) {
                window.scrollTo(0, target.offsetTop)
            }
        } else {
            window.scrollTo(0, 0)
        }
    }
}