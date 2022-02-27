export interface IUser {
    email: string
    role: "ADMIN" | "USER"
    id: number
}


export interface IProduct {
    id: number
    img: string
    name: string
    price: number
}


export interface IBrand {
    name: string
    id: number
}

export interface IType {
    id: number
    name: string
}

export interface IProductInfo {
    title: string
    description: string
}


export interface IUser {
    email: string
    role: "USER" | "ADMIN"
    id: number
}