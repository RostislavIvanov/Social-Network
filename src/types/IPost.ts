export interface IPost {
    message: string;
    id: number;
    likes: number;
    comments: string[];
    date: string;
}

export interface IAddCommentAction {
    id: number
    comment: string
}