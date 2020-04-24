export interface IStory {
    storyName: string,
    content: string,
    storyImage: string,
    timestamp: number,
    category: string,
    likes: number,
}

export class Story implements IStory {
    storyName: string;
    content: string;
    storyImage: string;
    timestamp: number;
    category: string;
    likes: number;

    constructor() {
        this.storyName = '';
        this.content = '';
        this.storyImage = '';
        this.timestamp = 0;
        this.category = '';
        this.likes = 0;
    }
}