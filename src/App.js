import {Routes} from "./routes/Routes"
import { Navigation } from "./components/navigation/Navigation";
import { UserProvider } from "./shared/provider/UserProvider"
import { FlightProvider } from "./shared/provider/FlightProvider";
import "./shared/global/Global.css"

function App() {
  return (
    <FlightProvider>
      <UserProvider>
        <Routes>
          <Navigation />
        </Routes>
      </UserProvider>
    </FlightProvider>
  );
}

export default App;
