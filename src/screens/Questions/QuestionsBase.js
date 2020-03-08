export const Flashcards = [
    {
      id: '1',
      question: 'What is HTML?',
      answer: 'HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web. It makes the text more interactive and dynamic. It can turn text into images, tables, links.'
    },
    {
      id: '2',
      question: 'What are HTML5 semantic tags?',
      answer: 'HTML5 semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster.'
    },
    {
      id: '3',
      question: 'List some of HTML5 semantic tags.',
      answer: 'The semantic elements added in HTML5 are: <article> <aside> <details> <figcaption> <figure> <footer> <header> <main> <mark> <nav> <section> <summary> <time>'
    },
    {
      id: '4',
      question: 'Define event bubbling?',
      answer: 'JavaScript allows DOM elements to be nested inside each other. In such a case, if the handler of the child is clicked, the handler of parent will also work as if it were clicked too.<br/>(need more details)'
    },
    {
      id: '5',
      question: 'Describe event capturing?',
      answer: 'Oh, Im terribly sor... Artoo! What are you doing here? Well, I can see youre serving drinks, but this place is dangerous. Theyre going to exenpmcute Master Luke and, if were not careful, us too! '
    },
    {
      id: '6',
      question: 'Explain event delegation.',
      answer: 'Attaching event listeners to parent node, instead of every child, present or newly created, is event delegation. It makes use of event bubbling, where the event on a child bubbles up to the parent. So instead of adding an event listener to a child, and adding one every time a new child is added, we add the listener on parent.'
    },
    {
      id: '7',
      question: 'Why it is not advised to use innerHTML in JavaScript?',
      answer: 'innerHTML content is refreshed every time and thus is slower. There is no scope for validation in innerHTML and, therefore, it is easier to insert rouge code in the document and, thus, make the web page unstable.'
    },
    {
      id: '8',
      question: 'Explain the difference between "==" and "==="?',
      answer: '"==" checks only for equality in value whereas "===" is a stricter equality test and returns false if either the value or the type of the two variables are different.'
    },
    {
      id: '9',
      question: 'What would be the result of 3+2+"7"?',
      answer: 'Since 3 and 2 are integers, they will be added numerically. And since 7 is a string, its concatenation will be done. So the result would be 57.'
    },
    {
      id: '10',
      question: 'What is the use of Push method in JavaScript?',
      answer: 'The push method is used to add or append one or more elements to the end of an Array. Using this method, we can append multiple elements by passing multiple arguments'
    },
    {
      id: '11',
      question: 'What is unshift method in JavaScript?',
      answer: 'Unshift method is like push method which works at the beginning of the array. This method is used to prepend one or more elements to the beginning of the array.'
    },
    {
      id: '12',
      question: 'Why is it called a Ternary expression, what does the word “Ternary” indicate?',
      answer: '“Ternary” means operands with three(n-ary) param. This is a one-line shorthand for an if-then statement. It is called a ternary operator or a conditional operator.'
    },
    {
      id: '13',
      question: 'Explain “hoisting”.',
      answer: 'Variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it’s declared. This behavior is called “hoisting”, as it appears that the variable declaration is moved to the top of the function or global code.'
    },
    {
      id: '14',
      question: 'Difference between: function Person(){}, var person = Person(), and var person = new Person()?',
      answer: 'First one is a function declaration. the second one returns the return value of function Person and assigns it to person variable. The third creates a new instance of an object based on the Person function. So the variable (person) is now an Object.'
    },
    {
      id: '15',
      question: 'What is the difference between host objects and native objects?',
      answer: 'Host — objects provided by environment like window, document by browser. Native — object in an ECMAScript implementation whose semantics are fully defined by this specification rather than by the host environment. Eg. Array, String etc.'
    },
    {
      id: '16',
      question: 'What is the difference between host objects and native objects?',
      answer: 'Host — objects provided by environment like window, document by browser. Native — object in an ECMAScript implementation whose semantics are fully defined by this specification rather than by the host environment. Eg. Array, String etc.'
    },
  ]
  