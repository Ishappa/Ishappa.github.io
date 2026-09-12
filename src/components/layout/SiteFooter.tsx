import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] text-subtle">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-[11px] text-subtle">
          Built with Next.js, TypeScript and Tailwind CSS
        </p>
      </Container>
    </footer>
  );
}
