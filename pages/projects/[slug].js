import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"
import { useRouter } from 'next/router'
import { motion } from "framer-motion";

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
        // minHeight:"60vh",
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

            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0, duration: 2}}>

                <div style={titleStyle}>
                    <div className="container mx-auto px-4 text-center text-white">
                        <h1 className="text-4xl font-extrabold">The Sinking City</h1>
                        <p className="text-xl font-extrabold">Site officiel</p>

                    </div>
                </div>

                <header>
                    <div className="bg-secondary-darker">
                        <div className="bg-secondary-darker pt-8 pb-12 flex items-center transform -skew-y-3 origin-top-right" style={{minHeight: "40vh"}}>
                        </div>
                    </div>
                    <div style={heroStyle}></div>
                    <div className="relative z-10 bg-white">
                        <div className="bg-primary py-20 transform -skew-y-3 origin-top-left">
                            <div className="transform skew-y-3 container mx-auto px-4 py-8">
                                <div className="grid grid-cols-5 gap-4">
                                    <div>
                                        <h2 className="font-extrabold my-4">Rôles</h2>
                                        <ul>
                                            <li>Gestion de projet</li>
                                            <li>Développement</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="font-extrabold my-4">Technos</h2>
                                        <ul>
                                            <li>Canvas API</li>
                                            <li>Bootstrap</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="font-extrabold my-4">Equipe</h2>
                                        <ul>
                                            <li>Carburant</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="font-extrabold my-4">Client</h2>
                                        <ul>
                                            <li>Bigben Interactive</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="font-extrabold my-4">Année</h2>
                                        <ul>
                                            <li>2019</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                    
                <div className="relative z-10 bg-white">
                    <div className="py-20 h-screen">
                        <h1 className="container mx-auto px-4 text-3xl font-extrabold">Blablabla...</h1>
                    </div>
                    <div className="py-20">
                        <p>Oh, hi!</p>
                    </div>

                </div>

                <p>({slug})</p>
                <h2><Link href="/"><a>Return to index</a></Link></h2>

            </motion.div>
        </Layout>
    )
}