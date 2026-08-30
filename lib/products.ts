import type { StaticImageData } from "next/image";
import ugandaImage from "../public/uganda-001.jpg";
import rwandaImage from "../public/rwanda-001.jpg";
import kenyaImage from "../public/kenya-001.png";
import saImage from "../public/sa-001.png";

export type Product = {
  slug: string;
  name: string;
  origin: string;
  notes: string;
  format: string;
  price?: string;
  description?: string;
  image?: StaticImageData;
};

export const products: Product[] = [
  {
    slug: "uganda-001",
    name: "Uganda 001",
    origin: "Mount Elgon, Uganda",
    notes: "Dark chocolate, blackcurrant, caramel",
    format: "250g · Whole Bean / Ground",
    description:
      "A washed lot grown on the slopes of Mount Elgon, offering a rich, layered cup with notes of dark chocolate, blackcurrant and caramel.",
    image: ugandaImage,
  },
  {
    slug: "rwanda-gitega",
    name: "Rwanda Gitega Hills",
    origin: "Gitega Hills, Rwanda",
    notes: "Syrupy body, black tea, plum",
    format: "250g · Whole Bean / Ground",
    description:
      "Grown in the Gitega Hills, this washed Rwandan lot has a syrupy body with notes of black tea and plum.",
    image: rwandaImage,
  },
  {
    slug: "kenya",
    name: "Kenya",
    origin: "Kenya",
    notes: "Bright acidity, red berry, citrus",
    format: "250g · Whole Bean / Ground",
    description:
      "A bright, juicy cup with the bold acidity Kenyan coffee is known for, carrying notes of red berry and citrus.",
    image: kenyaImage,
  },
  {
    slug: "sa-rooibos",
    name: "South African Rooibos",
    origin: "Cederberg, South Africa",
    notes: "Honey, red bush, warm spice",
    format: "100g Loose Leaf",
    description:
      "Naturally caffeine-free rooibos from the Cederberg, with warm notes of honey, red bush and spice.",
    image: saImage,
  },
];

export function getProductBySlug(slug: string | undefined) {
  return products.find((product) => product.slug === slug);
}
