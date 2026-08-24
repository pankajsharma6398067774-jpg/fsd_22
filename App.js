import Book from "./book.js";
const bookdata = [
    { image: "", title: "ReactJS", price: 465 },
    { image: "", title: "NodeJS", price: 565 },
    { image: "", title: "ExpressJS", price: 765 },
    { image: "", title: "MongoDB", price: 475 },
    { image: "", title: "JavaScript", price: 865 },
];

function App() {
    const bookstore = bookdata.map((b) => {
        return Book(b);
    });

    return React.createElement("div", { className: "bookstore" }, [...bookstore]);
}
export default App;