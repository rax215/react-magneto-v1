import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./views/Home";
import logo from "./logo.jpg";
import PageNav from "./route";

export default function App() {
  const help = "Need help?";
  const login = "Login";
  let pathUrl = window.location.pathname;
  console.log(pathUrl);
  if (pathUrl === "/") {
    return <Home />;
  } else {
    return (
      <>
        <Header logo={logo} help={help} login={login} />
        <PageNav />
        <Footer />
      </>
    );
  }
}
