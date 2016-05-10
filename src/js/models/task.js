export class Task {

  constructor (desc, id) {
    this.desc = desc;
    this.complete = false;
    this.id = id;
  }

  // toggle each task instance's complete property to be true or false
  toggleStatus() {
    if (this.complete) {
      this.complete = false;
    } else {
      this.complete = true;
   }
 }

}
