import styles from './services.module.scss'

export default function StepImage(props) {
    let classes = [
        styles.serviceImage,
        styles[props.imageClass]
    ]
    classes.push(props.className || [])

    return (
        <div className={classes.join(' ')}></div>
    )
}