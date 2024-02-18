// import { Logo } from "./components";
import { Landing, Error, Register,ProtectedRoute } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddJob, AllJob, Profile, Stats, SharedLayout } from "./pages/dashboard";

function App() {
    return (
        <div>
            <BrowserRouter>
                {/* <Logo /> */}
                <Routes>
                    <Route
                    path="/"
                       element={
                        <ProtectedRoute>
                            <SharedLayout/>
                        </ProtectedRoute>
                       }
                         >
                        <Route index element={<Stats />} />
                        <Route path="all-jobs" element={<AllJob />} />
                        <Route path="add-job" element={<AddJob />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>

                    <Route path="/landing" element={<Landing />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <ToastContainer position="top-center" />
            </BrowserRouter>
        </div>
    );
}

export default App;
