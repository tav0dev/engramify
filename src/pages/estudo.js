import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Button from "../components/ui/Button";
import YouTube from "react-youtube";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import BrandIcon from "../components/ui/BrandIcon";
import { ICON_SIZES } from "../components/ui/icons";
import {
  Target,
  ListChecks,
  GraduationCap,
  Sparkles,
  Menu,
  X as XIcon,
  CircleUser,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { siDiscord, siX, siGithub, siInstagram } from "simple-icons";
import { useRouter } from "next/router";

function Floor({ color = "#eaeaea", size = 6, selected = false }) {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.001, 0]}
      onClick={(e) => e.stopPropagation()}
      onPointerOver={(e) => (
        e.stopPropagation(),
        (document.body.style.cursor = "default")
      )}
      onPointerOut={(e) => (
        e.stopPropagation(),
        (document.body.style.cursor = "default")
      )}
    >
      <planeGeometry args={[size, size]} />
      <meshStandardMaterial color={selected ? "#dbeafe" : color} />
    </mesh>
  );
}

function Casa({
  onInteract,
  selected,
  disabled = false,
  position = [0, 0, 0],
}) {
  return (
    <group
      position={position}
      raycast={disabled ? () => null : undefined}
      onClick={() => !disabled && onInteract("Casa")}
      onPointerEnter={() =>
        (document.body.style.cursor = disabled ? "not-allowed" : "pointer")
      }
      onPointerLeave={() => (document.body.style.cursor = "default")}
      onPointerDown={(e) => disabled && e.stopPropagation()}
    >
      <Floor selected={selected && !disabled} />
      {/* Corpo da casa */}
      <mesh position={[0, 1.25, 0]}>
        <boxGeometry args={[4, 2.5, 3]} />
        <meshStandardMaterial
          color={disabled ? "#d4d4d4" : "#facc15"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>

      {/* Telhado com leve sobreposição das paredes */}
      <mesh position={[0, 3.2, 0]}>
        <coneGeometry args={[2.8, 1.6, 6]} />
        <meshStandardMaterial
          color={disabled ? "#9ca3af" : "#b45309"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>

      {/* Janela esquerda (frontal) */}
      <mesh position={[-1.2, 1.3, 1.52]}>
        <boxGeometry args={[0.8, 0.6, 0.05]} />
        <meshStandardMaterial
          color={disabled ? "#cbd5e1" : "#93c5fd"}
          transparent
          opacity={disabled ? 0.4 : 0.85}
        />
      </mesh>

      {/* Janela direita (frontal) */}
      <mesh position={[1.2, 1.3, 1.52]}>
        <boxGeometry args={[0.8, 0.6, 0.05]} />
        <meshStandardMaterial
          color={disabled ? "#cbd5e1" : "#93c5fd"}
          transparent
          opacity={disabled ? 0.4 : 0.85}
        />
      </mesh>

      {/* Porta vermelha */}
      <mesh position={[0, 0.9, 1.52]}>
        <boxGeometry args={[0.9, 1.8, 0.1]} />
        <meshStandardMaterial
          color={disabled ? "#a3a3a3" : "#ef4444"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>

      {/* Chaminé simples */}
      <mesh position={[1.2, 3.3, -0.6]}>
        <boxGeometry args={[0.25, 0.7, 0.25]} />
        <meshStandardMaterial
          color="#9ca3af"
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>
    </group>
  );
}

function Floresta({
  onInteract,
  selected,
  disabled = false,
  position = [0, 0, 0],
}) {
  return (
    <group
      position={position}
      raycast={disabled ? () => null : undefined}
      onClick={() => !disabled && onInteract("Floresta")}
      onPointerEnter={() =>
        (document.body.style.cursor = disabled ? "not-allowed" : "pointer")
      }
      onPointerLeave={() => (document.body.style.cursor = "default")}
      onPointerDown={(e) => disabled && e.stopPropagation()}
    >
      <Floor selected={selected && !disabled} />
      {/* Árvores de diferentes tamanhos e posições */}
      {/* Árvore central */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 1.2, 16]} />
        <meshStandardMaterial
          color={disabled ? "#a3a3a3" : "#8b5a3c"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>
      <mesh position={[0, 1.6, 0]}>
        <sphereGeometry args={[0.9, 24, 24]} />
        <meshStandardMaterial
          color={disabled ? "#9ca3af" : "#22c55e"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>

      {/* Árvore 1 (menor) */}
      <mesh position={[-2, 0.6, -1]}>
        <cylinderGeometry args={[0.22, 0.22, 1.0, 16]} />
        <meshStandardMaterial
          color={disabled ? "#a3a3a3" : "#8b5a3c"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>
      <mesh position={[-2, 1.5, -1]}>
        <sphereGeometry args={[0.75, 24, 24]} />
        <meshStandardMaterial
          color={disabled ? "#9ca3af" : "#22c55e"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>

      {/* Árvore 2 (maior) */}
      <mesh position={[2, 0.9, -1.5]}>
        <cylinderGeometry args={[0.28, 0.28, 1.4, 16]} />
        <meshStandardMaterial
          color={disabled ? "#a3a3a3" : "#8b5a3c"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>
      <mesh position={[2, 2.0, -1.5]}>
        <sphereGeometry args={[1.0, 24, 24]} />
        <meshStandardMaterial
          color={disabled ? "#9ca3af" : "#22c55e"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>

      {/* Árvore 3 (pequena) */}
      <mesh position={[1.5, 0.5, 1.2]}>
        <cylinderGeometry args={[0.2, 0.2, 0.8, 16]} />
        <meshStandardMaterial
          color={disabled ? "#a3a3a3" : "#8b5a3c"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>
      <mesh position={[1.5, 1.2, 1.2]}>
        <sphereGeometry args={[0.6, 24, 24]} />
        <meshStandardMaterial
          color={disabled ? "#9ca3af" : "#22c55e"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>

      {/* Árvore 4 (alta) */}
      <mesh position={[-1.5, 1.0, 1.5]}>
        <cylinderGeometry args={[0.26, 0.26, 1.6, 16]} />
        <meshStandardMaterial
          color={disabled ? "#a3a3a3" : "#8b5a3c"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>
      <mesh position={[-1.5, 2.2, 1.5]}>
        <sphereGeometry args={[1.1, 24, 24]} />
        <meshStandardMaterial
          color={disabled ? "#9ca3af" : "#22c55e"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>

      {/* Árvore 5 (média) */}
      <mesh position={[0.8, 0.8, -2]}>
        <cylinderGeometry args={[0.24, 0.24, 1.2, 16]} />
        <meshStandardMaterial
          color={disabled ? "#a3a3a3" : "#8b5a3c"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>
      <mesh position={[0.8, 1.8, -2]}>
        <sphereGeometry args={[0.9, 24, 24]} />
        <meshStandardMaterial
          color={disabled ? "#9ca3af" : "#22c55e"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>
    </group>
  );
}

function Escola({
  onInteract,
  selected,
  disabled = false,
  position = [0, 0, 0],
}) {
  return (
    <group
      position={position}
      raycast={disabled ? () => null : undefined}
      onClick={() => !disabled && onInteract("Escola")}
      onPointerEnter={() =>
        (document.body.style.cursor = disabled ? "not-allowed" : "pointer")
      }
      onPointerLeave={() => (document.body.style.cursor = "default")}
      onPointerDown={(e) => disabled && e.stopPropagation()}
    >
      <Floor selected={selected && !disabled} />

      {/* Corpo principal da escola (prédio retangular) */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[6, 3, 3]} />
        <meshStandardMaterial
          color={disabled ? "#d4d4d4" : "#f3f4f6"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>

      {/* Telhado plano */}
      <mesh position={[0, 3.2, 0]}>
        <boxGeometry args={[6.2, 0.3, 3.2]} />
        <meshStandardMaterial
          color="#9ca3af"
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>

      {/* Porta de entrada e moldura */}
      <mesh position={[0, 1.0, 1.6]}>
        <boxGeometry args={[1.0, 2.0, 0.1]} />
        <meshStandardMaterial
          color={disabled ? "#a3a3a3" : "#8b5a3c"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>
      <mesh position={[0, 1.0, 1.61]}>
        <boxGeometry args={[1.2, 2.2, 0.02]} />
        <meshStandardMaterial
          color={disabled ? "#d4d4d4" : "#e5e7eb"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>

      {/* Degraus em frente à porta */}
      <mesh position={[0, 0.15, 1.3]}>
        <boxGeometry args={[2.0, 0.3, 0.6]} />
        <meshStandardMaterial
          color={disabled ? "#e5e7eb" : "#d1d5db"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>

      {/* Janelas — fileira superior */}
      <mesh position={[-1.8, 2.0, 1.6]}>
        <boxGeometry args={[0.9, 0.7, 0.05]} />
        <meshStandardMaterial
          color={disabled ? "#cbd5e1" : "#93c5fd"}
          transparent
          opacity={disabled ? 0.4 : 0.85}
        />
      </mesh>
      <mesh position={[1.8, 2.0, 1.6]}>
        <boxGeometry args={[0.9, 0.7, 0.05]} />
        <meshStandardMaterial
          color={disabled ? "#cbd5e1" : "#93c5fd"}
          transparent
          opacity={disabled ? 0.4 : 0.85}
        />
      </mesh>

      {/* Janelas — fileira inferior */}
      <mesh position={[-1.8, 1.2, 1.6]}>
        <boxGeometry args={[0.9, 0.7, 0.05]} />
        <meshStandardMaterial
          color={disabled ? "#cbd5e1" : "#93c5fd"}
          transparent
          opacity={disabled ? 0.4 : 0.85}
        />
      </mesh>
      <mesh position={[1.8, 1.2, 1.6]}>
        <boxGeometry args={[0.9, 0.7, 0.05]} />
        <meshStandardMaterial
          color={disabled ? "#cbd5e1" : "#93c5fd"}
          transparent
          opacity={disabled ? 0.4 : 0.85}
        />
      </mesh>

      {/* Placa da escola acima da porta */}
      <mesh position={[0, 2.8, 1.55]}>
        <planeGeometry args={[2.0, 0.5]} />
        <meshStandardMaterial
          color={disabled ? "#9ca3af" : "#2563eb"}
          transparent
          opacity={disabled ? 0.55 : 1}
        />
      </mesh>
    </group>
  );
}

export default function Estudo() {
  const [selectedPalace, setSelectedPalace] = useState("Casa");
  const [showCard, setShowCard] = useState(false);
  const [cardPalace, setCardPalace] = useState(null);
  const [lastRating, setLastRating] = useState(null);
  // Novo estado para vídeo da Casa
  const [showVideo, setShowVideo] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [videoPalace, setVideoPalace] = useState(null);
  const [progressByPalace, setProgressByPalace] = useState({
    Casa: 0,
    Floresta: 0,
    Escola: 0,
  });
  const totalProgress =
    progressByPalace.Casa + progressByPalace.Floresta + progressByPalace.Escola;

  // Navegação entre palácios
  const palaces = ["Casa", "Floresta", "Escola"];
  const goPrev = () => {
    const idx = palaces.indexOf(selectedPalace);
    setSelectedPalace(palaces[(idx - 1 + palaces.length) % palaces.length]);
  };
  const goNext = () => {
    const idx = palaces.indexOf(selectedPalace);
    setSelectedPalace(palaces[(idx + 1) % palaces.length]);
  };

  const handleInteract = (palace) => {
    if (palace === "Casa") {
      setVideoPalace(palace);
      setVideoId("lorJm9aCmzY");
      setShowVideo(true);
      return;
    }
    if (palace === "Floresta") {
      setVideoPalace(palace);
      setVideoId("_MaQlmGTpok");
      setShowVideo(true);
      return;
    }
    if (palace === "Escola") {
      setVideoPalace(palace);
      setVideoId("hYdajoW8RpI");
      setShowVideo(true);
      return;
    }
    setCardPalace(palace);
    setShowCard(true);
  };

  const replayVideoForPalace = (palace) => {
    setVideoPalace(palace);
    if (palace === "Casa") {
      setVideoId("lorJm9aCmzY");
    } else if (palace === "Floresta") {
      setVideoId("_MaQlmGTpok");
    } else if (palace === "Escola") {
      setVideoId("hYdajoW8RpI");
    }
    setShowVideo(true);
  };

  const rateAndClose = (rating) => {
    setLastRating({ palace: cardPalace, rating });
    setShowCard(false);

    if (!cardPalace) return;

    if (rating === "Repetir") {
      replayVideoForPalace(cardPalace);
      return;
    }

    // Ao concluir a tarefa de um palácio, ele preenche 4/4 de uma vez
    setProgressByPalace((prev) => ({
      ...prev,
      [cardPalace]: 4,
    }));
  };

  return (
    <main className="min-h-screen bg-bg-main text-text-primary">
      <header className="sticky top-0 z-30 bg-bg-main/85 border-b border-separator shadow-light backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/engramify-logo-colored.svg"
              alt="Engramify"
              width={140}
              height={32}
              className="block md:hidden h-9 w-auto object-contain"
              priority
            />
            <Image
              src="/engramify-logo-full-colored.svg"
              alt="Engramify"
              width={156}
              height={35}
              className="hidden md:block h-12 w-auto object-contain"
              priority
            />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/usuario"
              aria-label="Usuário"
              title="Usuário"
              className="inline-flex items-center justify-center text-text-secondary hover:text-accent-primary transition-base focus:outline-none"
            >
              <CircleUser
                size={ICON_SIZES.md}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="rounded-xl border border-border bg-bg-surface p-4 md:p-6 shadow-medium">
          {/* Botão Voltar fora do Canvas, dentro do card */}
          <div className="mb-2 px-2 flex items-center">
            <Button variant="secondary" onClick={() => window.history.back()}>
              Voltar
            </Button>
          </div>

          {/* Cabeçalho do objeto */}
          <div className="mb-2 px-2">
            <div className="text-center text-sm md:text-base font-medium text-text-primary">
              {selectedPalace}
            </div>
          </div>

          {/* Canvas 3D */}
          <div className="relative w-full h-[440px] md:h-[560px] rounded-lg border border-border overflow-hidden bg-bg-main">
            <Canvas camera={{ position: [0, 4, 12], fov: 60 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[6, 10, 6]} intensity={0.8} />

              {/* Palácio selecionado */}
              {selectedPalace === "Casa" && (
                <Casa
                  onInteract={handleInteract}
                  selected
                  disabled={progressByPalace.Casa >= 4}
                  position={[0, 0, 0]}
                />
              )}
              {selectedPalace === "Floresta" && (
                <Floresta
                  onInteract={handleInteract}
                  selected
                  disabled={progressByPalace.Floresta >= 4}
                  position={[0, 0, 0]}
                />
              )}
              {selectedPalace === "Escola" && (
                <Escola
                  onInteract={handleInteract}
                  selected
                  disabled={progressByPalace.Escola >= 4}
                  position={[0, 0, 0]}
                />
              )}
            </Canvas>
            <div className="absolute top-2 right-2 z-10 px-3 py-1 rounded-full border border-border bg-bg-surface/70 backdrop-blur-sm text-xs font-medium text-text-primary">
              {totalProgress}/12
            </div>

            <button
              type="button"
              aria-label="Anterior"
              title="Anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full text-text-secondary bg-bg-surface/70 hover:bg-bg-surface/80 hover:ring-2 hover:ring-accent-primary/50 backdrop-blur-sm border border-border transition-base focus:outline-none focus-visible:ring-2 ring-accent-primary/50 cursor-pointer"
              onClick={goPrev}
            >
              <ChevronLeft
                size={ICON_SIZES.md}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </button>
            <button
              type="button"
              aria-label="Próximo"
              title="Próximo"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full text-text-secondary bg-bg-surface/70 hover:bg-bg-surface/80 hover:ring-2 hover:ring-accent-primary/50 backdrop-blur-sm border border-border transition-base focus:outline-none focus-visible:ring-2 ring-accent-primary/50 cursor-pointer"
              onClick={goNext}
            >
              <ChevronRight
                size={ICON_SIZES.md}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </button>
          </div>

          {/* Vídeo YouTube em tela cheia */}
          {showVideo && (
            <div className="fixed inset-0 z-50 bg-black">
              <YouTube
                videoId={videoId}
                iframeClassName="w-screen h-screen"
                opts={{ playerVars: { autoplay: 1, fs: 1 } }}
                onReady={(e) => {
                  try {
                    const iframe = e.target.getIframe();
                    if (iframe && iframe.requestFullscreen) {
                      iframe.requestFullscreen();
                    }
                  } catch (err) {
                    console.error("Erro ao entrar em tela cheia:", err);
                  }
                }}
                onEnd={() => {
                  try {
                    if (document.fullscreenElement) document.exitFullscreen();
                  } catch (err) {
                    console.error("Erro ao sair de tela cheia:", err);
                  }
                  setShowVideo(false);
                  setCardPalace(videoPalace || "Casa");
                  setShowCard(true);
                }}
                onError={() => {
                  try {
                    if (document.fullscreenElement) document.exitFullscreen();
                  } catch (err) {
                    console.error("Erro ao sair de tela cheia:", err);
                  }
                  setShowVideo(false);
                  setCardPalace(videoPalace || "Casa");
                  setShowCard(true);
                }}
              />
            </div>
          )}

          {/* Flash card estilo Anki */}
          {showCard && (
            <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
              <div className="w-[92%] max-w-md rounded-xl border border-border bg-bg-surface p-6 shadow-medium">
                <div className="text-sm text-text-secondary mb-1">
                  Palácio: {cardPalace}
                </div>
                <h2 className="text-xl font-semibold">Como foi relembrar?</h2>
                <p
                  className="text-text-secondary mt-2"
                  style={{ fontStyle: "italic" }}
                >
                  A IA ajusta o espaçamento de repetição com base em sua
                  performance.
                </p>
                <div className="mt-4 grid grid-cols-4 gap-3">
                  <Button
                    variant="secondary"
                    onClick={() => rateAndClose("Repetir")}
                  >
                    Repetir
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => rateAndClose("Difícil")}
                  >
                    Difícil
                  </Button>
                  <Button variant="primary" onClick={() => rateAndClose("Bom")}>
                    Bom
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => rateAndClose("Fácil")}
                  >
                    Fácil
                  </Button>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button
                    variant="secondary"
                    onClick={() => setShowCard(false)}
                  >
                    Fechar
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 flex justify-end">
            <Button
              variant="primary"
              disabled={totalProgress !== 12}
              aria-label={
                totalProgress !== 12
                  ? `Conclua os 3 palácios (${totalProgress}/12)`
                  : "Concluir"
              }
              title={
                totalProgress !== 12
                  ? `Conclua os 3 palácios (${totalProgress}/12)`
                  : "Concluir"
              }
              className={
                totalProgress !== 12 ? "cursor-not-allowed" : "cursor-pointer"
              }
              onClick={() => {
                if (totalProgress === 12) window.location.href = "/usuario";
              }}
            >
              {totalProgress === 12
                ? "Concluir"
                : `Concluir (${totalProgress}/12)`}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-separator">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Engramify
          </div>
          <nav className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-sm w-full">
            <Link
              href="/privacidade"
              className="text-text-secondary hover:text-accent-primary transition-base"
            >
              Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-text-secondary hover:text-accent-primary transition-base"
            >
              Termos
            </Link>
            <Link
              href="/cookies"
              className="text-text-secondary hover:text-accent-primary transition-base"
            >
              Cookies
            </Link>
            <a
              href="mailto:info.engramify@gmail.com"
              className="text-text-secondary hover:text-accent-primary transition-base"
            >
              Contato
            </a>
            <span
              className="hidden sm:block w-px h-5 bg-separator"
              aria-hidden="true"
            />
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/tav0dev/engramify"
                aria-label="GitHub"
                title="GitHub"
                className="text-text-secondary hover:text-accent-primary transition-base rounded-md p-1 focus:outline-none focus:ring-2 ring-accent-primary/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandIcon
                  icon={siGithub}
                  size={ICON_SIZES.md}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </a>
              <a
                href="https://discord.gg/YUN3EeWgxD"
                aria-label="Discord"
                title="Discord"
                className="text-text-secondary hover:text-accent-primary transition-base rounded-md p-1 focus:outline-none focus:ring-2 ring-accent-primary/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandIcon
                  icon={siDiscord}
                  size={ICON_SIZES.md}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </a>
              <a
                href="https://x.com/engramifyapp"
                aria-label="X"
                title="X"
                className="text-text-secondary hover:text-accent-primary transition-base rounded-md p-1 focus:outline-none focus:ring-2 ring-accent-primary/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandIcon
                  icon={siX}
                  size={ICON_SIZES.md}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </a>
              <a
                href="https://instagram.com/engramifyapp"
                aria-label="Instagram"
                title="Instagram"
                className="text-text-secondary hover:text-accent-primary transition-base rounded-md p-1 focus:outline-none focus:ring-2 ring-accent-primary/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BrandIcon
                  icon={siInstagram}
                  size={ICON_SIZES.md}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </a>
            </div>
          </nav>
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="text-text-secondary text-sm">
              Assine nossa newsletter
            </div>
            <form
              className="w-full sm:w-auto flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = formData.get("email");
                console.log("Newsletter email:", email);
                alert("Obrigado por assinar nossa newsletter!");
              }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="seu@email.com"
                className="flex-1 rounded-md bg-bg-surface border border-border px-4 py-3 text-sm placeholder:text-text-secondary focus:outline-none focus:ring-2 ring-accent-primary/50 focus:border-accent-primary transition-base"
              />
              <Button variant="primary" type="submit">
                Assinar
              </Button>
            </form>
          </div>
        </div>
      </footer>
    </main>
  );
}
