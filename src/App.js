import { useState } from 'react';
import { supabase } from './supabaseClient';
//import logo from './logo.svg';
import './App.css';

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')
    setMyBooks(books);
  }
  getBooks();
  return (
    <table>
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
          <td>{b.description}</td>
        </tr>
      ))
    }
    </table>
  );
}

const classes = [
  { id: 1, title: 'MI 449: Advanced Web Development and Database Management', theme: 'web development', isAvailable: true },
  { id: 2, title: 'MI 450: Creating Human-Centered Technology (W)', theme: 'design', isAvailable: true },
  { id: 3, title: 'WRA 210: Introduction to Web Authoring', theme: 'web design', isAvailable: true},
  { id: 4, title: 'GEO 206: Physical Geography', theme: 'geography', isAvailable: true},
  { id: 5, title: 'MI 220: Methods for Understanding Users', theme: 'user research', isAvailable: true},
  { id: 6, title: 'MI 101: Understanding Media and Information', theme: 'media', isAvailable: false},
  { id: 7, title: 'JRN 218: Sports in Contemporary Media', theme: 'journalism', isAvailable: false},
];

function ClassTracker() {
  const listZines = classes.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red'
      }}
     >
      {zine.title}
     </li> 
  );
  return (
    <ul>{listZines}</ul>
  )
}

const album = {
  title: '1989',
  artist: 'Taylor Swift',
  released: '2014',
  image: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png',
  width: '264',
  height: '378'
};

function Album() {
  return (
    <div>
      <h2>{album.title} ({album.released})</h2>
      <p>{album.artist}</p>
      <img
        className="albumCover"
        src={album.image}
        alt={album.title + ' cover'}
        style={{
          width: album.width,
          height: album.height
        }}
      />
    </div>
  );
}
function SurpriseButton() {
  const [count, setCount] = useState(0);
  function doSurprise() {
    setCount(count +1);
  }
  return (
    <div>
      <h3>Click this button for a surprise!</h3>
      <button onClick={doSurprise}>Surprise! {count}</button>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <ClassTracker />
        <Album />
        <SurpriseButton />
      </header>
    </div>
  );
}

export default App;
