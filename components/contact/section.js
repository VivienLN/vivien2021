import SectionBase from '../section'

export default function Section() {
    return (
        <SectionBase title="Contact">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-xl">
                <h3>Vous avez une question ou un projet&nbsp;?</h3>
                <div>
                    <p className="mb-4">On en discute avec plaisir&nbsp;!</p>
                    <p>Contactez-moi par mail&nbsp;: <a href="mailto:hello@vivien.dev">hello@vivien.dev</a></p>
                </div>
                <h3>Envie d'en savoir plus&nbsp;?</h3>
                <div>
                    <p className="mb-4"><a href="#">linkedin</a></p>
                    <p className="mb-4"><a href="#">malt</a></p>
                    <p className="mb-4"><a href="#">twitter</a></p>
                    <p><a href="#">blog</a></p>
                </div>
            </div>
        </SectionBase>
    )
}