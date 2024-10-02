//useState hook
//all hooks are written with the word "use"

//state is just a global variable --> this is how we do it in vanilla JS
let state = "";

//we need to control how we update the value of our global variables
const [state, setState] = useState(initialStateValue);

//the initial state value can be any data type (object, array, string, number...)
useState(0);

//to control the initial value, we need the state variable name and the mutation function
//the mutation function is used to control the value of the state variable
//by convention, we use the word set to name our mutation function
//the only task of the mutation function is to control and update the value of the state variable
//! we CANNOT update the value of the state variable without the mutation function
const [cookieCounter, setCookieCounter] = useState(0);

setCookieCounter((cookieCounter = cookieCounter + 1));

//we are destructuring two elements from the useState hook
//the state variable and mutation function already exist inside the useState hook, we are just naming them and destructuring them, so we can use them in our component
const [cookieCounter, setCookieCounter] = useState(0);
