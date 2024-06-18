import './App.css';
import Header from './components/Header.js'

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>About</h2>
        </section>
        <section>
          <h2>Projects</h2>
        </section>
        <section>
          <h2>Contact</h2>
        </section>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
