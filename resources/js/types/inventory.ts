export type Category = {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
}

export type Product = {
    id: number;
    product_code: string;
    product_image: string | null;
    product_name: string;
    product_description: string;
    product_quantity: number;
    product_price: number;
    product_status: 'in_stock' | 'low_stock' | 'out_of_stock'
    created_at: string;
    updated_at: string;
    category?: {
        id: number;
        name: string;
        description: string
    } | null
}

export type Auth = {
    auth: {
        user: {
            name: string;
            id: number;
            email: string;
            business_title: string;
            created_at: string;
        } | null
    }
}

export type ProductForm = {
    product_image: File | null
    product_name: string
    product_description: string
    product_quantity: string
    product_price: string
    category_id: string
}
