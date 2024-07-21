'use client';

import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Clock } from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import Image from 'next/image';
import useStatesStore from './Store/Store';

export default function Home() {
  const mountRef = useRef(null);
  const [scrollText, setScrollText] = useState('scroll_');
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  let warning;
  const { setIsClicked } = useStatesStore();


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { innerWidth, innerHeight } = window;

      // Create scene, camera, and renderer
      const scene = new THREE.Scene();
      const clock = new Clock();
      scene.background = new THREE.Color(0x000000);
      const camera = new THREE.PerspectiveCamera(75, (innerWidth) / (innerHeight - 100), 0.1, 1000);
      // const renderer = new THREE.WebGLRenderer({ antialias: true });
      if (WebGL.isWebGL2Available()) {

        const renderer = new THREE.WebGLRenderer();

        renderer.setPixelRatio(window.devicePixelRatio);

        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        const light = new THREE.PointLight(0xc4c4c4, 100); // soft white light
        camera.position.z = 8; // Adjust this value to zoom out

        renderer.setSize((innerWidth), innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Add some lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 1); // Reduced intensity
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Changed color and reduced intensity
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0xffffff, 1); // Added point light
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);
        let model = null;

        const loader = new GLTFLoader();
        loader.load('../space-boi/scene.gltf', (gltf) => {
          model = gltf.scene;
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              child.material.metalness = 0.5;
              child.material.roughness = 0.5;
              child.material.side = THREE.FrontSide; // render only front face
              child.geometry.computeBoundingSphere();
              child.geometry.computeBoundingBox();
            }
          });
          scene.add(gltf.scene);
          renderer.render(scene, camera);
        });

        // Optional: Add a cube for testing
        // const geometry = new THREE.BoxGeometry();
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // const cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);
        let z;
        if (innerWidth < 768) {
          z = 7;
        } else {
          z = 5;
        }

        camera.position.z = z;
        camera.position.x = 0;
        camera.position.y = 2;

        // // Animation loop
        const animate = (time) => {
          if (model) {
            model.rotation.y = time * 0.001; // Smooth rotation based on time
          }
          renderer.render(scene, camera);
        };

        renderer.setAnimationLoop(animate);

        animate();
        return () => {
          renderer.setAnimationLoop(null);
          if (mountRef.current) {
            mountRef.current.removeChild(renderer.domElement);
          }
        }
      } else {
        warning = WebGL.getWebGL2ErrorMessage();
        mountRef.current.appendChild(warning);
      }


      // Cleanup on unmount
      return () => {
        // if (mountRef.current) {
        //   mountRef.current.removeChild(warning);
        // }
      };
    }
  }, []);


  const fetchCoordinates = async () => {
    try {
      const response = await fetch('http://api.open-notify.org/iss-now.json');
      response.json().then(data => {
        setLongitude(data.iss_position.longitude);
        setLatitude(data.iss_position.latitude);
      })

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    setInterval(() => {
      fetchCoordinates()
    }, 1500);
  }, []);







  return (
    <main className="">
      <div className='w-[90vw] h-[100vh] top-10 sticky *:overflow-x-hidden lg:w-[100%] lg:overflow-hidden' ref={mountRef}>
        <div className='absolute bottom-28 lg:right-20 right-0'>
          <p className='font-[Fago] text-[2rem] text-white'>{scrollText}</p>
          <p className='text-white font-[Fago]'>to see great stuff</p>
        </div>

      </div>
      <div className='text-white hide-scrollbar sticky top-20 w-full h-[100vh] inline-block p-[10px] bg-black rounded-t-3xl overflow-y-scroll'>
      <Image src='/images/space.gif' className='w-full lg:h-1/2 lg:object-cover' alt='space_gif' width={100} height={100} />
        <p className='mt-10 text-[2rem] font-semibold'>You love space ??</p>
        <p className='text-[1.6rem] font-semibold'>me too :) ❤️❤️</p>
        <p className='my-4 font-semibold'>first of all, you're on spacy. so have to think you're in space.</p>

        <p className='font-mono'>your current location is : </p>
        <div className='flex items-start gap-2'>
          <p className='text-[1.5rem] font-semibold font-mono'>[   {longitude}, {latitude}   ]</p>
          <div role="modal" className="relative">
            <button className="font-mono peer outline relative outline-white w-min p-[1px] px-[4px] text-[10px]">
              i
            </button>
            <p className="font-mono absolute mt-5 right-0 opacity-0 peer-hover:opacity-100 bg-black text-white outline outline-white p-[1px] px-[4px] text-[10px] transition-opacity duration-300">
              ps: This is the live location of the International Space Station. :)
            </p>
          </div>
        </div>

        <div className='my-6'>
          <p className='font-semibold'>The main aim of spacy is learning</p>
          <p className='font-semibold'>So, skip the boring part and let's begin</p>
          <button onClick={()=>{setIsClicked()}} className={`rounded-lg flex items-center my-10 text-center download bg-black xl:w-[50%] max-md:w-full outline border-white border p-3 font-medium text-[18px]`}>Click here to Start</button>
        </div>
      </div>
    </main>
  );
}
