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
                                    Depuis 12 ans, j'accompagne des entreprises et des agences dans la création de sites et applications web.
                                </p>
                                <p className="mb-4">
                                    Mes outils de choix sont <strong>Laravel</strong> et <strong>Wordpress</strong>.
                                </p>
                                <p>
                                    Continuez pour en savoir plus ou allez voir <a target="_blank" className="link" href="https://www.linkedin.com/in/vivien-le-neez-8364236a/">mon profil linkedin</a> ou <a target="_blank" className="link" href="https://www.malt.fr/profile/vivienln">ma page malt</a>.
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