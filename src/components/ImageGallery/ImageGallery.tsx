"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProjectImage } from "@/types/project-types";
import styles from "./ImageGallery.module.scss";

export function ImageGallery({ images }: { images: ProjectImage[] }) {
  const [active, setActive] = useState(0);

  if (images.length === 0) return null;
  const current = images[active];

  return (
    <figure className={styles.gallery}>
      <div className={styles.main}>
        <Image
          src={current.link}
          alt={current.alt}
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          className={styles.mainImg}
        />
      </div>
      <figcaption className={styles.caption}>{current.description}</figcaption>

      {images.length > 1 && (
        <ul className={styles.thumbs} role="list">
          {images.map((image, i) => (
            <li key={image.link}>
              <button
                type="button"
                className={`${styles.thumb} ${i === active ? styles.active : ""}`}
                aria-label={`Show image ${i + 1}: ${image.description}`}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                <Image
                  src={image.link}
                  alt=""
                  fill
                  sizes="72px"
                  className={styles.thumbImg}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </figure>
  );
}
