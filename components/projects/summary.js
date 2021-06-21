export default function Summary(props) {
    
    
    return (
        <section className="container mx-auto px-4">
            <div className="mx-auto py-20 w-3/4 md:w-1/2">
                { props.children }
            </div>
        </section>
    )
}