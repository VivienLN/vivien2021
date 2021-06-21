import Image from 'next/image'
import NavLink from '../nav-link'
import Container from '../container'

export default function Section() {
    return (
        <header className="text-center">
            <h1 className="text-base pt-16 pb-20">
                <span className="text-3xl">Hello, moi c'est <strong>Vivien</strong></span><br/>
                <span className="text-xl">développeur web depuis 12 ans</span>
            </h1>
            <div className="transform -skew-y-3 bg-primary mb-16">
                <div className="transform skew-y-3 relative -top-8 pb-4">
                    <Container>
                        <div className="mb-8">
                            <Image src="/images/profilepic.png" width={255} height={287} alt="Là c'est moi" />
                        </div>
                        <p className="mb-4">
                            J'accompagne des entreprises et des agences dans la création de sites &amp; applications web.
                        </p>
                        <p className="mb-4">
                            Mes outils de choix sont <strong>Laravel</strong> et <strong>Wordpress</strong>.
                        </p>
                        <p>
                            Continuez pour en savoir plus ou allez voir mon CV.
                        </p>
                    </Container>
                </div>
            </div>
            <nav>
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#realisations">Réalisations</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </nav>
        </header>
    )
}