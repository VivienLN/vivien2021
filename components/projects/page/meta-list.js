export default function MetaList(props) {
    return (
        <div className="">
            <h2 className="font-extrabold my-4">{props.title}</h2>
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