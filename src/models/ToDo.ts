type options = { label: string; value: boolean; icon: string };
export default class ToDo {
  static createToDoEmpty(): ToDo {
    return new ToDo(new Date().toLocaleString(), "", "", "", [
      { label: "Estilo de vida", value: false, icon: "ios-heart-outline" },
      { label: "Vida saudável", value: false, icon: "alarm-outline" },
    ]);
  }
  toMap() {
    return {
      title: this.title,
      description: this.description,
      deadLineMonth: this.deadLineMonth,
      typeToDo: this.typeToDo,
    };
  }
  id: string;
  title: string;
  description: string;
  deadLineMonth: string;
  typeToDo: Array<options>;

  constructor(
    id: string,
    title: string,
    description: string,
    deadLineMonth: string,
    typeToDo: Array<options>
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.deadLineMonth = deadLineMonth;
    this.typeToDo = typeToDo;
  }
}
