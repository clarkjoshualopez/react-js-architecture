export class Todo {
    id: any
    title: string
    isCompleted: boolean

    constructor(id: any, title: string, isCompleted: boolean) {
        this.id = id
        this.title = title
        this.isCompleted = isCompleted
    }
}
