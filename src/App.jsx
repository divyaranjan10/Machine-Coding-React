import "./App.css";
import AutoSaveText from "./components/auto-save-text/AutoSaveText";
import InfiniteScrollOptimized from "./components/infinite-scroll/InfiniteScrollOptimized";
import InfiniteScroll from "./components/infinite-scroll/InfinteScroll";
import KanbanBoard from "./components/kanban-board/KanbanBoard";
import ProductExplorer from "./components/product-explorer/ProductExplorer";
import ProgressBarsQ from "./components/progress-bars-queue/ProgressBarsQ";
import SearchOptions from "./components/searchable-dropdown/SearchOptions";
import MainContainer from "./components/stacked-snackbars/MainContainer";
import Timer from "./components/timer/Timer";
import ToDo from "./components/to-do-list/ToDo";
import TrafficLight from "./components/traffic-light/TrafficLight";

function App() {
  return (
    <div>
      {/* <Timer /> */}
      {/* <InfiniteScroll /> */}
      {/* <InfiniteScrollOptimized /> */}
      {/* <ToDo /> */}
      {/* <ProgressBarsQ /> */}
      {/* <ProductExplorer /> */}
      {/* <AutoSaveText /> */}
      {/* <KanbanBoard /> */}
      {/* <SearchOptions /> */}
      {/* <TrafficLight /> */}
      <MainContainer />
    </div>
  );
}

export default App;
