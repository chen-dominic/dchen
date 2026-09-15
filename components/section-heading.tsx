interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl uppercase">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
