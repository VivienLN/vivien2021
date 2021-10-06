import Container from '../container'
import SectionBase from '../section'
import { MailIcon, DeviceMobileIcon } from '@heroicons/react/solid'
import ButtonCopy from '../button-copy'

export default function Section() {
    const email = "vivienleneez@gmail.com"
    return (
        <SectionBase title="Contact" className="bg-secondary-dark section-contact flex flex-col justify-center">
            <style jsx>{`
                 :global(.section-contact) {
                    min-height: 70vh;
                }
            `}</style>
            <Container>
                <div className="pb-20">
                    <h3 className="text-xl mb-8 font-extrabold">On parle de vos projets&nbsp;?</h3>
                    <p className="mb-4">
                        Pour qu'on se rencontre ou simplement discuter de vos projets, envoyez-moi un message&nbsp;!
                    </p>
                    <p className="mb-4">
                        <a target="_blank" className="link" href="mailto:vivienleneez@gmail.com">
                            <MailIcon className="w-6 h-6 inline-block mr-2" />
                            <span>{ email }</span>
                        </a>
                        <span className="ml-4 inline-block">
                            <ButtonCopy value={email} labelDone="Adresse mail copiée" labelError="Erreur">Copier</ButtonCopy>
                        </span>
                    </p>
                </div>
            </Container>
        </SectionBase>
    )
}