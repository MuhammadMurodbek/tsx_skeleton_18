import Main from "./pages/main"
import Layout from "./widgets/layout/main/main.layout"
import { QueryClientProvider, QueryClient } from "react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Main />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
