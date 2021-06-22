import styles from './services.module.scss'
import { useInView } from 'react-intersection-observer';

export default function StepIcon(props) {
    var IconClass = props.icon;
    if(!props.icon) {
        return null;
    }

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 1,
        rootMargin: '0px 0px -200px',
        triggerOnce: true,
        delay: 0
    });

    let classes = [styles.stepIcon]
    if(inView) {
        classes.push(styles.stepIconInView)
    }

    return (
        <div ref={ref} className={classes.join(' ')}>
            {IconClass && <IconClass />}
        </div>
    )
}