export default function Hexagon(props) {
    let strokeWidth = props.strokeWidth !== null ? props.strokeWidth : 2;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146 160" className={props.className}>
            <path className="stroke-current" strokeWidth={strokeWidth} fill="none" d="M7.795 41.938s1.321-4.639 8.216-8.618L58.465 8.813C66.419 4.222 72 4.876 72 4.876s5.405-.756 13.158 3.719l42.928 24.78c6.841 3.949 8.119 8.563 8.119 8.563s3.358 3.577 3.358 11.674v51.8c0 7.535-3.358 10.65-3.358 10.65s-1.215 4.577-7.98 8.482L84.611 149.72C77.152 154.026 72 153.124 72 153.124s-5.119.921-12.538-3.362l-43.527-25.125c-6.853-3.956-8.14-8.575-8.14-8.575s-3.358-3.026-3.358-10.45v-52c0-8.097 3.358-11.674 3.358-11.674z"/>
        </svg>
    )
}