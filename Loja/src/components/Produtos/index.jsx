import './Produtos.css';
import bolsa from '../../assets/bolsa.png';
import note from '../../assets/portaNotebook.png';
import sandalia1 from '../../assets/sandalia1.png';
import sandalia2 from '../../assets/sandalia2.png';
import tamanco from '../../assets/tamanco.png';
import tenis from '../../assets/tenis.png';

export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Novidades</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquam porro doloribus, odit laboriosam placeat similique consectetur excepturi sapiente laborum explicabo praesentium pariatur repellat magnam accusantium neque veniam quis ipsum.</p>
                <div className='produtos_grid'>
                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia1} alt='sandalia'/>
                            <span className='badge-venda'>Mais vendidos</span></div>
                            <div className='card-info'>
                                <h3>Sandália de Couro</h3>
                                <p className='preço'>R$349,90</p>
                                <button className='btn'>Comprar agora</button>
                            </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia2} alt='sandalia'/>
                        </div>
                        <div className='card-info'>
                            <h3>Sandália Rosa</h3>
                            <p className='preço'>R$229,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={tamanco} alt='tamanco'/>
                        </div>
                        <div className='card-info'>
                            <h3>Tamanco</h3>
                            <p className='preço'>R$369,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={bolsa} alt='bolsa'/>
                        </div>
                        <div className='card-info'>
                            <h3>Bolsa</h3>
                            <p className='preço'>R$400,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={note} alt='porta Notebook'/>
                            <span className='badge-desconto'>-10%</span>
                        </div>
                        <div className='card-info'>
                            <h3>Porta notebook</h3>
                            <p className='preço'>R$250,00</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={tenis} alt='tênis'/>
                            <span className='badge-venda'>Mais Vendido</span>
                        </div>
                        <div className='card-info'>
                            <h3>Porta notebook</h3>
                            <p className='preço'>R$250,00</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}