import Link from "next/link"
import Hexagon from './icons/hexagon'

export default function HeaderButton(props) {
    var IconClass = props.icon;
    var borderColor = props.color || "inherit"
    if(!props.icon) {
        return null;
    }
    return (    
        <div>
            <style jsx>{`
                .hexagon {
                    color: ${borderColor};
                }
                a .hexagon :global(svg path) {
                    transition: .3s ease-out;
                    stroke-dasharray: 470;
                    stroke-dashoffset: 470;
                }                
                a:hover .hexagon :global(svg path) {
                    stroke-dashoffset: 0;
                }

                a .icon {
                    transition: .2s ease-out;
                    transform: scale(.8);
                }
                a:hover .icon {
                    transform: scale(1);
                }
            `}</style>
            <a href={props.url} target="_blank" className="block relative p-5 mx-1 text-primary hover:text-white">
                <div className="hexagon">
                    <Hexagon strokeWidth={5} className="block absolute left-0 top-0 w-full h-full fill-current" />
                </div>
                <div className="icon">
                    {IconClass && <IconClass className="block w-7 h-7 fill-current" />}
                </div>
            </a>
        </div>
    )
}