import logo from './logo.svg';
import './App.css';
import Book from './Book'
import { data } from './books'

function App() {
  return (
    <>
    <h1 className='main-title'>This is my personal Booklist</h1>

    <section className='booklist'>
      {data.map(({ image,title,author },i) => (
        <Book
          key={i}
          image={image}
          title={title}
          author={author}
        />
      ))}
    </section>
    </>
  );
}

export default App;
