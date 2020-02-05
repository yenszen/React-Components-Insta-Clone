/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage";
// import dummydata
import dummyData from "./dummy-data";

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const [data, setData] = useState(dummyData);
  console.log(data);
  return (
    <div className="App">
      {/* Add components here  and pass props where appropriate */}
      <SearchBar/>
      <PostsPage data={data} setData={setData} />
    </div>
  );
};

export default App;

// explanation
// 1. the imports represent the child components of this parent component
// 2. we set up state so that we can pass on the states into the child component (declared in the function) as PROPS