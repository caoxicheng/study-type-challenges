interface Todo {
    title: string
    description: string
}

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}

const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
}

todo.title = "hello"
todo.description = "barFoo"
