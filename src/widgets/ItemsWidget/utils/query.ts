import { GithubSorts } from "shared/consts/GithubSorts";

interface IQuery {
    ITEMS_ON_PAGE: number;
    getURL: (query: string, page: number, sort: GithubSorts) => string;
}

export const Query: IQuery = {
    ITEMS_ON_PAGE: 10,
    getURL: (query, page, sort) =>
        `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${Query.ITEMS_ON_PAGE}&sort=${sort}`,
};
