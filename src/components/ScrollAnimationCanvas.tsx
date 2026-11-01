import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface ScrollAnimationCanvasProps {
  totalFrames?: number;
  lerpFactor?: number;
}

export const ScrollAnimationCanvas: React.FC<ScrollAnimationCanvasProps> = ({
  totalFrames = 300,
  lerpFactor = 0.08,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const frames: (HTMLImageElement | null)[] = new Array(totalFrames).fill(null);
    let lastDrawnIndex = -1;
    let targetProgress = 0;
    let currentProgress = 0;
    let isMounted = true;
    let animFrameId = 0;

    function getFramePath(index: number) {
      const num = String(index + 1).padStart(3, '0');
      return `/frames/ezgif-frame-${num}.jpg`;
    }

    // Immediately load and render the first frame
    const firstImg = new Image();
    firstImg.src = getFramePath(0);
    firstImg.onload = () => {
      if (!isMounted) return;
      frames[0] = firstImg;
      if (lastDrawnIndex === -1) {
        renderFrame(0);
      }
    };

    // Preload remaining frames in batches to avoid network congestion
    const preloadRemaining = () => {
      let index = 1;
      const batchSize = 10;

      function loadNextBatch() {
        if (!isMounted || index >= totalFrames) return;
        const end = Math.min(index + batchSize, totalFrames);
        for (let i = index; i < end; i++) {
          const img = new Image();
          img.src = getFramePath(i);
          const captureIdx = i;
          img.onload = () => {
            if (isMounted) frames[captureIdx] = img;
          };
        }
        index = end;
        if (index < totalFrames) {
          setTimeout(loadNextBatch, 30);
        }
      }

      loadNextBatch();
    };

    preloadRemaining();

    // Find nearest loaded frame to guarantee butter-smooth scrub without blank flashing
    function getClosestLoadedFrame(targetIdx: number): HTMLImageElement | null {
      if (frames[targetIdx]?.complete && (frames[targetIdx]?.naturalWidth || 0) > 0) {
        return frames[targetIdx];
      }
      for (let offset = 1; offset < totalFrames; offset++) {
        const prev = targetIdx - offset;
        if (prev >= 0 && frames[prev]?.complete && (frames[prev]?.naturalWidth || 0) > 0) {
          return frames[prev];
        }
        const next = targetIdx + offset;
        if (next < totalFrames && frames[next]?.complete && (frames[next]?.naturalWidth || 0) > 0) {
          return frames[next];
        }
      }
      return null;
    }

    function renderFrame(index: number) {
      if (!canvas || !ctx) return;
      const img = getClosestLoadedFrame(index);
      if (!img) return;

      const cw = window.innerWidth;
      const ch = window.innerHeight;
      const iw = img.naturalWidth || 1920;
      const ih = img.naturalHeight || 1080;

      // Cover scaling preserving aspect ratio
      const scale = Math.max(cw / iw, ch / ih);
      const nw = iw * scale;
      const nh = ih * scale;
      const cx = (cw - nw) * 0.5;
      const cy = (ch - nh) * 0.5;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, cx, cy, nw, nh);
      lastDrawnIndex = index;
    }

    function handleResize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (lastDrawnIndex >= 0) {
        renderFrame(lastDrawnIndex);
      } else if (frames[0]?.complete) {
        renderFrame(0);
      }
    }

    window.addEventListener('resize', handleResize, { passive: true });
    handleResize();

    // Initialize Lenis for luxurious smooth scrolling across all devices
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.8,
    });

    lenis.on('scroll', (e: { progress: number }) => {
      targetProgress = Math.min(1, Math.max(0, e.progress));
    });

    function updateNativeScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetProgress = Math.min(1, Math.max(0, scrollY / maxScroll));
      }
    }

    window.addEventListener('scroll', updateNativeScroll, { passive: true });

    // Continuous RAF loop with LERP interpolation
    function loop(time: number) {
      if (!isMounted) return;

      lenis.raf(time);

      // Smooth progress interpolation
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.00005) {
        currentProgress += diff * lerpFactor;
      } else {
        currentProgress = targetProgress;
      }

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${currentProgress})`;
      }

      const targetFrameIndex = Math.min(
        totalFrames - 1,
        Math.max(0, Math.round(currentProgress * (totalFrames - 1)))
      );

      if (targetFrameIndex !== lastDrawnIndex) {
        renderFrame(targetFrameIndex);
      }

      animFrameId = requestAnimationFrame(loop);
    }

    animFrameId = requestAnimationFrame(loop);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', updateNativeScroll);
      lenis.destroy();
    };
  }, [totalFrames, lerpFactor]);

  return (
    <>
      {/* Top subtle progress bar */}
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0066FF] via-[#00B4D8] to-[#90E0EF] origin-left z-50 pointer-events-none transition-transform duration-75 shadow-[0_0_12px_rgba(0,102,255,0.6)]"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden="true"
      />

      {/* Fixed Fullscreen Background Canvas */}
      <canvas
        ref={canvasRef}
        id="scroll-canvas"
        className="fixed inset-0 w-screen h-screen pointer-events-none z-0 block"
      />
    </>
  );
};

