// Не стал полностью описывать все существующие поля.
export interface IOwner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    html_url: string;
}

export interface IItem {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    description: string;
    html_url: string;
    language: string;
    topics: string[];
    owner: IOwner;
}

export interface IItemList {
    total_count: number;
    items: IItem[];
}
