import styles from './section.module.scss'

export default function StepImage(props) {
    let classes = [
        styles.serviceImage,
        styles[props.imageClass]
    ]
    return (
        <div className={classes.join(' ')}></div>
    )
}