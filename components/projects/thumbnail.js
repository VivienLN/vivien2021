import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import styles from './projects.module.scss'

const PixiImage = dynamic(() => import('../pixi-image'), { ssr: false })

class Thumbnail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className={"overflow-hidden rounded relative " + styles.projectThumbnail }>
                <Link href={"/projects/" + this.props.slug} scroll={false}>
                    <a className={"bg-secondary-dark " + styles.link}>
                        <span className={"pointer-events-none absolute z-10 inset-0 flex flex-col text-center justify-center p-4 " + styles.linkText}>
                            <span className="my-2 text-3xl font-extrabold fat-shadow-black">{ this.props.project.name }</span>
                            <span className="my-2 font-extrabold fat-shadow-black">{ this.props.project.subtitle }</span>
                        </span>
                        <PixiImage 
                            src={ "images/projects/" + this.props.slug + "/thumbnail.jpg" }
                            width={800}
                            height={500}
                            alt="" 
                            transitionDelayRatio={.84}
                            transitionDelay={26}
                            transitionMask={ "images/projects/mask.jpg"}
                            // gradientMap={{0: "#9ad5ff", 0.6: "#fff493", 1:"#fff"}}
                            // gradientMap={{0:"#ddcc00", 0.4: "#ffee22", 1:"#fff"}}
                            gradientMap={{0: "#000", 0.4: "#068ec3", 0.8: "#eedd66", 1:"#ffff99"}}
                            // gradientMap={{0: "#39aee5", 0.6: "#ffec3c", 1:"#fff"}}
                            // gradientMap={{0: "#4778db", 0.4: "#ffe92b", 1:"#fff"}}
                        />
                    </a>
                </Link>
            </div>
        )
    }
}

export default Thumbnail