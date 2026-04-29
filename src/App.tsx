import { QueryProvider } from "./query-provider"
import RouterProvider from "./router"

export default function App() {
  return (
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
  )
}
