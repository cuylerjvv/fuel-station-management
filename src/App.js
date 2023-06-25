import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/HomePage";
import LocationMenuPage from "./pages/stations/LocationMenuPage";
import EmployeesPage from "./pages/menu/EmployeesPage";
import ShiftlistPage from "./pages/menu/ShiftlistPage";
import WagesPage from "./pages/menu/WagesPage";
import ErrorPage from "./pages/ErrorPage";
import CreateShiftlist from "./components/Shiftlist/ShiftListTable/CreateShiftlist";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/:location', element: <LocationMenuPage /> },
      { path: '/:location/employees', element: <EmployeesPage /> },
      { path: '/:location/shiftlist', element: <ShiftlistPage /> },
      { path: '/:location/shiftlist/create', element: <CreateShiftlist /> },
      { path: '/:location/wages/:firstday', element: <WagesPage /> }
    ]
  }
]);

function App() {

  const client = new QueryClient({

  })
  return (
    <QueryClientProvider client={client}> 
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App;
