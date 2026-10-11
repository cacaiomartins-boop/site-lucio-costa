import { clinic } from "../data/clinic";

// Seção de vídeo de apresentação. Fica oculta enquanto clinic.video.url estiver vazio.
export default function Video() {
  const { url, poster, title } = clinic.video;
  if (!url) return null;

  const isFile = /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
  return (
    <section id="video" className="py-12 md:py-[72px] bg-paper">
      <div className="max-w-4xl mx-auto px-6 md:px-12 reveal-item">
        <div className="relative aspect-video rounded-[20px] overflow-hidden bg-forest shadow-xl">
          {isFile ? (
            <video
              src={url}
              poster={poster || undefined}
              controls
              preload="none"
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <iframe
              src={url}
              title={title}
              loading="lazy"
              allow="accelerometer; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full border-0"
            />
          )}
        </div>
      </div>
    </section>
  );
}
