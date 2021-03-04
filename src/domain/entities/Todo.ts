export class Todo {
    id: number
    title: string
    isCompleted: boolean

    constructor(id: number, title: string, isCompleted: boolean) {
        this.id = id
        this.title = title
        this.isCompleted = isCompleted
    }
}
