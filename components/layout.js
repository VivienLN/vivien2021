import { AnimatePresence, motion } from "framer-motion"
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <div>
            {children}
            <Footer />
        </div>
    )
}