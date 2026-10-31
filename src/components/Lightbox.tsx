import { useCallback, useEffect, useState } from "react";
import type { ProjectImage } from "@/data/projects";
import { ProjectImageCaption } from "@/components/ProjectImageCaption";

/**
 * Full-screen image viewer. Click any gallery image to open it,
 * Escape or the close button to dismiss, arrows to move between images.
 */
export function Lightbox({
  images,
  index,
  onClose,
}: {
  images: ProjectImage[];
  index: number | null;
  onClose: () => void;
}) {
  const [i, setI] = useState(index ?? 0);
  useEffect(() => {
    if (index !== null) setI(index);
  }, [index]);

  const step = useCallback(
    (d: number) => setI((v) => (v + d + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, onClose, step]);

  if (index === null) return null;
  const img = images[i];
  if (!img) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
      className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <p className="label-caps text-muted-foreground">
          {i + 1} / {images.length}
        </p>
        <button
          onClick={onClose}
          aria-label="Close"
          className="label-caps text-muted-foreground hover:text-foreground"
        >
          Close ✕
        </button>
      </div>
      <div className="px-6 md:px-12"><ProjectImageCaption image={img} /></div>
      <div className="flex min-h-0 flex-1 items-center justify-center px-6 pb-6 md:px-12">
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-full max-w-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      {img.caption && (
        <p className="label-caps pb-6 text-center text-muted-foreground">{img.caption}</p>
      )}
      {images.length > 1 && (
        <>
          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 px-3 py-6 text-3xl text-muted-foreground hover:text-foreground"
          >
            ←
          </button>
          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-6 text-3xl text-muted-foreground hover:text-foreground"
          >
            →
          </button>
        </>
      )}
    </div>
  );
}
