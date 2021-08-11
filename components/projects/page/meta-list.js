export default function MetaList(props) {
    return (
        <div className="">
            <h2 className="font-extrabold my-4 fat-shadow-black">{props.title}</h2>
            <ul>
                {props.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
    )
}