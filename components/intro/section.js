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
            <div className="bg-primary">
                <Container>
                    <ScrollFactor ratio={.2}>
                        <div className="text-black relative flex flex-col justify-center pt-20 pb-10 introContent">
                            <h1 className="mb-20">
                                <span className="text-2xl md:text-4xl font-extrabold">Vos projets web,<br/>simplement.</span>
                            </h1>
                            <div className="text-xl mb-12">
                                <p className="mb-4"><strong className="text-secondary-dark">Salut&nbsp;!</strong> Je m'appelle Vivien et je suis développeur web.</p>
                                <p className="mb-4">Après 12 ans d'expérience auprès de grands groupes, j'accompagne maintenant des start-ups et entreprises dans tous leurs projets web.</p>
                            </div>
                        </div>
                    </ScrollFactor>
                </Container>
            </div>
        </header>
    )
}