import Image from 'next/image'
import Container from '../container'

export default function Section() {
    return (
        <header className="relative">
            <style jsx>{`
                header {
                    min-height: 95vh;
                }
                .introContent {
                    min-height: 95vh;
                }
                // height = 100vh * tan(3) // rounded
                .introEndBg {
                    height: 5.25vw;
                    bottom: -5.25vw;
                }
            `}</style>

            <div className="introContent text-center bg-primary md:fixed top-0 left-0 right-0">
                <Container className="h-full">
                    <div className="h-full py-20 md:py-0 flex flex-col justify-evenly pt-10 pb-20">
                        <h1 className="text-base">
                            <span className="text-2xl md:text-3xl font-extrabold"><strong className="fat-shadow-white">Salut !</strong> Moi c'est Vivien, <br/>développeur web</span>
                        </h1>
                        <div className="md:w-1/2 mx-auto my-12 md:my-0">
                            <Image src="/images/profilepic.png" width={255*.75} height={287*.75} alt="Là c'est moi" />
                        </div>
                        <div className="w-3/4 md:w-1/2 mx-auto">
                            <p className="mb-4">
                                Depuis 12 ans, j'accompagne des entreprises et des agences dans la création de sites &amp; applications web.
                            </p>
                            <p className="mb-4">
                                Mes outils de choix sont <strong>Laravel</strong> et <strong>Wordpress</strong>.
                            </p>
                            <p>
                                Continuez pour en savoir plus ou allez <a href="#">voir mon CV</a>.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="bg-white absolute left-0 right-0 z-10 items-center transform -skew-y-3 origin-top-left introEndBg"></div>
        </header>
    )
}