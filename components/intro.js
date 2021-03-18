import Image from 'next/image'

export default function Intro() {
    return (
        <header className="text-center">
            <div className="container mx-auto px-4 py-8 h-screen flex flex-col justify-center">
                <h1 className="text-3xl">
                    Hello,<br/>
                    Je m'appelle Vivien
                </h1>
                <p className="text-xl">développeur web depuis 10 ans</p>
                <div className="py-16">
                    <Image src="https://placehold.it/220x220" width={220} height={220} alt="Là c'est moi" />
                </div>
                <div className="text-xl w-9/12 mx-auto">
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
            </div>
        </header>
    )
}