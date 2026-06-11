"use client";

import BeforeAfter from "./BeforeAfter";
import ImageSlot from "./ImageSlot";
import { isBeforeAfterTile, realisatieTiles } from "../_data/realisaties";

export default function GalleryFilter() {
  return (
    <>
      <div className="gallery gallery--showcase">
        {realisatieTiles.map((tile, i) => {
          const stagger = (i % 6) + 1;
          return (
            <div
              key={tile.id}
              className={`tile reveal ${tile.size}`}
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
                  <ImageSlot src={tile.src} alt={tile.alt} />
                )}
              </div>
            </div>
          );
        })}
      </div>

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
