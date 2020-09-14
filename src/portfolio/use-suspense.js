import { createResource } from "lib/react-cache-forked";

const logger = (label, ...values) =>
  process.env.NODE_ENV === "development" &&
  console.log(`[⌛️SUSPENSE] ${label}`, ...values);

/* Suspense Fetching Utils */

// Suspend image loading inside of a promise
async function loadImage(src) {
  logger("Loading image", src);
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => logger("✅ Loaded image", src) || resolve(src);
    img.onerror = error => reject(error);
  });
}

const imageFetcher = createResource(loadImage);

export const useSuspenseImage = imageUrl => {
  imageFetcher.read(imageUrl);
  return imageUrl;
};
