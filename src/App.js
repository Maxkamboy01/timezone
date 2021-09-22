import MainPage from "./components/MainPage";
import { Suspense } from "react/cjs/react.production.min";
import Loading from "./components/Loading";

function App() {
  return (
    <div id="home">
      <Suspense
        fallback={Loading}
      >
        <MainPage />
      </Suspense>
    </div>
  );
}

export default App;
