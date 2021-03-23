import Image from 'next/image'
import IconHexagon from '../icons/hexagon'

export default function Block(props) {
    return (
        <div className="mb-12">
            <div className="mb-4 max-w-full	w-36 mx-auto relative">
                <div className="relative z-0">
                    <IconHexagon />
                </div>
                <div className="absolute z-10 inset-1/4">
                    {props.icon}
                </div>
            </div>
            <h3 className="text-2xl mb-8 text-center">{props.title}</h3>
            {props.children}
        </div>
    )
}