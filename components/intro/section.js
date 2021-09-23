import Container from '../container'
import ScrollFactor from '../scroll-factor'

export default function Section() {
    return (
        <header className="relative overflow-hidden introHeader">
            <style jsx>{`
                .introHeader, .introContent {
                    min-height: 90vh;
                }
            `}</style>
            <div className="bg-secondary-darker">
                <Container>
                    <ScrollFactor ratio={.2}>
                        <div className="relative flex flex-col justify-center pt-20 pb-10 introContent">
                            <h1 className="text-base mb-20">
                                <span className="text-2xl md:text-4xl font-extrabold text-primary">Vos projets web, simplement.</span>
                            </h1>
                            <div className="text-xl mb-12">
                                <p className="mb-4"><strong className="text-secondary">Salut&nbsp;!</strong> Je m'appelle Vivien et je suis développeur web.</p>
                                <p className="mb-4">Après 12 ans d'expérience auprès de grands groupes, j'accompagne maintenant des start-ups et entreprises dans tous leurs projets web.</p>
                            </div>
                        </div>
                    </ScrollFactor>
                </Container>
            </div>
        </header>
    )
}