"use client";

import Container from "./Container";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border bg-surface/55 backdrop-blur">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <Image
              src="/cakirbey-logo.svg"
              alt="Çakırbey Harita"
              width={220}
              height={52}
              unoptimized
              className="h-12 w-auto max-w-[220px]"
            />
            <div className="text-xs font-semibold tracking-[0.14em] text-brand-navy/80">
              <span className="block">{t("licenseLine1")}</span>
              <span className="block">{t("licenseLine2")}</span>
            </div>
            <div className="text-sm font-semibold tracking-tight text-brand-navy">
              {t("ownerLine1")} <span className="text-muted">- {t("ownerLine2")}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-amber">
              <MapPin className="h-4 w-4" />
              {t("contact")}
            </div>
            <div className="space-y-3 text-sm text-muted">
              <div>
                <span className="block">Yenişehir Mah. 231.Sk. Melek Apt No:1/1</span>
                <span className="block">
                  Haliliye / <span className="font-semibold">ŞANLIURFA</span>
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-brand-navy/70">
                  <Phone className="h-4 w-4 text-brand-amber" />
                  {t("phone")}
                </div>
                <a
                  className="block font-semibold text-brand-navy transition-colors hover:text-brand-amber"
                  href="tel:+904143165566"
                >
                  0414 316 55 66
                </a>
                <a
                  className="block font-semibold text-brand-navy transition-colors hover:text-brand-amber"
                  href="tel:+905347706075"
                >
                  0534 770 60 75 <span className="text-muted">(WhatsApp)</span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-amber">
              <Mail className="h-4 w-4" />
              {t("email")}
            </div>
            <div className="space-y-2 text-sm text-muted">
              <a
                className="block font-semibold text-brand-navy transition-colors hover:text-brand-amber"
                href="mailto:lihkab775@gmail.com"
              >
                LİHKAP: <span className="font-medium text-muted">lihkab775@gmail.com</span>
              </a>
              <a
                className="block font-semibold text-brand-navy transition-colors hover:text-brand-amber"
                href="mailto:cakirbeyharita@gmail.com"
              >
                Haritalama: <span className="font-medium text-muted">cakirbeyharita@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <div>© {year} Çakırbey Harita. {t("rights")}</div>
          <a
            href="https://www.mirafikirevi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-tight text-brand-navy/60 transition-colors hover:text-brand-amber"
          >
            {t("designBy")}
          </a>
        </div>
      </Container>
    </footer>
  );
}
