"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import BeforeAfter from "./BeforeAfter";
import ImageSlot from "./ImageSlot";
import { isBeforeAfterTile, realisatieTiles } from "../_data/realisaties";
import {
  SERVICE_CATEGORIES,
  isServiceCategorySlug,
  type ServiceCategorySlug,
} from "../_data/services";

type ActiveFilter = "all" | ServiceCategorySlug;

function parseActiveFilter(value: string | null): ActiveFilter {
  if (isServiceCategorySlug(value)) return value;
  return "all";
}

export default function GalleryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = parseActiveFilter(searchParams.get("cat"));

  const setFilter = useCallback(
    (next: ActiveFilter) => {
      const params = new URLSearchParams(searchParams.toString());
      if (next === "all") {
        params.delete("cat");
      } else {
        params.set("cat", next);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const filteredTiles = useMemo(() => {
    if (active === "all") return realisatieTiles;
    return realisatieTiles.filter((tile) => tile.category === active);
  }, [active]);

  return (
    <>
      <div className="gallery-filters" role="tablist" aria-label="Filter realisaties">
        <button
          type="button"
          role="tab"
          aria-selected={active === "all"}
          className={`gallery-filter-btn${active === "all" ? " is-active" : ""}`}
          onClick={() => setFilter("all")}
        >
          Alles
        </button>
        {SERVICE_CATEGORIES.map((service) => (
          <button
            key={service.slug}
            type="button"
            role="tab"
            aria-selected={active === service.slug}
            className={`gallery-filter-btn${active === service.slug ? " is-active" : ""}`}
            onClick={() => setFilter(service.slug)}
          >
            {service.title}
          </button>
        ))}
      </div>

      {filteredTiles.length === 0 ? (
        <p className="gallery-empty">
          Nog geen foto&apos;s in deze categorie. Kies een andere filter of bekijk alles.
        </p>
      ) : (
        <div className="gallery gallery--showcase">
          {filteredTiles.map((tile, i) => {
            const stagger = (i % 6) + 1;
            return (
              <div
                key={tile.id}
                className={`tile ${tile.size}`}
                data-d={String(stagger)}
              >
                <div className="tile-zoom">
                  {isBeforeAfterTile(tile) ? (
                    <BeforeAfter
                      embedded
                      beforeSrc={tile.beforeSrc}
                      afterSrc={tile.afterSrc}
                      beforeAlt={tile.beforeAlt}
                      afterAlt={tile.afterAlt}
                    />
                  ) : (
                    <ImageSlot
                      src={tile.src}
                      alt={tile.alt}
                      position={tile.position}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "46px" }} className="reveal">
        <a className="btn btn-ghost btn-lg" href="/contact">
          Plan jouw project
          <svg className="ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </>
  );
}
