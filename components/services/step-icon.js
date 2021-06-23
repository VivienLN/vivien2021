import styles from './services.module.scss'
import { useInView } from 'react-intersection-observer';

export default function StepIcon(props) {
    var IconClass = props.icon;
    if(!props.icon) {
        return null;
    }

    
    const { ref, inView, entry } = useInView({
        threshold: .8,
        rootMargin: '0px 0px -100px',
        triggerOnce: true,
        delay: 200
    });

    return (
        <div ref={ref} className={styles.stepIcon + " " + (inView ? styles.inView : '') + " absolute left-0 top-0 z-20"}>
            {IconClass && <IconClass />}
        </div>
    )
}