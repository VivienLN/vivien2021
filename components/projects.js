import Image from 'next/image'

export default function Projects() {
    return (
        <section className="py-20">
            <h2 className="text-3xl text-secondary text-center mb-16">Services</h2>
            <div className="grid grid-cols-3 text-center container mx-auto px-4 gap-6">
                <div className="mb-12">
                    <div className="mb-4">
                        <Image src="https://placehold.it/100x100" width={100} height={100} alt="" />
                    </div>
                    <h3 className="text-2xl mb-8">Etudier</h3>
                    <p>On prend un café et on parle de votre besoin. Je vous propose des solutions adaptées et sur-mesure.</p>
                    <p>Je m’appuie sur un réseau de spécialistes en design, UX, SEO, etc.</p>
                </div>
                <div className="mb-12">
                    <div className="mb-4">
                        <Image src="https://placehold.it/100x100" width={100} height={100} alt="" />
                    </div>
                    <h3 className="text-2xl mb-8">Construire</h3>
                    <p>Je suis développeur full-stack. Ca veut dire que je m'occupe de tout : vous pouvez vous détendre.</p>
                    <p>Je réalise des sites et applications rapides, sécurisés et robustes.</p>
                </div>
                <div className="mb-12">
                    <div className="mb-4">
                        <Image src="https://placehold.it/100x100" width={100} height={100} alt="" />
                    </div>
                    <h3 className="text-2xl mb-8">Accompagner</h3>
                    <p>Je continue à vous accompagner après la première livraison, pour la maintenance et les évolutions futures.</p>
                </div>
            </div>
        </section>
    )
}