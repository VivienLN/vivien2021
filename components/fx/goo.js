import GooCurveSvg from './goo-curve-svg';
import styles from './goo.module.scss';

export default function Goo() {
    return (
        <div className={styles.gooContainer}>
            <div className="bg-primary fixed left-8 top-8 w-20 h-20 rounded-full">
                Menu
            </div>
            <div className="absolute left-0 right-0 flex flex-col" style={{top: '50vh', height:'55vh'}}>
                <div className="flex-none">
                    <GooCurveSvg />
                </div>
                <div className="bg-primary flex-grow">
                    Intro BG
                </div>
                <div className="flex-none">
                    <GooCurveSvg inverted={true} />
                </div>
            </div>
            <div className="bg-primary h-screen absolute bottom-0 left-0 right-0">
                Contact BG
            </div>
            <div className="fixed bottom-0 left-0 right-0 z-0">
                <GooCurveSvg />
            </div>
        </div>
    )
}