export class User {
    name!: string;
    password!: string;
    uploadPhoto!: string;
    role!: string;
    mobNumber!: string;
    address!: Address;
    gender!: string;
    language!: string;
    email!: string;
    dob!: string;
    agreetc!: string;
    age!: number;
    aboutYou!: string;
}
export class Address {
    id!: number;
    addline1!: string;
    addline2!: string;
    city!: string;
    state!: string;
    zipCode!: number;
}

export class Product {
    id!: number;
    name!: string;
    uploadPhoto!: string;
    uploadDesc!: string;
    mrp!: number;
    dp!: number;
    status!: boolean;
}
export class order {
    id!: number;
    UserId!: number;
    sellerId!: number;
    product!: Product;
    deliveryAddress!: Address;
    contact!: number;
    dateTime!: string;
}