import { parseISO,compareDesc } from "date-fns";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortArticles = (articles) => {
    return articles.slice().sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)))
}