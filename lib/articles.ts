import type { StaticImageData } from "next/image";
import fashionWeekCover from "../public/campaign-fashion-week.jpg";
import fashionWeekCover2 from "../public/campaign-fashion-week-1.jpg";

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string };

export type Article = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  coverImage?: StaticImageData;
  closingImage?: StaticImageData;
  body: ArticleBlock[];
  featuredProduct: {
    name: string;
    origin: string;
    notes: string;
  };
};

export const articles: Article[] = [
  {
    slug: "dublin-fashion-week-debut",
    title: "NŌLU Makes Its Dublin Independent Fashion Week Debut",
    dek: "NŌLU partners with The Fabric of Us II to introduce Uganda 001 in Ireland.",
    date: "2026-09-01",
    coverImage: fashionWeekCover,
    closingImage: fashionWeekCover2,
    body: [
      {
        type: "paragraph",
        text: "This September, NŌLU makes its Dublin Independent Fashion Week debut in partnership with The Fabric of Us II, marking one of our first public moments in Ireland.",
      },
      {
        type: "paragraph",
        text: "The partnership has a particular significance for us.",
      },
      {
        type: "paragraph",
        text: "This year, The Fabric of Us II celebrates mothers and the women who shape what we carry forward. NŌLU was born from a similar story.",
      },
      {
        type: "paragraph",
        text: "Long before NŌLU, there was our mother and her coffee business in Johannesburg. She built it independently, making coffee part of our family story. NŌLU is the next chapter of that story, created by the next generation but rooted in what she began.",
      },
      {
        type: "paragraph",
        text: "It made The Fabric of Us II a natural place for NŌLU to make its Fashion Week debut.",
      },
      { type: "heading", text: "Uganda 001, served differently" },
      {
        type: "paragraph",
        text: "Guests at The Fabric of Us II will be welcomed with complimentary espresso martinis made with NŌLU Uganda 001, our flagship single-origin coffee from the Mount Elgon region of Uganda.",
      },
      {
        type: "paragraph",
        text: "Grown on the volcanic slopes of Mount Elgon, Uganda 001 is a bold dark roast with notes of dark chocolate and dried fruit.",
      },
      {
        type: "paragraph",
        text: "The collaboration also marks the launch of our first Uganda 001 campaign, bringing together coffee, fashion, texture and ritual to introduce the world of NŌLU.",
      },
      {
        type: "paragraph",
        text: "For us, it is a fitting beginning: African coffee, Irish fashion and a celebration of the women whose work becomes part of what we inherit.",
      },
      { type: "heading", text: "What comes next" },
      {
        type: "paragraph",
        text: "In October, NŌLU will continue its Dublin introduction with Same Language, an intimate NŌLU coffee and South African wine tasting.",
      },
      {
        type: "paragraph",
        text: "What does coffee have in common with wine? More than you might think.",
      },
      {
        type: "paragraph",
        text: "The event will bring three NŌLU African coffees and three carefully selected South African wines to the same table, exploring the shared language of origin, climate, fruit, fermentation, acidity, body and finish.",
      },
      {
        type: "paragraph",
        text: "Guests will discover how geography and craft shape what eventually reaches the glass and the cup, while exploring the stories and origins behind each NŌLU coffee.",
      },
      {
        type: "paragraph",
        text: "Same Language will take place in Dublin, with full details and tickets to be released shortly via Eventbrite.",
      },
    ],
    featuredProduct: {
      name: "NŌLU Uganda 001",
      origin: "Mount Elgon, Uganda",
      notes: "Dark chocolate / Dried fruit",
    },
  },
];

export function getArticleBySlug(slug: string | undefined) {
  return articles.find((article) => article.slug === slug);
}
