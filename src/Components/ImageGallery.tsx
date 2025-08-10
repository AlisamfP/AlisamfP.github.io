import {TbCornerLeftUp} from 'react-icons/tb'
import type { Image } from "../types/project-types";

type ImageGalleryProps = {
  images: Image[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {

  return (
    <section
            className={`grid grid-cols-1 ${
              images.length > 1 ? "md:grid-cols-2 md:gap-2" : ""
            } justify-items-center`}
          >
            <h2 className="font-bold text-lg justify-self-start col-span-full text-[#003333]">
              Project Images
            </h2>
            <hr className="mb-2 w-full h-px text-[#003333] bg-[#003333] col-span-full" />
            {/* loop through images in project */}
            {images.length === 0 ? (
              <p className="col-span-full text-neutral-600 dark:text-neutral-400 italic ml-2 justify-self-start">
                No images available for this project.
              </p>
            ) : (
              images.map((image) => (
                <figure
                  className="mb-4 max-w-2xl flex flex-col"
                  key={image.link}
                >
                  <img
                    className="mb-1 h-auto max-w-full align-middle leading-none rounded-md"
                    src={image.link}
                    alt={image.alt}
                  />
                  <figcaption className="text-xs text-neutral-600 dark:text-neutral-400 italic text-center">
                    <TbCornerLeftUp className="text-lg inline mb-4" />
                    {image.description}
                  </figcaption>
                </figure>
              ))
            )}
          </section>
  );
};

export default ImageGallery;
