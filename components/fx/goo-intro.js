import React from 'react';
import GooCurveSvg from './goo-curve-svg';

class GooIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionTop: 0
        };
    }

    render() {
        return (
            <div className="absolute inset-x-0 flex flex-col" style={{top: this.state.positionTop + 'px', height:'55vh', transition: '.4s'}}>
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
        )
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event) {
        window.requestAnimationFrame(() => {
            let positionTop = Math.round(window.innerHeight / 2 - window.scrollY); 
            this.setState({
                positionTop: positionTop
            });
        });
    }
}

export default GooIntro