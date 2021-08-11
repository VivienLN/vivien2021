import Link from "next/link"
import { ArrowSmDownIcon } from '@heroicons/react/solid'

export default function ButtonScroll(props) {
    <style jsx>{`
        .arrow:hover {
            transform: translateY(10px);
        }
    `}</style>
    return (
        <div className="absolute right-0 left-0 z-20 bottom-0">
            <Link href="/#section-services" scroll={false}>
                <a className="text-primary link block relative z-20">
                    <ArrowSmDownIcon className="h-12 w-12" />
                </a>
            </Link>
        </div>
    )
}


