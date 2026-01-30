import Container from "./Container";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section className="pt-16">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-strong/60 px-4 py-2 text-xs font-medium text-brand-navy/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
            {t("badge")}
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-brand-navy md:text-5xl">
            {t("titleLine1")}{" "}
            <span className="text-brand-amber">{t("titleHighlight")}</span>
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted md:text-lg">
            {t("description")}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#services"
              className="group inline-flex h-12 items-center justify-center rounded-full bg-brand-navy px-6 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(7,26,45,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(7,26,45,0.4)] active:scale-95"
            >
              {t("ctaServices")}
            </a>
            <a
              href="#iletisim"
              className="group inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface-strong/60 px-6 text-sm font-semibold text-brand-navy transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_rgba(158,50,56,0.22)] active:scale-95"
            >
              {t("ctaContact")}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-surface-strong/60 backdrop-blur">
            <Image
              src="/Surveyor Tripod Total Station 512x384.webp"
              alt="Çakırbey Harita Total Station ölçüm ekipmanı"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain md:object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(158,50,56,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(158,50,56,0.10)_1px,transparent_1px)] bg-[size:36px_36px] opacity-25" />
            <div className="absolute bottom-5 left-5 rounded-2xl border border-border bg-white/65 px-4 py-2 text-xs text-brand-navy/85 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                <span className="font-semibold tracking-tight text-brand-amber">{t("imageBadgeTitle")}</span>
              </div>
              <div className="mt-0.5 text-[11px] font-semibold tracking-tight text-brand-navy/80">
                {t("imageBadgeSubtitle")}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
