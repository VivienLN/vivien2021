import Image from 'next/image'
import Service from './service'

export default function Services() {
    return (
        <section className="py-20">
            <h2 className="text-3xl text-secondary text-center mb-16">Services</h2>
            <div className="grid grid-cols-3 text-center container mx-auto px-4 gap-8">
                <Service title="Etudier" icon="https://placehold.it/100x100">
                    <p className="mb-4">On prend un café et on parle de votre besoin. Je vous propose des solutions adaptées et sur-mesure.</p>
                    <p>Je m’appuie sur un réseau de spécialistes en design, UX, SEO, etc.</p>
                </Service>
                <Service title="Construire" icon="https://placehold.it/100x100">
                    <p className="mb-4">Je suis développeur full-stack. Ca veut dire que je m'occupe de tout : vous pouvez vous détendre.</p>
                    <p>Je réalise des sites et applications rapides, sécurisés et robustes.</p>
                </Service>
                <Service title="Accompagner" icon="https://placehold.it/100x100">
                    <p>Je continue à vous accompagner après la première livraison, pour la maintenance et les évolutions futures.</p>
                </Service>
            </div>
        </section>
    )
}