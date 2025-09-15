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
        <p>Chegaram os lançamentos que vão transformar seu estilo e garantir conforto em cada passo. Sandálias modernas, tênis casuais, sapatos elegantes, além de bolsas estilosas e porta-notebook práticos já estão disponíveis. Venha conferir e escolha o acessório perfeito para acompanhar você em todas as ocasiões!</p>
        <div className='produtos-grid'>
            <div className='card'>
                <div className='card-image'>
                    <img src={sandalia1} alt='sandalia'/>
                </div>
                <div className='card-info'>
                    <h3>Sandália de Couro</h3>
                    <p className='preco'>R$349,90</p>
                    <button className='btn'>Comprar agora</button>
                </div>
            </div>

            <div className='card'>
                <div className='card-image'>
                    <img src={sandalia2} alt='sandalia'/>
                </div>
                <div className='card-info'>
                    <h3>Sandália Rosa</h3>
                    <p className='preco'>R$229,90</p>
                    <button className='btn'>Comprar agora</button>
                </div>
            </div>

            <div className='card'>
                <div className='card-image'>
                    <img src={tamanco} alt='tamanco'/>
                </div>
                <div className='card-info'>
                    <h3>Tamanco</h3>
                    <p className='preco'>R$369,90</p>
                    <button className='btn'>Comprar agora</button>
                </div>
            </div>

            <div className='card'>
                <div className='card-image'>
                    <img src={bolsa} alt='bolsa'/>
                </div>
                <div className='card-info'>
                    <h3>Bolsa</h3>
                    <p className='preco'>R$400,90</p>
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
                    <p className='preco'>R$250,00</p>
                    <button className='btn'>Comprar agora</button>
                </div>
            </div>

            <div className='card'>
                <div className='card-image'>
                    <img src={tenis} alt='tênis'/>
                    <span className='badge-venda'>Mais Vendido</span>
                </div>
                <div className='card-info'>
                    <h3>Tênis de Couro</h3>
                    <p className='preco'>R$250,00</p>
                    <button className='btn'>Comprar agora</button>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}