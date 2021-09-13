import { ArrowSmLeftIcon } from '@heroicons/react/solid'
import Link from "next/link"

export default function ButtonBack(props) {
    return (
        <div className={props.className}>            
            <Link href={props.href} scroll={false}>
                <a className="block">
                    <ArrowSmLeftIcon />
                </a>
            </Link>
        </div>
    )
}