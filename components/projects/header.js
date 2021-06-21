import Link from "next/link"
import MetaList from "../../components/projects/meta-list";
import Head from "next/head"

export default function Header(props) {
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
        <div>
            <Head>
                <title>{ props.data.name } - Vivien</title>
            </Head>
            <div style={titleStyle}>
                <div className="container mx-auto px-4 text-center text-white">
                    <h1 className="text-2xl md:text-4xl font-extrabold">{ props.data.name }</h1>
                    <p className="md:text-xl font-extrabold">{ props.data.subtitle }</p>
                    <h2><Link href="/#section-projects" scroll={false}><a>Return to index</a></Link></h2>
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
                                { props.data.meta.map((meta, i) => <MetaList key={i} title={ meta.title } items={ meta.items } />) }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}