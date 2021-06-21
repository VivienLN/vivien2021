export default function MetaList(props) {
    return (
        <div>
            <h2 className="font-extrabold my-4">{props.title}</h2>
            <ul>
                {props.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
    )
}