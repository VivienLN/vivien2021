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
        if(this.props.project && Object.keys(this.props.project).length > 0) {
            return (
                <div className={"overflow-hidden rounded relative " + styles.projectThumbnail }>
                    <Link href={"/projects/" + this.props.project.slug} scroll={false}>
                        <a className={"bg-secondary-darker " + styles.link}>
                            <span className={"pointer-events-none absolute z-10 inset-0 flex flex-col text-center justify-center p-4 " + styles.linkText}>
                                <span className="my-2 text-2xl font-extrabold">{ this.props.project.name }</span>
                                <span className="my-2 text-xl font-extrabold text-primary">{ this.props.project.subtitle }</span>
                            </span>
                            <PixiImage 
                                src={ "/images/projects/" + this.props.project.slug + "/thumbnail.jpg" }
                                width={800}
                                height={this.props.smaller ? 300 : 500}
                                alt="" 
                                transitionDelayRatio={.84}
                                transitionDelay={26}
                                transitionMask={ "/images/projects/mask.jpg"}
                                gradientMap={{0: "#000", 0.5: "#068ec3", 1: "#ffec4e"}}
                            />
                        </a>
                    </Link>
                </div>
            )
        }
        
        // Return empty thumbnail
        return (
            <div className={"overflow-hidden rounded relative " + styles.projectThumbnail }>
                <span className={"bg-secondary-darker h-full w-full block opacity-50"}>
                </span>
            </div>
        )
    }
}

export default Thumbnail