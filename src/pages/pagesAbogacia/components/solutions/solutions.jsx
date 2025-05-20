import "./solutions.css";
import foto from './atty_1.jpg.webp'
import foto_dos from './atty_2.jpg.webp'

const Solutions = () => {

    return(
        <>
            <section className="solutions-section">
                <div className="solutions-images">
                    <img src={foto} alt="" className="foto-abogado"/>
                    <img src={foto_dos} alt="" className="foto-abogado"/>
                </div>
                    <div className="solutions-text">
                        <h1>Lorem ipsum dolo</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
                        <div className="boton-cita">
                            <h2>Pedir cita</h2>
                        </div>
                    </div>
            </section>
        </>
    )

}   

export default Solutions