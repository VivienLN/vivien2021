import Image from 'next/image'
import Container from '../container'
import styles from './intro.module.scss'

export default function Section() {
    return (
        <header className={"relative " + styles.introHeader}>
            <div className={"text-center bg-primary md:fixed top-0 left-0 right-0 " + styles.introContent}>
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
                                Continuez pour en savoir plus ou allez voir <a target="_blank" className="link link-white" href="https://www.linkedin.com/in/vivien-le-neez-8364236a/">mon profil linkedin</a> ou <a target="_blank" className="link link-white" href="https://www.malt.fr/profile/vivienln">ma page malt</a>.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className={"bg-white absolute left-0 right-0 z-10 items-center transform -skew-y-3 origin-top-left " + styles.introEndBg }></div>
        </header>
    )
}