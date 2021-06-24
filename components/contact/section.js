import Container from '../container'
import SectionBase from '../section'

export default function Section() {
    return (
        <SectionBase title="Contact">
            <Container>
                <div className="md:grid grid-cols-3 gap-4 mb-12">
                    <div className="col-span-2">
                        <h3 className="text-xl mb-8 font-extrabold fat-shadow-secondary-light">Vous avez une question ou un projet&nbsp;?</h3>
                        <p className="mb-4">On en discute avec plaisir&nbsp;! (ça n'engage à rien&nbsp;;))</p>
                        <p><a target="_blank" className="link" href="mailto:vivienleneez@gmail.com">vivienleneez@gmail.com</a></p>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-xl mb-8 font-extrabold fat-shadow-secondary-light">Envie d'en savoir plus&nbsp;?</h3>
                        <p className="mb-4">Venez me faire coucou par là&nbsp;:</p>
                        <ul>
                            <li className="inline-block mr-4">
                                <a target="_blank" className="link" href="https://www.linkedin.com/in/vivien-le-neez-8364236a/">linkedin</a>
                            </li>
                            <li className="inline-block mr-4">
                                <a target="_blank" className="link" href="https://twitter.com/vivien_le_neez">twitter</a>
                            </li>
                            <li className="inline-block mr-4">
                                <a target="_blank" className="link" href="https://www.malt.fr/profile/vivienln">malt</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </SectionBase>
    )
}