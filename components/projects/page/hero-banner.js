import Container from "../../container"

export default function HeroBanner(props) {
    return (
        <div className="heroBanner">
            <style jsx>{`
                .heroBanner {
                    background: url('${ props.url }') no-repeat fixed center center;
                    background-size: cover;
                    height: 95vh;
                }
            `}</style>
            <Container className="h-full">
                <div className="py-20 h-full flex flex-col justify-center filter drop-shadow-xl">
                    <h1 className="text-2xl lg:text-4xl font-extrabold mb-8">{ props.title }</h1>
                    <p className="lg:text-xl font-extrabold text-primary">{ props.subtitle }</p>
                </div>
            </Container>
        </div>
    )
}