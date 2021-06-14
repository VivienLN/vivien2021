import styles from './services.module.scss'

export default function StepIcon(props) {
    var IconClass = props.icon;
    if(!props.icon) {
        return null;
    }
    return (
        <div className={styles.stepIcon}>
            {IconClass && <IconClass />}
        </div>
    )
}