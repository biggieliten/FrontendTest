import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import "../sass/HamburgerMenu.scss";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
  options?: string[];
};

const HamburgerMenu = ({ isOpen, onToggle, options }: Props) => {
  return (
    <>
      <button
        className="hamburgerButton"
        aria-label="Menu Button"
        onClick={onToggle}
      >
        {isOpen ? (
          <RxCross1 className="crossIcon" size={24} />
        ) : (
          <GiHamburgerMenu className="hamburgerIcon" size={24} color="#fff" />
        )}
      </button>
      <div className={`overlay ${isOpen ? "open" : ""}`}>
        <div className={`hamburgerMenu ${isOpen ? "open" : ""}`}>
          {options && (
            <ul>
              {options.map((option, index) => (
                <li key={index}>
                  <a href="" className="listItem">
                    {option}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
