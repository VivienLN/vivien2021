import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import styles from './thumbnail.module.scss'

const PixiImage = dynamic(() => import('../pixi-image'), { ssr: false })

class Thumbnail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="overflow-hidden rounded relative">
                <Link href="/projects/test">
                    <a className={styles.link}>
                        <span className={"pointer-events-none absolute z-10 inset-0 flex flex-col text-center justify-center p-4 " + styles.linkText}>
                            <span className="my-2 text-3xl font-extrabold">{this.props.title}</span>
                            <span className="my-2 font-extrabold">{this.props.subtitle}</span>
                        </span>
                        <PixiImage 
                            src={this.props.src}
                            width={800} 
                            height={500}
                            alt="" 
                            transitionDelayRatio={.5}
                            transitionDelay={20}
                            transitionMask={this.props.transitionMask}
                            gradientMap={{0: "#9ad5ff", 0.6: "#fff493", 1:"#fff"}}
                        />
                    </a>
                </Link>
            </div>
        )
    }
}

export default Thumbnail