import Container from './container'

export default function Footer(props) {
    return (
        <div className="bg-gray-darkest relative z-10 footerWrapper">
            <style jsx>{`
                .footerWrapper {
                    padding-top: calc(5.25vw + 5rem);
                }
                .footerSlanted {
                    height: 5.25vw;
                }
                .footerContent {
                    padding-bottom: 5.25vw;
                }
            `}</style>
            
    
            <div className="bg-black">
                <div className="footerSlanted bg-black transform -skew-y-3 origin-top-left"></div>
                <div className="footerContent text-right">
                    <Container>
                        Il n'y a plus rien à voir ici, mais vous pouvez toujours <button className="link link-white" onClick={e => (typeof window !== "undefined") && window.scrollTo({top: 0, behavior: "smooth"})}>remonter</button>.
                    </Container>
                </div>
            </div>
        </div>
    )
}