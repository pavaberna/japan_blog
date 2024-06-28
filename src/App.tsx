import Banner from "./components/Banner";
// import Map from "./components/Map"
// import Cities from "./components/Cities";
import Details from "./components/Details";

function App() {

  return (
    <>
      <Banner />
      <main className="max-w-[1520px] mx-auto">
        <Details />
      </main>
    </>
  )
}

export default App
