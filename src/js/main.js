import $ from "jquery";
import _ from 'lodash';

// Get our models
import { TodoList} from './models/todo';
// import { Task} from './models/task';
import { AppController} from './controllers/appController';


// Store Elements
let todoForm = $('.todoForm'); //<form>
let todoInput = $('.todoInput'); //<input>
let todos = $('.todos'); //<ul>

// We meed tp "model" our todoList;
let groceryList = new TodoList('Grocery List');

// Initiates our App Controller
let app = new AppController(todoForm, todos, groceryList);
app.init();
// console.log(app);

///////--------
//this would be for the second list... sigh.
// let honeyList = new TodoList('Honey Do List');
// new AppController($('.todoFrom2'), $('.todos2'), honeyList).init();
