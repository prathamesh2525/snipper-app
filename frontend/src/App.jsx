import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import FormPage from "./pages/FormPage"
import SubmissionsPage from "./pages/SubmissionPage"

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<FormPage />} />
          <Route path="/submissions" element={<SubmissionsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
