import { BrowserRouter, Route, Routes } from "react-router"
import { Button } from "./components/ui/button"
export default function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex min-h-svh w-full items-center justify-center">
              <Button>Click me</Button>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
