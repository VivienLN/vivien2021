export default function HeroBanner(props) {
    return (
        <div className="heroBanner">
            <style jsx>{`
                .heroBanner {
                    background: url('${ props.url }') no-repeat fixed center center;
                    background-size: cover;
                    height: 80vh;
                }
            `}</style>
        </div>
    )
}