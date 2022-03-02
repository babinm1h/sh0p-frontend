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
    info: IProductInfo[]
    typeId: number
    brandId: number
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


export interface ICartProduct {
    quan: number
    id: number
    cartId: number
    productId: number
    product: IProduct
}