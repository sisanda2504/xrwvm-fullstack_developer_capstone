import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dealers from "./components/Dealers/Dealers";
import Dealer from "./components/Dealers/Dealer";
import PostReview from "./components/Dealers/PostReview";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dealers" element={<Dealers />} />
      <Route path="/dealer/:id" element={<Dealer />} />
      <Route path="/postreview/:id" element={<PostReview />} />
    </Routes>
  );
}
// Express route to fetch all dealerships
app.get('/fetchDealers', async (req, res) => {
    try {
      const documents = await Dealerships.find();
      res.json(documents);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching documents' });
    }
  });
  
  // Express route to fetch Dealers by a particular state
  app.get('/fetchDealers/:state', async (req, res) => {
    try {
      const documents = await Dealerships.find({ state: req.params.state });
      res.json(documents);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching documents' });
    }
  });
  
  // Express route to fetch dealer by a particular id
  app.get('/fetchDealer/:id', async (req, res) => {
    try {
      const documents = await Dealerships.findOne({ id: req.params.id });
      res.json(documents);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching documents' });
    }
  });

export default App;