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
                className="bg-secondary-dark inset-0 fixed z-50 origin-top-right"
                initial={{ scaleX: 0, }}
                exit={isBrowserNavigation ? null : { scaleX: 1 }}
                transition={{ delay: 0, duration: .8, ease: "easeIn" }}
            />
            <motion.div
                key={router.route + "AnimIn"}
                className="bg-secondary-dark inset-0 fixed z-50 origin-top-left"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={isBrowserNavigation ? null : { scaleX: 0 }}
                transition={{ delay: 0, duration: .8, ease: "easeOut" }}
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