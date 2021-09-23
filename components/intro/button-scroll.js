import Link from "next/link"
import { ArrowSmDownIcon } from '@heroicons/react/solid'

export default function ButtonScroll(props) {
    return (
        <Link href="/#section-offre" scroll={false}>
            <a className="text-secondary link block relative z-20">
                <ArrowSmDownIcon className="h-12 w-12" />
            </a>
        </Link>
    )
}