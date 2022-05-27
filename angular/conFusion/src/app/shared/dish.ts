// create a typescript class
import { Comment } from './comment';


export class Dish {
    id: string;
    name: string;
    image: string; // URL of image
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    comments: Comment[];
}