import { Route, Routes } from "react-router";
import "./App.css";
// import { FileExplorer } from "./components/FileExplorer";
// import { InfiniteScroll } from "./components/InfiniteScroll";
// import { ParentComponent } from "./components/ParentContainer";
import { SearchInput } from "./components/searchinput";
import QuizApp from "./components/QuizApp.jsx";
// import Timer from "./components/Timer.jsx";
import { HomePage } from "./components/HomePage.jsx";
import { ThemeProvider } from "./theme-context.jsx";
import { Comments } from "./components/Comment.jsx";
import Pagination from "./components/Pagination.jsx";
import ImageCarousel from "./components/ImageCarousel.jsx";
import SelectableGrid from "./components/SelectableGrid.jsx";
import AutoSuggest from "./components/autoSuggest.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Shop from "./components/shop/index.jsx";
import React, { Suspense } from "react";
import { InfiniteScroll } from "./components/InfiniteScroll.jsx";
import { InfiniteScroll2 } from "./components/InfiniteScroll2.jsx";
import { Products } from "./components/FetchComponent.jsx";

const NavBar = React.lazy(() => import("./components/NavBar.jsx"));

const IMAGES = [
  {
    name: "image 1",
    src: "https://www.kasandbox.org/programming-images/avatars/spunky-sam.png",
  },
  {
    name: "Image 2",
    src: "https://www.kasandbox.org/programming-images/avatars/spunky-sam-green.png",
  },
  {
    name: "Image 3",
    src: "https://www.kasandbox.org/programming-images/avatars/purple-pi.png",
  },
];

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading nav</div>}>
              <NavBar />
            </Suspense>
          }
        />
        <Route path="/quiz" element={<QuizApp />} />
        <Route path="/comment" element={<Comments />} />
        <Route path="/shop" element={<Pagination />} />
        <Route path="/search" element={<SearchInput />} />
        <Route path="/gallery" element={<ImageCarousel data={IMAGES} />} />
        <Route path="/selectgrid" element={<SelectableGrid />} />
        <Route path="/autosuggest" element={<AutoSuggest />} />
        <Route path="/game" element={<GameBoard />} />
        <Route path="/flipkart" element={<Shop />} />
        <Route path="/infinitescroll" element={<InfiniteScroll />} />
        <Route path="/infinitescroll2" element={<InfiniteScroll2 />} />
        <Route path="/getproducts" element={<Products />} />
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
