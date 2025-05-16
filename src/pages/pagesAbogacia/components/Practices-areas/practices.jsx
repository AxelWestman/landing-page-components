import "./practices.css";
import { GoLaw } from "react-icons/go";
import { MdBusinessCenter } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiPistolGun } from "react-icons/gi";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";

const Practices = () => {

    return(

        <>
            <section className="seccion-cajas">
                <h1>Lorem ipsum</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="container-cajas">
                    <div className="cajas">
                        <div className="caja"> 
                            <GoLaw className="iconos-caja"/>
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                        </div>
                    </div>
                    <div className="cajas">
                        <div className="caja"> 
                            <MdBusinessCenter className="iconos-caja" />
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                        </div>
                    </div>
                    <div className="cajas">
                        <div className="caja"> 
                            <IoIosPeople className="iconos-caja" />
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                        </div>
                    </div>
                    <div className="cajas">
                        <div className="caja"> 
                            <GiPistolGun className="iconos-caja" />
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                        </div>
                    </div>
                    <div className="cajas">
                        <div className="caja"> 
                            <BiSolidPlaneAlt className="iconos-caja" />
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                        </div>
                    </div>
                    <div className="cajas">
                        <div className="caja"> 
                            <IoHeartSharp className="iconos-caja" />
                            <h2>Lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}

export default Practices;