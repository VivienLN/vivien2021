import Image from 'next/image'
import styles from './section.module.scss'

export default function Section() {
    return (
        // <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center">
        <header className="text-center">
            <div className="bg-primary">            
                <div className={styles.introTop}>
                    <div className="container mx-auto px-4 py-32">
                        <h1 className="text-4xl text-base mb-8">
                            Hello,<br/>
                            Je m'appelle Vivien
                        </h1>
                        <p className="text-2xl text-base">développeur web depuis 10 ans</p>
                    </div>
                </div>
            </div>
            <div className={styles.avatar}>
                <Image src="https://placehold.it/300x340" width={300} height={340} alt="Là c'est moi" />
            </div>
            <div className="text-xl w-9/12 mx-auto py-24">
                <p className="mb-4">
                    J'accompagne des entreprises et des agences dans la création de sites &amp; applications web.
                </p>
                <p className="mb-4">
                    Mes outils de choix sont <strong>Laravel</strong> et <strong>Wordpress</strong>.
                </p>
                <p>
                    Scrollez pour en savoir plus ou allez voir mon CV.
                </p>
            </div>
        </header>
    )
}