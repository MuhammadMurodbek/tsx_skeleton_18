import {BrowserRouter, Route, Routes} from "react-router-dom"
import {QueryClientProvider, QueryClient} from "react-query"
import {routerList} from "./routes/list.router"

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {routerList?.map(({path, Component}:any)=><Route key={path} path={path} element={<Component/>}/>)}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
