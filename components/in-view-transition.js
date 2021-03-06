import Container from './container'
import { useInView } from 'react-intersection-observer';

export default function InViewTransition(props) {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: .4,
        triggerOnce: true,
        delay: props.delay || 0
    });

    return (
        <div ref={ref} className={ (props.className ? props.className : '') + ' ' + (inView ? 'inView' : '') }>
            <style jsx>{`
                div {
                    opacity: 0;
                    transform-origin: top left;
                    transform: translateY(70px);// skewY(4deg);
                    transition: 1.6s cubic-bezier(0.165, 0.840, 0.440, 1.000);
                }                
                div.inView {
                    opacity: 1;
                    transform: translateY(0) skewY(0deg);
                }
            `}</style>
            { props.children }
            
        </div>
    )
}