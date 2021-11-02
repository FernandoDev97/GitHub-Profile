import { 
    HeaderContainer,
    HeaderLogo, 
 } from './styles';

import Logo from '../../assets/img/logo.png'

const Header = () => (
    <HeaderContainer>
        <HeaderLogo src={Logo}/>
    </HeaderContainer>
);

export default Header;