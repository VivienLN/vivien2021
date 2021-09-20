import Container from "../../container"
import ScrollFactor from "../../scroll-factor"

export default function HeroBanner(props) {
    return (
        <div className="heroBanner relative">
            <style jsx>{`
                .heroBanner {
                    height: 95vh;
                }
                .heroBannerBg {
                    background: url('${ props.url }') no-repeat center center;
                    background-size: cover;
                    height: 100vh;
                }
                .content > * {
                    display: block;
                    opacity: 0; 
                    animation: 1.2s cubic-bezier(0.165, 0.840, 0.440, 1.000) .4s 1 forwards showTitle;
                }
                .content > *:nth-child(2) {
                    animation-delay: .8s
                }

                @keyframes showTitle {
                    from { 
                        transform: translateY(100%);
                        opacity: 0; 
                        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
                    }
                    to { 
                        transform: translateY(0); 
                        opacity: 1; 
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); 
                    }
                }
            `}</style>
            <div className="absolute left-0 right-0 bottom-0 top-0 overflow-hidden">
                <ScrollFactor ratio={.1}>
                    <div className="heroBannerBg"></div>
                </ScrollFactor>
            </div>
            <Container className="h-full">
                <div className="py-20 h-full flex flex-col justify-center filter drop-shadow-xl">
                    <ScrollFactor ratio={0.4}>
                        <div className="content">
                            <h1 className="text-2xl lg:text-4xl font-extrabold mb-8">{ props.title }</h1>
                            <p className="lg:text-xl font-extrabold text-primary">{ props.subtitle }</p>
                        </div>
                    </ScrollFactor>
                </div>
            </Container>
        </div>
    )
}