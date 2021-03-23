import GooCurveSvg from './goo-curve-svg';
import GooIntro from './goo-intro';
import styles from './goo.module.scss';

export default function Goo() {
    return (
        <div className={styles.gooContainer}>
            <div className="bg-primary absolute left-8 top-8 w-20 h-20 rounded-full">
                Menu
            </div>

            <GooIntro />

            <div className="fixed bottom-0 inset-x-0 z-0">
                <GooCurveSvg />
            </div>

            {/* This is here to define the filter, that is then used in CSS */}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}