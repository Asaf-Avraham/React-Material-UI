import "./App.css";
import TableMatiralUi from "./components/table/TableMatiralUi";
import yellow from "./YellowCircle.png";
import SelectButton from "./components/selectOption/BuyerSelect";
import VendorSelect from "./components/selectOption/VendorSelect";
import SwitchButton from "./components/switch/SwitchButton";
import RadioButton from "./components/radiobutton/RadioButton";
import DatePicker from "./components/datePicker/DatePicker";
import CheckBox from "./components/checkbox/CheckBox";
import TextFields from "./components/textFields/TextFields";
import TextNumber from "./components/textFields/TextNumber";
import Buttons from "./components/buttons/Buttons";

function App() {
  return (
    <div class="">
      <div className="img">
        <img src={yellow} alt="" />
      </div>

      <div className="">
        <div class="App-header"></div>
        <SelectButton />
        <div className="">
          <VendorSelect />
        </div>
        <div>
          <TableMatiralUi />
        </div>
        <div className="">
          <RadioButton />
        </div>

        <div className="">
          <DatePicker />
        </div>
        <div className="">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <SwitchButton />
        </div>

        <div className="">
          <CheckBox />
        </div>
        <div className="">
          <TextFields />
        </div>
        <div className="">
          <TextNumber />
        </div>
        <div className="">
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
