export interface ICategory {
    categoryName: string
}

export class Category implements ICategory {
    categoryName: string;

    constructor() {
        this.categoryName = '';
    }
}