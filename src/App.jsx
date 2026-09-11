import "./App.css";
import InfiniteScrollOptimized from "./components/infinite-scroll/InfiniteScrollOptimized";
import InfiniteScroll from "./components/infinite-scroll/InfinteScroll";
import ProductExplorer from "./components/product-explorer/ProductExplorer";
import ProgressBarsQ from "./components/progress-bars-queue/ProgressBarsQ";
import Timer from "./components/timer/Timer";
import ToDo from "./components/to-do-list/ToDo";

function App() {
  return (
    <div>
      {/* <Timer /> */}
      {/* <InfiniteScroll /> */}
      {/* <InfiniteScrollOptimized /> */}
      {/* <ToDo /> */}
      {/* <ProgressBarsQ /> */}
      <ProductExplorer />
    </div>
  );
}

export default App;
