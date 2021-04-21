import React, { useRef, useState, Suspense } from 'react'
// import Camera from './Camera'
// import * as THREE from "three";
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { Canvas, useFrame, useLoader, useThree, extend} from 'react-three-fiber';
// import { BrowserRouter, Route} from "react-router-dom";
import { OrbitControls } from 'three-stdlib';
import tapme from '../images/texture.jpg';
import planet from '../images/texture2.jpg';

extend({ OrbitControls });


// const Controls = () => {
//   const controls = useRef()

//   /* Invoke the OrbitControls' update function on every frame */
//   useFrame(() => controls.current.update())

//   return <orbitControls ref={controls} />
// }


// const MainApp = React.lazy(() => import('../App'))

// function Camera(){
//   const scene = new THREE.Scene();

//   // Camera
//   const width = 10;
//   const height = width * (window.innerHeight / window.innerWidth);
//   const camera = new THREE.OrthographicCamera(
//     width / -2, // left
//     width / 2, // right
//     height / 2, // top
//     height / -2, // bottom
//     1, // near
//     100 // far
//   );

//   camera.position.set(0, 0, 100);
//   camera.lookAt(0, 0, 0);
  
//   const controls=useRef();
//   const renderer = new THREE.WebGLRenderer({ antialias: true, camera });
//   console.log(window.innerWidth, window.innerHeight);
  
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.render(scene, camera);

//   useFrame(() => controls.current.update());

//   const domElement = document.body.appendChild( renderer.domElement );
//   return(
//       <orbitControls
//         ref={controls}
//         args={[camera, domElement]}
//         autoRotate={false}
//         enableZoom={false}
//       />
//   )
// }


function Planet(props) {
    const mesh = useRef()
    const {position, args, isScrolling} = props
    const [state, setState] = useState({isHovered: false, isActive: false})
    const texture = useLoader(TextureLoader, tapme);
    const texture2 = useLoader(TextureLoader, planet);

    useFrame(()=> {
      mesh.current.rotation.y = mesh.current.rotation.y -= 0.003
      
      if(isScrolling){
        if(mesh.current.position.x > 0){
            mesh.current.position.x = mesh.current.position.x -= 0.005
            mesh.current.position.y = mesh.current.position.y -= 0.004
        }
        
        console.log(mesh.current.scale.x);
        
        if(mesh.current.scale.x < 65){
           mesh.current.scale.x = mesh.current.scale.x += 0.1
           mesh.current.scale.y = mesh.current.scale.y += 0.1
           mesh.current.scale.z = mesh.current.scale.z += 0.1
         }
      }
      
      if(!isScrolling) 
      { 
        mesh.current.position.x = mesh.current.position.x = position[0]
        mesh.current.position.y = mesh.current.position.y = position[1]
        mesh.current.scale.x = mesh.current.scale.x = 0.01
         mesh.current.scale.y = mesh.current.scale.y = 0.01
         mesh.current.scale.z = mesh.current.scale.z = 0.01
      }
    })
    
    return(
      <mesh
        {...props}
        visible
        ref={mesh}
        onClick={(e) => setState({...state, isActive: !state.isActive, })}>
        <sphereGeometry attach='geometry' args={args} />
        <meshStandardMaterial map={state.isActive ? texture : texture2} attach='material' />
        {/* <meshStandardMaterial color={state.isActive ? '#820263' : '#D90368'} transparent roughness={0.4} metalness={0.1} /> */}
      </mesh>
    )
    
  }

export default function App(props){
    return(
          <Canvas style={{position:'absolute', top:0, ledft:0, zIndex:1, height:'1080px'}}>
            <ambientLight intensity={0.2} />
            <pointLight position={[-30,5]} />
            {/* React wants us to display something else while the texture is rendering */}
            {/* <BrowserRouter> */}
              <Suspense fallback={null}>
                <Planet isScrolling={props.isScrolling} args={[0.01,32,32]} position={[3.5,2,0]} />
                {/* <Route path='/' component={MainApp} /> */}
              </Suspense>
            {/* </BrowserRouter> */}
          </Canvas>
    )
}