import ROUTES from "@constants/routes";
import { Feed } from "src/types/feed";

const feed: Feed[] = [
  {
    title: "Breaking news: C'est la guerre",
    desc: "c chaud",
    link: ROUTES.PROJECTS_INSTAGRAM_DARK,
    thumbnail_url: "/static/images/logo/onruntime-white-background-low.png",
    tags: ["Infinity War", "Parabellum", "Call of Duty"],
  },
  {
    title: "C'est la deuxième carte",
    desc: "Juste pour tester",
    link: ROUTES.PROJECTS_INSTAGRAM_DARK,
    thumbnail_url: "/static/images/logo/onruntime-white-background-low.png",
    tags: ["Test", "Tag", "Truc de chose"],
  },
];

export default feed;