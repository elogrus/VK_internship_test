import { IItem } from "entity/Item/types/Item";

export const getTestItem = (id: number, name = "name"): IItem => ({
    id,
    description: "some desc",
    full_name: "fullname",
    html_url: "htmlUrl",
    language: "HTML",
    name,
    owner: {
        avatar_url: "avatarUrl",
        html_url: "ownerHtmlUrl",
        id: 12345,
        login: "login",
        node_id: "nodeId",
    },
    private: false,
    topics: ["topic1", "topic2", "topic3"],
});
