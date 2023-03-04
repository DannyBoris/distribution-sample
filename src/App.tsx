import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SimpleHeader from "./components/header";

function App() {
  return (
    <Layout>
      <SimpleHeader />
      <Outlet />
    </Layout>
  );
}

export default App;
