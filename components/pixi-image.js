import React from 'react';
import { Stage, Sprite, withPixiApp } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';

const transitionShader = `
    precision mediump float;

    varying vec2 vTextureCoord;
    varying vec4 vColor;

    uniform sampler2D mapSampler; 
    uniform sampler2D uSampler;
    uniform float time;
    uniform float delayRatio;

    void main(){
        vec4 originalFg = texture2D(uSampler, vTextureCoord);
        vec4 maskFg = texture2D(mapSampler, vTextureCoord);

        float darkness = 1.0 - (maskFg.r + maskFg.g + maskFg.b) / 3.0;
        float delay = darkness * delayRatio;
        float alpha = clamp((time - delay) / (1.0 - delayRatio), 0.0, 1.0);
        gl_FragColor = vec4(originalFg.r * alpha, originalFg.g * alpha, originalFg.b * alpha, alpha);
    }
`;

// ------------------------------------------
// Component class
// ------------------------------------------
class PixiImage extends React.Component {
    constructor(props) {
        super(props);

        // Variables for PIXI
        this.config = {
            // frames
            transitionDelay: props.transitionDelay || 30,
            // how many transition time is "taken" by the delay (remaining time is actual fade-in of pixels)
            transitionDelayRatio: props.transitionDelayRatio || .7
        }

        // Prepare shader
        this.transitionFilter = new PIXI.Filter(null, transitionShader);
        this.transitionFilter.uniforms.mapSampler = PIXI.Sprite.from(props.transitionMask)._texture;
        this.transitionFilter.uniforms.time = 0.0;
        this.transitionFilter.uniforms.delayRatio = this.config.transitionDelayRatio;

        // React state
        this.state = {
            transitionDirection: 0 // 0 = paused; 1 = in; -1 = out
        };

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.onMount = this.onMount.bind(this);
    }

    render() {
        return (
            <Stage onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} onMount={this.onMount} width={980} height={340}>
                <Sprite image="/images/test-project.jpg" x={0} y={0} />
                <Sprite 
                    filters = {[this.transitionFilter]}
                    image="/images/test-project-hover.jpg" 
                    x={0} 
                    y={0} 
                />
            </Stage>
        )
    }

    onMount(app) {
        app.ticker.add(delta => {
            let time = this.transitionFilter.uniforms.time + (delta / this.config.transitionDelay) * this.state.transitionDirection;
            this.transitionFilter.uniforms.time = Math.max(Math.min(time, 1), 0);
        })
    }

    handleMouseOver() {
        this.setState({transitionDirection: 1});
    }

    handleMouseLeave() {
        this.setState({transitionDirection: -1});
    }
    
    componentDidMount() {

    }

    componentWillUnmount() {
        
    }
}


// ------------------------------------------
// Export with app
// ------------------------------------------

export default withPixiApp(PixiImage)

// const PixiImageWithApp = () => (
//     <AppConsumer>
//         {app => <PixiImage app={app} />}
//     </AppConsumer>
// );


// export default PixiImageWithApp