import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaNodeJs,
  FaWhatsapp,
  FaVideo,
  FaPalette,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiThreedotjs,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiTailwindcss,
} from "react-icons/si";

const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "/images/react2.webp",
  "/images/next2.webp",
  "/images/node2.webp",
  "/images/express.webp",
  "/images/mongo.webp",
  "/images/mysql.webp",
  "/images/typescript.webp",
  "/images/javascript.webp",
];
const textures = imageUrls.map((url) => textureLoader.load(url));

const sphereGeometry = new THREE.SphereGeometry(1, 24, 24);

const spheres = [...Array(16)].map(() => ({
  scale: [0.75, 0.9, 0.85, 1][Math.floor(Math.random() * 4)],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return;
    delta = Math.min(0.08, delta);
    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -40 * delta * scale,
          -120 * delta * scale,
          -40 * delta * scale
        )
      );

    api.current.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.8}
      angularDamping={0.2}
      friction={0.2}
      position={[r(15), r(15) - 20, r(15) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow={false}
        receiveShadow={false}
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive || !ref.current) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

// Lightweight mobile skill items
const mobileTechItems = [
  { name: "React", icon: FaReact, color: "#00f2fe", category: "Pushpak • Web" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", category: "Pushpak • Web" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", category: "Pushpak • Web" },
  { name: "Node.js", icon: FaNodeJs, color: "#68a063", category: "Pushpak • Backend" },
  { name: "Three.js 3D", icon: SiThreedotjs, color: "#f368e0", category: "Pushpak • 3D" },
  { name: "WhatsApp Cloud API", icon: FaWhatsapp, color: "#25d366", category: "Pushpak • Automation" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8", category: "Pushpak • UI" },
  { name: "Premiere Pro", icon: SiAdobepremierepro, color: "#ea77ff", category: "Tanay • Video" },
  { name: "After Effects", icon: SiAdobeaftereffects, color: "#9999ff", category: "Tanay • Motion" },
  { name: "Viral Reels & Sound", icon: FaVideo, color: "#ff6b81", category: "Tanay • Content" },
  { name: "Adobe Photoshop", icon: SiAdobephotoshop, color: "#31a8ff", category: "Devang • Visuals" },
  { name: "Adobe Illustrator", icon: SiAdobeillustrator, color: "#ff9a00", category: "Devang • Branding" },
  { name: "Brand & Logo Suite", icon: FaPalette, color: "#ffa502", category: "Devang • Identity" },
];

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" && window.innerWidth <= 1024
  );

  useEffect(() => {
    const handleResizeCheck = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResizeCheck);
    // Refresh ScrollSmoother layout height after mounting
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      window.removeEventListener("resize", handleResizeCheck);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen) return;

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const workEl = document.getElementById("work");
      if (!workEl) return;
      const threshold = workEl.getBoundingClientRect().top;
      setIsActive(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSmallScreen]);

  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.2,
          metalness: 0.4,
          roughness: 0.8,
          clearcoat: 0.1,
        })
    );
  }, []);

  // Lightweight layout for mobile/small screens
  if (isSmallScreen) {
    return (
      <div className="techstack techstack-mobile section-container" id="techstack">
        <div className="techstack-head">
          <div className="techstack-badge">TOOLKIT & STACK</div>
          <h2 className="title techstack-mobile-title">
            STUDIO <span>TECHSTACK</span>
          </h2>
          <p className="techstack-subtitle">
            Industry-leading technologies and creative software powering our web,
            automation, video, and design deliverables.
          </p>
        </div>

        <div className="tech-mobile-grid">
          {mobileTechItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="tech-mobile-card"
                style={{ "--item-color": item.color } as React.CSSProperties}
              >
                <div className="tech-mobile-icon-box">
                  <IconComp />
                </div>
                <div className="tech-mobile-info">
                  <h4>{item.name}</h4>
                  <span>{item.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop 3D Physics layout
  return (
    <div className="techstack" id="techstack">
      <h2>STUDIO TECHSTACK & TOOLS</h2>

      <Canvas
        shadows={false}
        dpr={[1, 1.5]}
        gl={{ alpha: true, stencil: false, depth: false, antialias: true }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.3)}
        className="tech-canvas"
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[i % materials.length]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.4}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={0.8} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
