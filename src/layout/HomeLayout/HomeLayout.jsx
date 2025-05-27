import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBAr";

const HomeLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <header className="w-10/12 mx-auto">
        <NavBar></NavBar>
      </header>
      <main className="w-10/12 mx-auto flex-1">
        <p>
         Hello, Sazol
        </p>
      </main>
      <footer >
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
