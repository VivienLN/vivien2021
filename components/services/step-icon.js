import styles from './services.module.scss'
import { useInView } from 'react-intersection-observer';
import InViewTransition from '../in-view-transition'

export default function StepIcon(props) {
    var IconClass = props.icon;
    if(!props.icon) {
        return null;
    }

    return (
        <InViewTransition className={styles.stepIcon + " absolute left-0 top-0 z-20"}>
                {IconClass && <IconClass />}
        </InViewTransition>
    )
}