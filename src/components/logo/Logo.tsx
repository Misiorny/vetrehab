import logoImg from '../../img/Vetrehab_logo.png'
import Image from 'next/image'


function Logo (){
  return(
<div>
  <Image src={logoImg} alt='Logo'/>
</div>
  );
}

export default Logo;
