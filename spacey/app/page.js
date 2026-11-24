"use client";

import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import WebGL from "three/addons/capabilities/WebGL.js";
import Image from "next/image";
import useStatesStore from "./Store/Store";

export default function Home() {
  const mountRef = useRef(null);
  const [scrollText, setScrollText] = useState("scroll_");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const { setIsClicked } = useStatesStore();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    if (!WebGL.isWebGL2Available()) {
      const warning = WebGL.getWebGL2ErrorMessage();
      mount.appendChild(warning);
      return () => mount.removeChild(warning);
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    const timer = new THREE.Timer();
    timer.connect(document);
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(ambientLight, directionalLight, pointLight);

    let model = null;
    let modelBaseY = 0;
    let disposed = false;

    const setCameraPosition = () => {
      const distance = window.innerWidth < 768 ? 7 : 5;

      camera.position.set(0, 2, distance);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    };

    const positionModel = () => {
      if (model) {
        model.position.y = modelBaseY - (window.innerWidth >= 768 ? 0.35 : 0);
      }
    };

    const resizeRenderer = () => {
      const { clientWidth, clientHeight } = mount;
      if (!clientWidth || !clientHeight) return;

      camera.aspect = clientWidth / clientHeight;
      renderer.setSize(clientWidth, clientHeight);
      setCameraPosition();
      positionModel();
    };

    const disposeModel = (root) => {
      root.traverse((child) => {
        if (!child.isMesh) return;

        child.geometry.dispose();
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];
        materials.forEach((material) => material.dispose());
      });
    };

    const loader = new GLTFLoader();
    loader.load(
      "/space-boi/scene.gltf",
      (gltf) => {
        if (disposed) {
          disposeModel(gltf.scene);
          return;
        }

        model = gltf.scene;
        modelBaseY = model.position.y;
        scene.add(model);
        positionModel();
      },
      undefined,
      (error) => {
        console.error("Failed to load the 3D model:", error);
      },
    );

    resizeRenderer();
    window.addEventListener("resize", resizeRenderer);
    renderer.setAnimationLoop((time) => {
      timer.update(time);
      if (model) {
        model.rotation.y += timer.getDelta();
      }
      renderer.render(scene, camera);
    });

    return () => {
      disposed = true;
      window.removeEventListener("resize", resizeRenderer);
      renderer.setAnimationLoop(null);
      timer.dispose();
      if (model) disposeModel(model);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://api.wheretheiss.at/v1/satellites/25544`,
        );
        const data = await response.json();
        setLongitude(data.longitude);
        setLatitude(data.latitude);
      } catch (error) {
        console.log(error);
      }

      setTimeout(fetchCoordinates, 10000);
    };

    fetchCoordinates();

    return () => {
      clearTimeout(fetchCoordinates);
    };
  }, []); // Em

  return (
    <main className="">
      <div
        className="w-full h-screen sticky *:overflow-x-hidden lg:overflow-hidden"
        ref={mountRef}
      >
        <div className="absolute bottom-28 lg:right-20 right-0">
          <p className="font-[Fago] text-[2rem] text-white">{scrollText}</p>
          <p className="text-white font-[Fago]">to see great stuff</p>
        </div>
      </div>
      <div className="text-white hide-scrollbar sticky top-20 w-full h-screen inline-block p-2.5 bg-black rounded-t-3xl overflow-y-scroll">
        <Image
          src="/images/space.gif"
          className="w-full lg:h-1/2 lg:object-cover"
          alt="space_gif"
          width={100}
          height={100}
        />
        <p className="mt-10 text-[2rem] font-semibold">You love space ??</p>
        <p className="text-[1.6rem] font-semibold">me too :) ❤️❤️</p>
        <p className="my-4 font-semibold">
          first of all, you're on spacy. so have to think you're in space.
        </p>

        <p className="font-mono">your current location is : </p>
        <div className="flex items-start gap-2">
          <p className="text-[1.5rem] font-semibold font-mono">
            [ {longitude}, {latitude} ]
          </p>
          <div role="modal" className="relative">
            <button className="font-mono peer outline relative outline-white w-min p-px px-1 text-[10px]">
              i
            </button>
            <p className="font-mono absolute mt-5 z-50 right-0 opacity-0 peer-hover:opacity-100 bg-black text-white outline outline-white p-px px-1 text-[10px] transition-opacity duration-300">
              ps: This is the live location of the International Space Station.
              :)
            </p>
          </div>
        </div>

        <div className="my-6">
          <p className="font-semibold">The main aim of spacy is learning</p>
          <p className="font-semibold">
            So, skip the boring part and let's begin
          </p>
          <button
            onClick={() => {
              setIsClicked();
            }}
            className={`rounded-lg flex items-center my-10 text-center download bg-black xl:w-[50%] max-md:w-full outline border-white border p-3 font-medium text-[18px]`}
          >
            Click here to Start
          </button>
        </div>
      </div>
    </main>
  );
}
