"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { asset, basePath, navItems } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  /** Active-section indicator. */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /** Lock scroll and close on Escape while the mobile sheet is open. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const home = basePath || "/";

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-[68rem] items-center justify-between px-5 sm:px-8">
        <a
          href={home}
          className="font-mono text-[13px] font-medium tracking-tight transition-colors hover:text-accent"
        >
          {profile.name}
          <span className="ml-2 hidden text-subtle sm:inline">/ {profile.shortTitle}</span>
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`rounded-sm px-3 py-2 text-sm transition-colors duration-150 ${
                active === item.href ? "text-accent" : "text-muted hover:text-fg"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={asset(profile.links.resume)}
            download=""
            className="ml-2 inline-flex min-h-9 items-center rounded-sm border border-line-strong px-3 text-sm transition-colors duration-150 hover:border-fg"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-sm text-fg md:hidden"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="border-t border-line bg-bg md:hidden"
        >
          <ul className="mx-auto w-full max-w-[68rem] px-5 py-2 sm:px-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-line text-[15px] text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={asset(profile.links.resume)}
                download=""
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center text-[15px] text-accent"
              >
                Download resume
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
