import { routerList } from "./routes/router.list"
import Layout from "./widgets/layout/main/main.layout"
import { QueryClientProvider, QueryClient } from "react-query"
import { Route, Routes, BrowserRouter } from "react-router-dom"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routerList?.map(({ path, Component }: any, index: number) => (<Route key={index} path={path} element={<Component />} />))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
