export default function MetaList(props) {
    return (
        <div className="mb-8 md:mb-0">
            <h2 className="font-extrabold text-lg my-2 text-primary">{props.title}</h2>
            <ul>
                {props.items.map((item, i) => <li key={i}>{ prettifyMeta(item) }</li>)}
            </ul>
        </div>
    )
}

function prettifyMeta(input) {
    if(typeof input === "string") {
        // Links
        let linkMatches = input.match(/^https*:\/\/(www\.)*(.+)/)
        if(linkMatches) {
            return (<a className="link" target="_blank" href={input}> {linkMatches[2]} </a>)
        }
    }
    return input
}