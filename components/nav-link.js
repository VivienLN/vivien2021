import Link from 'next/link'

export default function NavLink(props) {
    return (
        <Link href={props.href}>
            <span className="inline-block transform -skew-y-3 bg-secondary mx-8 px-4">
                <a className="inline-block transform skew-y-3 font-extrabold text-xl">
                    {props.children}
                </a>
            </span>
        </Link>
    )
}