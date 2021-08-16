import React from 'react';
import { Stage, Sprite, withPixiApp } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';
import styles from './pixi-image.module.scss';

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

const gradientMapShader = `
    precision mediump float;

    varying vec2 vTextureCoord;
    varying vec4 vColor;

    uniform sampler2D uSampler;
    uniform sampler2D gradientSampler;

    void main(){
        vec4 originalFg = texture2D(uSampler, vTextureCoord);
        float brightness = (originalFg.r + originalFg.g + originalFg.b) / 3.0;
        vec4 gradientFg = texture2D(gradientSampler, vec2(brightness, 0));
        // float alpha = 1.0;
        //gl_FragColor = vec4(originalFg.r * alpha, originalFg.g * alpha, originalFg.b * alpha, alpha);
        gl_FragColor = gradientFg;
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
            transitionDelayRatio: props.transitionDelayRatio || .7,
        }

        // handle gradient map
        if(props.gradientMap) {
            // Create PIXI filter
            this.gradientMapFilter = new PIXI.Filter(null, gradientMapShader);
            this.gradientMapFilter.uniforms.gradientSampler = this.getGradientTexture(100, 10);
        }

        // Prepare transition shader
        this.transitionFilter = new PIXI.Filter(null, transitionShader);
        this.transitionFilter.uniforms.mapSampler = PIXI.Sprite.from(props.transitionMask)._texture;
        this.transitionFilter.uniforms.time = 0.0;
        this.transitionFilter.uniforms.delayRatio = this.config.transitionDelayRatio;

        // React state
        this.state = {
            transitionDirection: 0 // 0 = paused; 1 = in; -1 = out
        };

        // Bind event listeners
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.onMount = this.onMount.bind(this);
    }

    onMount(app) {
        app.ticker.add(delta => {
            let time = this.transitionFilter.uniforms.time + (delta / this.config.transitionDelay) * this.state.transitionDirection;
            this.transitionFilter.uniforms.time = Math.max(Math.min(time, 1), 0);
        })
    }

    handleMouseEnter() {
        this.setState({transitionDirection: 1});
    }

    handleMouseLeave() {
        this.setState({transitionDirection: -1});
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }

    // ------------------------------------------
    // Gradient texture helper
    // Create a gradient in a hidden canvas to pass it to PIXI filters later
    // ------------------------------------------
    getGradientTexture(width, height) {
        let canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext("2d");
        let gradient = ctx.createLinearGradient(0, 0, width, 0);

        for(let position in this.props.gradientMap) {
            gradient.addColorStop(position, this.props.gradientMap[position]);
        }   
    
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        return new PIXI.Texture.from(canvas);
    }

    render() {
        return (
            <span className={styles.wrapper}>
                <Stage 
                    onMouseEnter={this.handleMouseEnter} 
                    onMouseLeave={this.handleMouseLeave} 
                    onMount={this.onMount} 
                    width={this.props.width} 
                    height={this.props.height}
                >
                    <Sprite 
                        image={this.props.src} 
                        x={this.props.width / 2} 
                        y={this.props.height / 2} 
                        anchor={0.5}
                    />
                    <Sprite 
                        filters = {[this.gradientMapFilter, this.transitionFilter]}
                        image={this.props.src} 
                        anchor={0.5}
                        x={this.props.width / 2} 
                        y={this.props.height / 2} 
                    />
                </Stage>
            </span>
        )
    }
}

// ------------------------------------------
// Export with app
// ------------------------------------------

export default withPixiApp(PixiImage)