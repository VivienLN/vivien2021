import styles from './goo.module.scss';

export default function GooCurveSvg(prop) {
    let classes = [styles.gooSvg];
    if(prop.inverted) {
        classes.push('transform');
        classes.push('rotate-180');
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={classes.join(' ')} viewBox="0 0 1920 60">
            <path fillRule="evenodd" fill="#000" />
        </svg>
    )
}