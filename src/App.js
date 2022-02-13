import React, {useState} from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
// import PostItem from "./components/Postitem"
import PostList from "./components/PostList";
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {
    const [posts, setPost] = useState([
        {id: 1, tittle: 'Javascript 1', body: 'Description'},
        {id: 2, tittle: 'Javascript 2', body: 'Description'},
        {id: 3, tittle: 'Javascript 3', body: 'Description'},
    ])


  return (
     <div className="App">
         <h1 style={{textAlign: 'center'}}>
             List #1
         </h1>
         {posts.map((post) =>
             <PostItem post={post} key={post.id}/>

         )}
     </div>
  );
}

export default App;
