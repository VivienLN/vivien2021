import React from 'react';
import { Stage, Sprite, useTick, withPixiApp, AppConsumer } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';

// import dynamic from 'next/dynamic'
// const PixiApp = dynamic(
//     () => import('pixi.js').then((mod) => mod.Application),
//     { ssr: false }
// )

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
            transitionDelay: props.transitionDelay || 80,
            // how many transition time is "taken" by the delay (remaining time is actual fade-in of pixels)
            transitionDelayRatio: props.transitionDelayRatio || .95
        }

        // Prepare shader
        this.shader = new PIXI.Filter(null, transitionShader);
        this.shader.uniforms.mapSampler = PIXI.Sprite.from("/images/test-project-mask.jpg")._texture;
        this.shader.uniforms.time = 0.0;
        this.shader.uniforms.delayRatio = this.config.transitionDelayRatio;

        // React state
        this.state = {
            isTransitioning: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.onMount = this.onMount.bind(this);
    }

    render() {
        return (
            <Stage onClick={this.handleClick} onMount={this.onMount} width={980} height={340}>
                <Sprite image="/images/test-project.jpg" x={0} y={0} />
                <Sprite 
                    filters = {[this.shader]}
                    image="/images/test-project-hover.jpg" 
                    x={0} 
                    y={0} 
                />
            </Stage>
        )
    }

    onMount(app) {
        console.log('stage mount');
        console.log(app);
        console.log(this);

        app.ticker.add(delta => {
            if(this.state.isTransitioning) {						
                this.shader.uniforms.time = Math.min(this.shader.uniforms.time + delta / this.config.transitionDelay, 1);
                if(this.shader.uniforms.time >= 1) {
                    // wait a little before removing effect
                    setTimeout(() => {
                        this.isTransitioning = false;
                        this.shader.uniforms.time = 0.0;
                    }, 500);
                }
            }
        })
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }

    handleClick() {
        console.log('click!');
        if(!this.state.isTransitioning) {
            // TODO: pass to sprite
            // simpleShader.uniforms.time = 0.0;
        }
        this.setState({
            isTransitioning: true
        });
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