import type { CSSProperties } from "react";

export function Icon({
  name,
  className = "",
  style,
}: {
  name: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`} style={style}>
      {name}
    </span>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon
          key={i}
          name="star"
          className={`star-pop ${className}`}
          style={{ transitionDelay: `${350 + i * 90}ms` }}
        />
      ))}
    </>
  );
}

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
