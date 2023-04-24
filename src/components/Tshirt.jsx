/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 tshirt.gltf --transform
Author: alexandre.faisan (https://sketchfab.com/alexandre.faisan)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/plasmapurpose-4th-state-of-matter-16c34aa0ce00402f8b738394255095aa
Title: PlasmaPurpose - 4th State Of Matter
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/tshirt-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={100}>
            <mesh geometry={nodes['T-Shirt_HiPoly_Shirt_0'].geometry} material={materials.Shirt} />
            <mesh geometry={nodes['T-Shirt_HiPoly_Shirt_0_1'].geometry} material={materials.Shirt} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/tshirt-transformed.glb')
