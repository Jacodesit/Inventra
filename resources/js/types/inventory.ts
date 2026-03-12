export type Category = {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    products_quantity: number;
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
    stock: string;
    stock_status: string;
    expected_income: number;
    formatted_date: string;
    category?: {
        id: number;
        name: string;
        description: string
    } | null
}

export type Sale = {
    id: number;
    product_id: number;
    quantity: number;
    price: number;
    total: number;
    created_at: string;
    product: Product
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
    product_image: File | null | string
    product_image_remove: boolean
    product_name: string
    product_description: string
    // product_quantity: number | string
    product_price: number | string
    category_id: number | string
}
