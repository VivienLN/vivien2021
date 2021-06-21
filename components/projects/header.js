import Link from "next/link"
import Meta from "../../components/projects/meta";
import Head from "next/head"
import Container from '../container'

export default function Header(props) {
    return (
        <header>
            <style jsx>{`
                .titleBanner {
                    background: url('/images/test-project-hero.jpg') no-repeat fixed center center;
                    background-size: cover;
                    -webkit-text-fill-color: transparent;
                    -webkit-background-clip: text;
                    position: fixed;
                    top: 20vh;
                    width: 100%;
                    margin-top: -3rem;
                    z-index: 1;
                }
                .titleBannerBg {
                    min-height: 40vh;
                }
                .heroBanner {
                    background: url('/images/test-project-hero.jpg') no-repeat fixed center center;
                    background-size: cover;
                    height: 80vh;
                }
            `}</style>

            <Head>
                <title>{ props.data.name } - Vivien</title>
            </Head>

            <div className="titleBanner">
                <Container>
                    <div className="text-center text-white">

                        <h1 className="text-2xl md:text-4xl font-extrabold">{ props.data.name }</h1>
                        <p className="md:text-xl font-extrabold">{ props.data.subtitle }</p>
                        <h2><Link href="/#section-projects" scroll={false}><a>Return to index</a></Link></h2>
                    </div>
                </Container>
            </div>

            <div className="bg-secondary-darker">
                <div className="titleBannerBg bg-secondary-darker pt-8 pb-12 items-center transform -skew-y-3 origin-top-right">
                </div>
            </div>

            <div className="heroBanner"></div>

            <Meta data={ props.data.meta }/>
        </header>
    )
}