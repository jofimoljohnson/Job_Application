import Wrapper from "../assets/Wrapper/BigSidebarPage"
import Logo from "./Logo"
import NavLinks from "./NavLinks"
import { useSelector } from "react-redux"


function BigSidebar() {
const {isSidebarOpen}=useSelector((store)=>store.user)

  return (
        <Wrapper>

          <div className={isSidebarOpen?"sidebar-container ":"sidebar-container show-sidebar"}>
            <div className="content">
              <header>
                <Logo/>
              </header>
              <NavLinks/>
            </div>

          </div>
        </Wrapper>


  )
}

export default BigSidebar