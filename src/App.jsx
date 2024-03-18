import { Route, Routes } from "react-router";
import "./App.css";
// import { FileExplorer } from "./components/FileExplorer";
// import { InfiniteScroll } from "./components/InfiniteScroll";
// import { ParentComponent } from "./components/ParentContainer";
import { SearchInput } from "./components/searchinput";
import QuizApp from "./components/QuizApp.jsx";
// import Timer from "./components/Timer.jsx";
import { HomePage } from "./components/HomePage.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { ThemeProvider } from "./theme-context.jsx";
import { Comments } from "./components/Comment.jsx";
import Pagination from "./components/Pagination.jsx";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/quiz" element={<QuizApp />} />
        <Route path="/comment" element={<Comments />} />
        <Route path="/shop" element={<Pagination />} />
        <Route path="/search" element={<SearchInput />} />
        {/* <SearchInput /> */}
        {/* <InfiniteScroll /> */}
        {/* <ParentComponent /> */}
        {/* <FileExplorer file={fileExplorerData} handleAdd={handleAdd} /> */}
        {/* <Timer /> */}
        {/* <QuizApp /> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
