import Link from "next/link";

interface NavItem {
  navItemLabel: string,
  navItemHref: string,
}

function NavItem({navItemLabel, navItemHref}: NavItem) {
  return (
	  <li>
		<Link href={navItemHref}>{navItemLabel}</Link>
	  </li>
  )
}

NavItem.defaultProps = {
  navItemName: 'Home',
  navItemHref: '/',
}
export default NavItem;
