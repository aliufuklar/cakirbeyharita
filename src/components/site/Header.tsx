"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Container from "./Container";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

type NavItem =
  | { key: string; label: string; type: "section"; id: "services" | "hakkimizda" | "iletisim" }
  | { key: string; label: string; type: "route"; href: string };

const navItems: NavItem[] = [
  { key: "services", label: "Hizmetler", type: "section", id: "services" },
  { key: "iha", label: "İHA", type: "route", href: "/hizmetler/iha-haritalama" },
  { key: "about", label: "Hakkımızda", type: "section", id: "hakkimizda" },
  { key: "contact", label: "İletişim", type: "section", id: "iletisim" },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setIsScrolled(y > 4);
      setIsCompact(y > 72);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      if (pathname === "/hizmetler/iha-haritalama") {
        setActiveKey("iha");
        return;
      }
      if (pathname.startsWith("/hizmetler/")) {
        setActiveKey("services");
        return;
      }
      setActiveKey("");
      return;
    }

    const normalizeHash = (hash: string) => {
      const id = hash.replace("#", "");
      if (!id) return "";
      if (id === "hizmetler") return "services";
      return id;
    };

    setActiveKey(normalizeHash(window.location.hash));

    const sectionIds: Array<"services" | "hakkimizda" | "iletisim"> = ["services", "hakkimizda", "iletisim"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        const id = visible?.target?.id;
        if (id) setActiveKey(id);
      },
      { threshold: [0.2, 0.35, 0.5, 0.65] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome, pathname]);

  const hrefFor = (item: NavItem) => {
    if (item.type === "route") return item.href;
    return isHome ? `#${item.id}` : `/#${item.id}`;
  };

  const isItemActive = (item: NavItem) => {
    if (item.type === "route") return item.key === activeKey;
    if (item.id === "services") return activeKey === "services";
    return activeKey === item.id;
  };

  const onNavClick = (e: MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    setIsMobileMenuOpen(false);

    if (item.type === "route") {
      e.preventDefault();
      router.push(item.href);
      return;
    }

    e.preventDefault();
    if (isHome) {
      const el = document.getElementById(item.id) ?? document.getElementById("hizmetler");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${item.id}`);
      setActiveKey(item.id);
      return;
    }

    router.push(`/#${item.id}`);
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-surface/70 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(7,26,45,0.35)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <Container
        className={[
          "flex items-center justify-between",
          isCompact ? "h-16" : "h-20",
        ].join(" ")}
      >
        <a href="/" className="group flex items-center gap-3">
          <Image
            src="/cakirbey-logo.svg"
            alt="Çakırbey Harita"
            width={220}
            height={52}
            priority
            unoptimized
            className="h-10 w-auto max-w-[170px] md:max-w-[220px]"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={hrefFor(item)}
              onClick={(e) => onNavClick(e, item)}
              aria-current={isItemActive(item) ? "page" : undefined}
              className={[
                "text-sm font-medium transition-colors",
                isItemActive(item)
                  ? "text-brand-amber"
                  : "text-brand-navy/80 hover:text-brand-navy",
              ].join(" ")}
            >
              {item.label}
            </a>
          ))}
          <a
            href={isHome ? "#iletisim" : "/#iletisim"}
            onClick={(e) => onNavClick(e, { key: "contact", label: "İletişim", type: "section", id: "iletisim" })}
            className="group inline-flex h-10 items-center rounded-full border border-border bg-surface-strong/60 px-4 text-sm font-semibold text-brand-navy transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_rgba(158,50,56,0.22)] active:scale-95"
          >
            Teklif Al
          </a>
        </nav>

        <button 
          className="md:hidden p-2 text-brand-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-surface/95 backdrop-blur-xl overflow-hidden"
          >
            <Container className="py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={hrefFor(item)}
                  onClick={(e) => onNavClick(e, item)}
                  aria-current={isItemActive(item) ? "page" : undefined}
                  className={[
                    "text-base font-medium py-2 border-b border-border/50 transition-colors",
                    isItemActive(item)
                      ? "text-brand-amber"
                      : "text-brand-navy/80 hover:text-brand-navy",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={isHome ? "#iletisim" : "/#iletisim"}
                onClick={(e) => onNavClick(e, { key: "contact", label: "İletişim", type: "section", id: "iletisim" })}
                className="mt-2 inline-flex h-12 items-center justify-center rounded-lg bg-brand-navy text-white font-semibold"
              >
                Teklif Al
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
