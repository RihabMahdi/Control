import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle } from '../features/articleSlice';

const AddArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      id: Date.now(), 
      title,
      description
    };
    dispatch(addArticle(newArticle));
    setTitle('');
    setDescription(''); 
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter article title"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter article description"
        required
      />
      <button type="submit">Add Article</button>
      
    </form>
  );
};

export default AddArticle;
