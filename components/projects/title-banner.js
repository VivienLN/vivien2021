import Container from '../container'
import Link from "next/link"

export default function TitleBanner(props) {
    return (
        <>
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
            `}</style>

            <div className="titleBanner">
                <Container>
                    <div className="text-center text-white">
                        <h1 className="text-2xl md:text-4xl font-extrabold">{ props.title }</h1>
                        <p className="md:text-xl font-extrabold">{ props.subtitle }</p>
                        <h2><Link href="/#section-projects" scroll={false}><a>Return to index</a></Link></h2>
                    </div>
                </Container>
            </div>
            <div className="bg-secondary-darker">
                <div className="titleBannerBg bg-secondary-darker pt-8 pb-12 items-center transform -skew-y-3 origin-top-right">
                </div>
            </div>
        </>
    )
}