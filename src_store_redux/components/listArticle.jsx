
import { useSelector, useDispatch } from 'react-redux';
import { deleteArticle } from '../features/articleSlice';

const ListArticle = () => {
  const articles = useSelector((state) => state.articles.articles);
  const dispatch = useDispatch();

  return (
    <div className="article-list">
      {articles.map((article) => (
        <div className="article-card" key={article.id}>
            <h3>{article.id}</h3>
            <h4>{article.title}</h4>
            <p>{article.description}</p> 
            
          <button onClick={() => dispatch(deleteArticle(article.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ListArticle;
