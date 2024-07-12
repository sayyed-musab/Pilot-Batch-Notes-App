// Set Date
const dateContainer = document.getElementById('date')
let currentDate = new Date();
let months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
let monthIndex = currentDate.getMonth();
let monthName = months[monthIndex];
let day = currentDate.getDate();
let year = currentDate.getFullYear();

dateContainer.innerText = `${monthName} ${day}, ${year}`;

// Initialize Quill editor
const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // custom dropdown

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];

const quill = new Quill('#editor', {
theme: 'snow', // Specify theme in configuration
modules:{
    toolbar: toolbarOptions
}
})

	
