import { Container } from "@/components/ui/Container";
import { ActionButton } from "@/components/ui/ActionButton";
import { basePath } from "@/lib/site";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Page not found</h1>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
        That page doesn&apos;t exist. Head back to the portfolio.
      </p>
      <div className="mt-8">
        <ActionButton href={`${basePath}/`} variant="primary">
          Back to home
        </ActionButton>
      </div>
    </Container>
  );
}
