
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

type Props = {
  src: string;            // .m3u8 URL
  poster?: string;        // optional
  autoPlay?: boolean;     // default false
  muted?: boolean;        // default false (set true if you want autoplay to work)
  className?: string;     // tailwind or your own
};

export default function HlsStrictPlayer({
  src,
  poster,
  autoPlay = true,
  muted = false,
  className = "w-full h-[250px] md:h-[500px] -mt-2",
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [status, setStatus] = useState<"idle"|"loading"|"ready"|"error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    setStatus("loading");
    setErrorMsg("");

    
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.onloadedmetadata = () => setStatus("ready");
      video.onerror = () => {
        setStatus("error");
        setErrorMsg("Native HLS error (Safari). Check URL/headers.");
      };
      return () => {
        video.removeAttribute("src");
        video.load();
      };
    }

    
    if (Hls.isSupported()) {
      const hls = new Hls({
       
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 90,
        
      });

      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        
      });

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setStatus("ready");
        if (autoPlay) {
          video.muted = muted || video.muted;
          video.play().catch(() => {
          
          });
        }
      });

      hls.on(Hls.Events.ERROR, (_evt, data) => {
        
        const detail = `${data.type}/${data.details}`;
        if (data.fatal) {
          setStatus("error");
          setErrorMsg(
            `HLS fatal error: ${detail}. Likely causes: CORS, mixed content (http in https), or wrong MIME/headers. Open DevTools → Network.`
          );
          hls.destroy();
        } else {
        
          console.warn("HLS non-fatal error:", data);
        }
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      return () => hls.destroy();
    }

 
    video.src = src;
    video.onloadedmetadata = () => setStatus("ready");
    video.onerror = () => {
      setStatus("error");
      setErrorMsg("Browser cannot play this source. Try Chrome/Edge/Firefox with hls.js.");
    };

    return () => {
      video.removeAttribute("src");
      video.load();
    };
  }, [src, autoPlay, muted]);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        controls
        playsInline
        preload="metadata"
        poster={poster}
        muted={muted}
        className={className}
       
        crossOrigin="anonymous"
      />

      {/* Small overlay for status/errors */}
      {status !== "ready" && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="rounded-lg px-3 py-1 text-xs bg-black/60 text-white">
            {status === "loading" && "Loading stream…"}
            {status === "error" && (errorMsg || "Failed to load stream")}
          </div>
        </div>
      )}
    </div>
  );
}
