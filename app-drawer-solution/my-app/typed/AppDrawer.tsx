import { ReactNode, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './AppDrawer.css';

export type MenuItem = string;

type Props = {
  header: string;
  items: MenuItem[];
  onSelect: (item: MenuItem) => void;
};
export default function AppDrawer({ header, items, onSelect }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen(): void {
    setIsOpen(!isOpen);
  }

  function displayItem(item: MenuItem): void {
    toggleOpen();
    onSelect(item);
  }

  return (
    <>
      <FaBars onClick={toggleOpen} className="menu-icon" />
      <Backdrop isDrawn={isOpen} onClick={toggleOpen} />
      <Menu isOpen={isOpen}>
        <h3 className="menu-heading">{header}</h3>
        <ul className="menu-items">
          {items.map((item) => (
            <li
              key={item}
              className="menu-item"
              onClick={() => displayItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      </Menu>
    </>
  );
}

type MenuProps = {
  isOpen: boolean;
  children: ReactNode;
};
function Menu({ isOpen, children }: MenuProps) {
  const className = isOpen ? 'menu-drawer is-open' : 'menu-drawer';
  return <div className={className}>{children}</div>;
}

type BackdropProps = {
  isDrawn: boolean;
  onClick: () => void;
};
function Backdrop({ isDrawn, onClick }: BackdropProps) {
  const className = isDrawn ? 'menu-shade is-drawn' : 'menu-shade';
  return <div className={className} onClick={onClick} />;
}
