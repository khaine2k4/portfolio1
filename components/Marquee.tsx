import { site } from "@/data/site";

export default function Marquee() {
  const items = [...site.techStack, ...site.techStack];
  return (
    <div className="marquee-mask relative overflow-hidden py-6">
      <div className="flex w-max animate-marquee gap-4">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
