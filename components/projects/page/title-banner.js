import Container from '../../container'
import Link from "next/link"

export default function TitleBanner(props) {
    return (
        <>
            <style jsx>{`
                .titleBanner {
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
                    <div className="">
                        <h1 className="text-3xl font-extrabold ">{ props.title }</h1>
                        <p className="text-xl font-extrabold text-primary">{ props.subtitle }</p>
                    </div>
                </Container>
            </div>
            <div className="bg-black">
                <div className="titleBannerBg bg-black pt-8 pb-12 items-center transform -skew-y-3 origin-top-right">
                </div>
            </div>
        </>
    )
}