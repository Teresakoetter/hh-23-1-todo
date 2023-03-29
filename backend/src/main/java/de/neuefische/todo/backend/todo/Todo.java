package de.neuefische.todo.backend.todo;
//test comment
//testcomment2
public record Todo(
        String id,
        String description,
        TodoStatus status
) {

    Todo(
            String description,
            TodoStatus status
    ) {
        this(null, description, status);
    }


    public Todo withId(String id) {
        return new Todo(id, description, status);
    }
}
