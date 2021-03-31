import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader, useFrame } from 'react-three-fiber'
import { Canvas } from 'react-three-fiber';
import React from 'react'
import { AnimationMixer } from 'three';
import ClippedDrawer from './panel';


export default function AnimeModel() {
    const soldier = useLoader(GLTFLoader, '/Soldier.glb');
    var animationMixer = new AnimationMixer(soldier.scene);
    const animeName = soldier.animations.map((value) => {
        return (value.name);
    })

    const animeToPlay = soldier.animations.map((animationClip) => {
        return (animationMixer.clipAction(animationClip).setEffectiveWeight(0).play());
    })

    const playAnime = (valueNumberSlider, indexAnimation) => {
        animeToPlay[indexAnimation].setEffectiveTimeScale(1);
        animeToPlay[indexAnimation].setEffectiveWeight(valueNumberSlider / 100);
    }

    const UpdateModel = () => {
        useFrame(() => animationMixer.update(0.01));
        return null;
    }

    return (
        <div>
            <ClippedDrawer animationName={animeName} functionAnime={playAnime} />
            <Canvas>
                <primitive position={[0, -0.5, 2]} object={soldier.scene} rotation={[0, -3.1, 0]}></primitive>
                <UpdateModel />
                <ambientLight />
            </Canvas>
        </div>
    );
}