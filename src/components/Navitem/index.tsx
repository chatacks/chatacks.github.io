import NavItemProps from '../../types/Navitem';

function NavItem({ href, iconClass, children }: NavItemProps) {
  return (
    <li className="nav-item">
      <a href={ href } className="nav-link active-link">
        <i className={ iconClass } />
        {' '}
        {children}
      </a>
    </li>
  );
}

export default NavItem;
