import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ChatContainer from "./shared/ChatContainer/ChatContainer";
import LeftDrawer from "./shared/LeftDrawer/LeftDrawer";

const HomeLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <header className="w-10/12 mx-auto">
        <NavBar></NavBar>
        <LeftDrawer></LeftDrawer>
      </header>
      <main className="w-10/12 mx-auto flex-1">
        <ChatContainer></ChatContainer>
      </main>
      <footer >
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
