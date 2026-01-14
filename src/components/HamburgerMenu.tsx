import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import "../sass/HamburgerMenu.scss";
import { useState } from "react";

type Props = {
  options?: string[];
};

const HamburgerMenu = ({ options }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="hamburgerButton"
        aria-label="Menu Button"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <RxCross1 className="crossIcon" size={28} />
        ) : (
          <GiHamburgerMenu className="hamburgerIcon" size={28} color="#fff" />
        )}
      </button>
      <div className={`overlay ${isOpen ? "open" : ""}`}>
        <div className={`hamburgerMenu ${isOpen ? "open" : ""}`}>
          {options && (
            <ul>
              {options.map((option, index) => (
                <li key={index}>
                  <a href="" className={`listItem ${option}`}>
                    {option}
                  </a>
                  {index != options.length - 1 && <hr />}
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
