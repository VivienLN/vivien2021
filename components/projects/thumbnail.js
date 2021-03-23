import dynamic from 'next/dynamic'
const PixiImage = dynamic(() => import('../pixi-image'), { ssr: false })

export default function Thumbnail(props) {
    return (
        <div className="mb-4">
            <PixiImage src={props.src} width={980} height={306} alt="" />
        </div>
    )
}