import { useState } from "react"

export default function ButtonCopy(props) {
    const [label, setLabel] = useState(props.children)
    const copyMail = function() {
        navigator.permissions.query({name: "clipboard-write"}).then(result => {
            if (result.state == "granted" || result.state == "prompt") {
                navigator.clipboard.writeText(props.value).then(function() {
                    setLabel(props.labelDone)
                }, function() {
                    setLabel(props.labelError)
                })
            }
        })
    }
    return (
        <button className="border border-gray-darker hover:border-secondary-dark hover:bg-secondary-dark px-2 py-1 text-sm rounded transition duration-300" onClick={copyMail}>
            { label }
        </button>
    )
}