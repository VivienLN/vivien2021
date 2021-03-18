import Image from 'next/image'

export default function Service(props) {
    return (
        <div className="mb-12">
            <div className="mb-4">
                <Image src={props.icon} width={100} height={100} alt="" />
            </div>
            <h3 className="text-2xl mb-8">{props.title}</h3>
            {props.children}
        </div>
    )
}