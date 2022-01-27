export interface ToDoItem{
    id : number;
    name: string;
    description: string;
    assignedTo: string;
    duration: number;
    isCompleted: boolean;
}
export class Convert {
    public static toItem(json: string): ToDoItem {
        return JSON.parse(json);
    }
    public static toDoToJson(value: ToDoItem): string {
        return JSON.stringify(value);
    }
    public static toItemArray(json: string): ToDoItem[] {
        return JSON.parse(json);
    }
    public static toDoArrayToJson(value: ToDoItem[]): string {
        return JSON.stringify(value);
    }
}