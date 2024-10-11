import { Provider } from 'react-redux';
import store from './store/store';
import AddArticle from './components/addArticle';
import ListArticle from './components/listArticle';
import './App.css'; 
const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Store - Redux</h1>
        <AddArticle />
        <ListArticle />
      </div>
    </Provider>
  );
};

export default App;
