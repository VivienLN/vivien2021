import ButtonScroll from './button-scroll'
import Container from '../container'
import styles from './intro.module.scss'
import ScrollFactor from '../scroll-factor'

export default function Section() {
    return (
        <header className={"relative overflow-hidden " + styles.introHeader}>
            <div className={"bg-black"}>
                <Container>
                    <ScrollFactor ratio={.2}>
                        <div className={"relative flex flex-col justify-center pt-10 pb-20 " + styles.introContent}>
                            <h1 className="text-base mb-12">
                                <span className="text-2xl md:text-3xl font-extrabold"><strong className="fat-shadow-secondary-dark">Hello !</strong><br/> Je suis Vivien, développeur web</span>
                            </h1>
                            <div className="text-lg mb-12">
                                <p className="mb-4">
                                    Depuis 12 ans j'accompagne, en agence, des clients de tous horizons tels que Microsoft, Universal ou SNCF.
                                </p>
                                <p className="mb-4">
                                    Aujourd'hui je mets mes compétences au services de vos projets.
                                </p>
                            </div>
                            <ButtonScroll />
                        </div>
                    </ScrollFactor>
                </Container>
            </div>
        </header>
    )
}