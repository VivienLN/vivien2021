import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from "framer-motion";
import MetaList from "../../components/projects/meta-list";

export default function Project() {
    const router = useRouter()
    const { slug } = router.query

    let heroStyle = {
        background: "url('/images/test-project-hero.jpg') no-repeat fixed center center",
        backgroundSize: "cover",
        height: "80vh",
    }

    let titleStyle = {
        background: "url('/images/test-project-hero.jpg') no-repeat fixed center center",
        backgroundSize: "cover",
        "-webkit-text-fill-color": "transparent",
        "-webkit-background-clip": "text",
        position: "fixed",
        top: "20vh",
        width: "100%",
        marginTop: "-3rem",
        zIndex: "1"
    }

    return (
        <Layout>
            <Head>
                <title>Project test</title>
            </Head>

            {/* <motion.div
                className="bg-primary inset-0 fixed z-50 origin-top-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.div
                className="bg-primary inset-0 fixed z-50 origin-top-right"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
            /> */}

            <div style={titleStyle}>
                <div className="container mx-auto px-4 text-center text-white">
                    <h1 className="text-2xl md:text-4xl font-extrabold">The Sinking City</h1>
                    <p className="md:text-xl font-extrabold">Site officiel</p>
                    <h2><Link href="/#section-projects" scroll={!false}><a>Return to index</a></Link></h2>
                </div>
            </div>

            <header>
                <div className="bg-secondary-darker">
                    <div className="bg-secondary-darker pt-8 pb-12 items-center transform -skew-y-3 origin-top-right" style={{ minHeight: "40vh" }}>
                    </div>
                </div>
                <div style={heroStyle}></div>
                <div className="relative z-10 bg-white">
                    <div className="bg-primary py-12 md:py-20 transform -skew-y-3 origin-top-left">
                        <div className="transform skew-y-3 container mx-auto px-4 py-8">
                            <div className="md:flex justify-between">
                                <MetaList title="Rôles" items={['Gestion de projet', 'développement']} />
                                <MetaList title="Technos" items={['Canvas API', 'Bootstrap']} />
                                <MetaList title="Equipe" items={['Carburant']} />
                                <MetaList title="Client" items={['Bigben Interactive']} />
                                <MetaList title="Année" items={['2019']} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="relative z-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="py-20 h-screen">
                        <h1 className="text-3xl font-extrabold">Blablabla...</h1>
                    </div>
                    <div className="py-20">
                        <p>Oh, hi!</p>
                    </div>

                    <p>({slug})</p>
                </div>
            </div>
        </Layout>
    )
}