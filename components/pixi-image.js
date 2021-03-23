import React from 'react';
import { Stage, Container, Sprite, useTick } from '@inlet/react-pixi';

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

class PixiImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        console.log('useTick');
        console.log(useTick);
        // useTick(delta => {
        //     // do something here
        // });

        return (
            <Stage onClick={this.clickHandler} width={980} height={340}>
                <Sprite image="/images/test-project.jpg" x={0} y={0} />
    
                <Container x={500}>
                    {/* <Text text="Hello World" filter={[blurFilter]} /> */}
                </Container>
            </Stage>
        )
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        
    }

    clickHandler() {
        console.log('click!');
    }
}

export default PixiImage