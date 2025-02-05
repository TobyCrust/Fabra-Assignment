import React from 'react';
import { useGLTF } from '@react-three/drei'

export function Tshirt(props) {
  const { nodes, materials } = useGLTF('/target-tshirt.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['__var_neckline__neck_v__*back_pannel'].geometry}
        material={materials.Back}
        position={[0, -1.152, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['__var_neckline_neck_v__*front_panel'].geometry}
        material={materials.Front}
        position={[0, -1.152, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['__var_neckline_neck_v__*neck_rim'].geometry}
        material={materials.Accessories}
        position={[0, -1.152, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shirt_interior.geometry}
        material={materials.Interior}
        position={[0, -1.152, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.left_sleeve.geometry}
        material={materials.Accessories}
        position={[0, -1.152, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.right_sleeve.geometry}
        material={materials.Accessories}
        position={[0, -1.152, 0.065]}
      />
    </group>
  )
}

useGLTF.preload('/target-tshirt.glb')