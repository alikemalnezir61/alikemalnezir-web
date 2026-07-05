export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={
            "mt-3 max-w-2xl text-lg text-slate-600" +
            (align === "center" ? " mx-auto" : "")
          }
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
