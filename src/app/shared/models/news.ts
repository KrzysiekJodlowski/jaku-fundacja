export class News {
  content: string = undefined;
  date: string = undefined;
  title: string = undefined;
  constructor(fields?: { content?: string; date?: string; title?: string }) {
    Object.assign(this, fields);
  }

  get label() {
      return `${this.content} + ${this.title}`;
  }
}