import BookList from "./components/BookList/BookList";
import Navbar from "./components/Navbar/Navbar";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/ThemeContext";
function App() {
  return (
    <>
      <div className="app">
        <AuthContextProvider>
          <ThemeContextProvider>
            <Navbar />
            <BookContextProvider>
              <BookList />
            </BookContextProvider>

            <ThemeToggle />
          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
