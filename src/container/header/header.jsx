import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/logo.png';
import './header.css';

function Header() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary shadow-sm">
      <Container >
        <Navbar.Brand href="#" className='flex gap-2 items-center'>

          <img className='rounded-full' src={Logo} width={50} alt="..." />
          <span className='text-[24px] font-semibold text-[#ED4C67]' >KARTHIK</span>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="" />

        <Navbar.Collapse id="" className='justify-content-end gap-10'>

          <p onClick={() => window.location.href = "#home"} className=' font-medium  mb-0 hover:text-[#ed4c67] cursor-pointer'>HOME</p>
          <p onClick={() => window.location.href = "#about"} className=' font-medium  mb-0 hover:text-[#ed4c67] cursor-pointer' >ABOUT</p>
          <p onClick={() => window.location.href = "#skills"} className=' font-medium  mb-0 hover:text-[#ed4c67] cursor-pointer' >SKILLS</p>
          <p onClick={() => window.location.href = "#contact"} className=' font-medium  mb-0 hover:text-[#ed4c67] cursor-pointer' >CONTACT</p>

        </Navbar.Collapse>

      </Container>  

    </Navbar>
  );
}

export default Header;


