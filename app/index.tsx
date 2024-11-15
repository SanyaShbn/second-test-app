import { NativeBaseProvider } from "native-base";
import HeaderBottom from "./Header/HeaderBottom";
// import HeaderTopClose from "./Header/HeaderTop/HeaderTopClose";
// import HeaderTopPreviousPage from "./Header/HeaderTop/HeaderTopPreviousPage";
import HeaderTopSearch from "./Header/HeaderTop/HeaderTopSearch";

export default function Index() {
  return (
    <NativeBaseProvider> 
      <HeaderTopSearch/>
      <HeaderBottom/>
    </NativeBaseProvider>
  );
}
