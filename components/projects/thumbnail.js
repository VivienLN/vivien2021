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

        // this.handleMouseEnter = this.handleMouseEnter.bind(this);
        // this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    render() {
        return (
            <div className="mb-4 overflow-hidden rounded-lg relative">
                <Link href="/posts/first-post">
                    <a className={styles.link}>
                        <span className={"pointer-events-none absolute z-10 inset-0 flex flex-col text-center justify-center p-4 " + styles.linkText}>
                            <span className="my-4 text-4xl font-extrabold">{this.props.title}</span>
                            <span className="my-4 text-xl uppercase ">{this.props.subtitle}</span>
                        </span>
                        <PixiImage 
                            src={this.props.src}
                            width={980} 
                            height={340}
                            alt="" 
                            transitionDelayRatio={.5}
                            transitionDelay={20}
                            transitionMask={this.props.transitionMask}
                            gradientMap={{0: "#c6c2e8", .56:"#fff795", 1:"#fff"}}
                        />
                    </a>
                </Link>
            </div>
        )
    }

    /*
    handleMouseEnter() {
        console.log('handleMouseEnter');
        this.setState({
            transitionDirection: 1
        });
    }

    handleMouseLeave() {
        console.log('handleMouseLeave');
        // this.backgroundImage.current.handleMouseLeave();
        this.setState({
            transitionDirection: -1
        });
    }
    */
}

export default Thumbnail