import Image from 'next/image'
import NavLink from '../nav-link'
import Container from '../container'

export default function Section() {
    return (
        <header className="relative">
            <style jsx>{`
                header {
                    min-height: 95vh;
                }
                .introHeaderBg {
                    min-height: 95vh;
                }
                // height = 100vh * tan(3) // rounded
                .introEndBg {
                    height: 5.25vw;
                    bottom: -5.25vw;
                }
            `}</style>

            <div className="introHeaderBg text-center bg-primary fixed top-0 left-0 right-0">
                <h1 className="text-base pt-16 pb-20">
                    <span className="text-4xl font-extrabold">Salut ! Moi c'est Vivien, <br/>développeur web</span>
                </h1>
                <Container>
                    <div className="w-3/4 md:w-1/2 mx-auto mb-12">
                        <div className="mb-8 md:w-1/2 mx-auto">
                            <Image src="/images/profilepic.png" width={255} height={287} alt="Là c'est moi" />
                        </div>
                        <p className="mb-4">
                            Développeur web depuis 12 ans, j'accompagne des entreprises et des agences dans la création de sites &amp; applications web.
                        </p>
                        <p className="mb-4">
                            Mes outils de choix sont <strong>Laravel</strong> et <strong>Wordpress</strong>.
                        </p>
                        <p>
                            Continuez pour en savoir plus ou allez voir mon CV.
                        </p>
                    </div>
                </Container>
                <nav>
                    <NavLink href="#services">Services</NavLink>
                    <NavLink href="#realisations">Réalisations</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </nav>
            </div>

            <div className="bg-white absolute left-0 right-0 z-10 items-center transform -skew-y-3 origin-top-left introEndBg"></div>
        </header>
    )
}