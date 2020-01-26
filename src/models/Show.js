class Show {
    constructor(showObj) {
        this.id = showObj.id
        this.name = showObj.name || ''
        this.image = showObj.image.original
        this.rating = showObj.rating.average
        this.description = showObj.summary
    }

    get title() {
        return `${this.name} (${this.rating})`
    }

    get descriptionHtml() {
        return { __html: this.description }
    }
}

export default Show
