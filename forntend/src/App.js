import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import CustomerHome from "./pages/CustomerHome"
import ServiceManHome from "./pages/ServiceManHome"
import CustomerBookings from "./pages/CustomerBookings"
import CustomerProfile from "./pages/CustomerProfile"
import ServiceManBookings from "./pages/ServiceManBookings"
import ServiceManProfile from "./pages/ServiceManProfile"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signUp" element={<Signup />} />

          <Route path="/customerHome" element={<CustomerHome />} />
          <Route path="/customerBookings" element={<CustomerBookings />} />
          <Route path="/customerProfile" element={<CustomerProfile />} />

          <Route path="/serviceManHome" element={<ServiceManHome />} />
          <Route path="/serviceManBookings" element={<ServiceManBookings />} />
          <Route path="/serviceManProfile" element={<ServiceManProfile />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  )
}

export default App
