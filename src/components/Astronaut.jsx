import React, { useEffect, useRef, useCallback } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export const Astronaut = React.forwardRef(
  ({ onLoaded, ...props }, forwardedRef) => {
    const localGroup = useRef();

    const setRefs = useCallback(
      (node) => {
        localGroup.current = node;
        if (!forwardedRef) return;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else forwardedRef.current = node;
      },
      [forwardedRef],
    );

    const { nodes, materials, animations } = useGLTF("models/model.glb");
    const { actions } = useAnimations(animations, localGroup);

    useEffect(() => {
      if (!animations?.length) return;

      const first = animations[0].name;
      const action = actions?.[first];
      action?.reset?.();
      action?.play?.();

      let raf = requestAnimationFrame(() => {
        onLoaded?.();
      });

      return () => cancelAnimationFrame(raf);
    }, [animations, actions, onLoaded]);

    return (
      <group
        ref={setRefs}
        {...props}
        dispose={null}
        rotation={[0, -0.5, 0]}
        position={[1.75, -1.5, 1.75]}
      >
        <group name="Scene">
          <group name="Armature" scale={0.01}>
            <skinnedMesh
              name="model"
              geometry={nodes.model.geometry}
              material={materials["Traveller_HEA_PlayerSuit_mat.004"]}
              skeleton={nodes.model.skeleton}
              castShadow
              receiveShadow
            />
            <primitive object={nodes.mixamorigHips} />
          </group>

          <mesh
            name="model001"
            castShadow
            receiveShadow
            geometry={nodes.model001.geometry}
            material={materials["Props_HEA_Jetpack_mat.002"]}
          />
        </group>
      </group>
    );
  },
);

useGLTF.preload("models/model.glb");
