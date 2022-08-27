import Body from "../components/Body"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Provider } from "react-redux"
import { store } from "../redux/store"
export default function Home() {
  return (
    <Provider store={store}>
        <Header />
        <Body />
        <Footer />
    </Provider>
  )
}
