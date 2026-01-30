import * as React from "react";

export default function Container({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={["mx-auto w-full max-w-6xl px-6", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
