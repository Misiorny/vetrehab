import NavItem from "./NavItem";
import navigation from '../../source/navigation'
import Logo from '../logo/Logo'


function Navigation() {
  return (
	  <nav>
		<Logo/>
	  <ul>
		{
		  navigation.map((e) =>
			  <NavItem key={e.id} navItemHref={e.to} navItemLabel={e.label}/>)
		}
	  </ul>
	  </nav>
  )
}

export default Navigation;
