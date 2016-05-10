import $ from "jquery";

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
//these are the two lines of code that make the app work.
//They talk to the controller and initiate it.
let app = new AppController(todoForm, todos, groceryList);
app.init();
// console.log(app);

///////--------
//this would be for the second list... sigh.
// let honeyList = new TodoList('Honey Do List');
// new AppController($('.todoFrom2'), $('.todos2'), honeyList).init();
