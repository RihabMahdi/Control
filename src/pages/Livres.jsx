import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Livres = () => {
  const [books, setBooks] = useState([]);
  const [likes, setLikes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/livres');
        console.log(response.data); 
        setBooks(response.data); 
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to load books."); 
      } finally {
        setLoading(false); 
      }
    };

    fetchBooks();
  }, []);

  const handleLike = (bookId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [bookId]: (prevLikes[bookId] || 0) + 1,
    }));
  };

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>{error}</div>; 

  return (
    <div className="container mt-4">
      <h1>List of Books</h1>
      <div className="row">
        {Array.isArray(books) && books.length > 0 ? (
          books.map((book) => (
            <div className="col-md-4 mb-4" key={book.id}>
              <div className="card">
                <img src={book.image} className="card-img-top" alt={book.author} width={200} height={200}/>
                <div className="card-body">
                  <h5 className="card-title">{book.author}</h5>
                  <p className="card-text">Price: ${book.price}</p>
                  <p className="card-text">Pages: {book.pages}</p>
                  <p className="card-text">Likes: {likes[book.id] || 0}</p>
                  <button className="btn btn-primary" onClick={() => handleLike(book.id)}>
                    Like
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No books available.</p> 
        )}
      </div>
    </div>
  );
};

export default Livres;
