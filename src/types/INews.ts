export interface INews {
    id: string
    description: string
    urls: IUrls
    likes: number
}

interface IUrls {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
    small_s3: string
}