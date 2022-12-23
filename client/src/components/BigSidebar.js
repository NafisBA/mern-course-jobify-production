import Wrapper from "../assets/wrappers/BigSidebar";
import { useAppContext } from "../context/appContext";
import NavLink from './NavLinks'
import Logo from "./Logo";

const BigSidebar = () => {
  const {showSidebar, toggleSidebar} = useAppContext()

  return (
    <Wrapper>
      <div className={showSidebar ? 'sidebar-container': 'sidebar-container show-sidebar'
    }
    >
      <div>
        <header>
          <Logo/>
        </header>
        <NavLink toggleSidebar={{toggleSidebar}}/>
      </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
