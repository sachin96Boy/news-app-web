export class NewsModel {

    private title: string;
    private url: string;
    private img: string;
    private description: string;
    private provider: string;
    private datePublished: string;



    constructor(title: string, url: string, img: string, description: string, provider: string, datePublished: string) {
        this.title = title,
            this.url = url,
            this.img = img,
            this.description = description,
            this.provider = provider,
            this.datePublished = datePublished
    }

    get getTitle() {
        return this.title;
    }
    get getUrl() {
        return this.url;
    }
    get getImg() {
        return this.img;
    }
    get getDescription() {
        return this.description;
    }
    get getProvider() {
        return this.provider;
    }
    get getDatePublished() {
        return this.datePublished;
    }

}

