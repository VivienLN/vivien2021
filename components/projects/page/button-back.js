import Link from "next/link"
import { ArrowSmLeftIcon } from '@heroicons/react/solid'

export default function ButtonBack(props) {
    return (
        <div className="">
            <Link href="/#section-projects" scroll={false}>
                <a className="link block fixed p-6 z-40">
                    <ArrowSmLeftIcon className="h-10 w-10" />
                </a>
            </Link>
        </div>
    )
}


