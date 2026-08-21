import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { gallery } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") {
        setOpen((i) => (i === null ? i : (i + 1) % gallery.length));
      }
      if (event.key === "ArrowLeft") {
        setOpen((i) =>
          i === null ? i : (i - 1 + gallery.length) % gallery.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const active = open === null ? null : gallery[open];

  return (
    <>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
        {gallery.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpen(index)}
            className={cn(
              "group relative overflow-hidden bg-elevated text-left",
              "rounded-md md:rounded-lg",
              item.layout === "feature" && "col-span-2 md:row-span-2",
              item.layout === "normal" && "md:col-span-2",
              item.layout === "wide" && "col-span-2 md:col-span-4",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
            )}
          >
            <img
              src={item.src}
              alt={item.alt}
              className={cn(
                "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105",
                item.layout === "wide" ? "aspect-photo" : "aspect-portrait",
              )}
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-bg/80 to-transparent px-3 py-3 pt-10 text-xs tracking-widest text-accent uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {item.caption}
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg/92 p-4"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full text-fg transition-colors duration-150 hover:bg-elevated"
            onClick={() => setOpen(null)}
          >
            <X className="size-5" strokeWidth={1.5} />
          </button>
          <img
            src={active.src}
            alt={active.alt}
            className="max-h-dvh max-w-full rounded-md object-contain py-8"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
