export function TechTag({ children }: { children: string }) {
  return (
    <li className="rounded-sm border border-line bg-transparent px-2 py-1 font-mono text-[11px] leading-none tracking-tight text-muted transition-colors duration-150 hover:border-line-strong hover:text-fg">
      {children}
    </li>
  );
}

export function TechList({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <TechTag key={item}>{item}</TechTag>
      ))}
    </ul>
  );
}
