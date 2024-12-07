import {Routes, Route} from "react-router-dom";
import {HomePage, QuizPage} from "./pages";
import {Navbar} from "./components/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:quiz" element={<QuizPage />} />
      </Routes>
    </>
  );
};
