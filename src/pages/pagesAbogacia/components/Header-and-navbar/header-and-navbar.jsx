import "./header-and-navbar.css";
import Navbar from '../Navbar/navbar'



const HeaderAndNavbar = () => {

    return(
        <>
            <div className="pagina">
                <Navbar />
                <div className="container-texto">
                    <div className="textos">
                        <h1>Lorem ipsum dolor sit amet consectetur</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla veniam, est dolores ex dolorum soluta vitae officia recusandae accusamus necessitatibus expedita atque. Dolorum accusamus necessitatibus inventore mollitia omnis consequuntur sequi.</p>
                        <div className="boton-cita">
                            <h2>Pedir cita</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default HeaderAndNavbar; 