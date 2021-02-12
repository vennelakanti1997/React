import { Blog,posts,courses,books } from './Components/Blog';
import './App.css';

function App() {
  return (
    <div className="App">
       <Blog posts={posts} courses={courses} books={books}/> 
      
    </div>
  );
}

export default App;
