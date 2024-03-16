import { joinURL } from "ufo";
import type { ProviderGetImage } from "@nuxt/image";

export const getImage: ProviderGetImage = (
  src,
  { modifiers = {}, baseURL } = {}
) => {
  const sizes = [100, 250, 500]
  const size = modifiers.width || modifiers.height || 0
  const selectedSize = sizes.find((s) => s >= size) || sizes[sizes.length -1]

  const prefix = `ingredients_${selectedSize}x${selectedSize}`

  return {
    url: joinURL(baseURL, prefix,  src),
  };
};
