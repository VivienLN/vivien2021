import Image from 'next/image'

export default function Thumbnail(props) {
    return (
        <div className="mb-4">
            <Image src={props.src} width={980} height={306} alt="" />
        </div>
    )
}