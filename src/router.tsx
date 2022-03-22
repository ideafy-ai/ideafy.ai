import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Search from "./pages/Search";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}
export default Router;
