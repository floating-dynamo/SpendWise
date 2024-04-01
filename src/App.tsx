import { Route, Routes } from 'react-router-dom';
import './App.css';
import { PathNames } from './lib/models';
import HomePage from './pages/home.page';
import Navbar from './components/shared/navbar';
import ExpensesPage from './pages/expenses.page';
import AnalyticsPage from './pages/analytics.page';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path={PathNames.HOME} />
        <Route element={<ExpensesPage />} path={PathNames.EXPENSES} />
        <Route element={<AnalyticsPage />} path={PathNames.ANALYTICS} />
      </Routes>
    </div>
  );
}

export default App;
