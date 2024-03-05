import ButtonComponent from "./components/functional/button/button-component";
import ImageComponent from "./components/functional/image/image-component";
import OrderedList from "./components/functional/list/ordered/ordered-list";
import UnorderedList from "./components/functional/list/unordered/unordered-list";
function App() {
  return (
    <div>
      <ButtonComponent />
      <br></br>
      <br></br>
      <ImageComponent />
      <br></br>
      <OrderedList />
      <br></br>
      <UnorderedList />
    </div>
  );
}

export default App;
