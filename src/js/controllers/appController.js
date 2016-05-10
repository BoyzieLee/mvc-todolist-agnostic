import _ from 'lodash';

import {Task} from '../models/task';

export class AppController {

  constructor (formElem, taskElem, instance) {
    this.form = formElem;
    this.taskArea = taskElem;
    this.todoListInstance = instance;
  }

  init() {
    this.formSubmit();
    this.taskClick();
  }

  //initialize the for click event
  taskClick() {
    this.taskArea.on('click', 'li', function(event){
      event.preventDefault();

      // Find the Element's ID

      // Find the item in the array by it's ID

      // Use the .toggleStatus method to chang the status
      // use .addClass to change the view


      // you MUST specify which li was click on in this function block
      console.log(this);
      // console.log('Task Clicked');
    });
  }

  formSubmit() {
    //initialize the form
    this.form.on('submit', (event) => {
      event.preventDefault();

      let input = this.form.find('input');
      this.addTaskToCollection(input.val());
      input.val(''); //clear input
      // console.log(input.val());
    });
  }

  addTaskToCollection(taskDesc) {
    let rando = _.random(1000, 9999);
    // console.log(rando);
    // console.log(Task);
    let t = new Task(taskDesc, rando); // create instace of task
    this.todoListInstance.tasks.push(t); //push to my task array
    // console.log(t);
    this.addTaskToView(t); // call an update to the view

    // console.log(this.todoListInstance);
  }

  addTaskToView(taskObj) {
    let taskHTML = this.taskTemplate(taskObj);
    this.taskArea.append(taskHTML);
  }

  taskTemplate(taskObj) {
    return `<li id="${taskObj.id}">${taskObj.desc}</li>`;
  }

}
