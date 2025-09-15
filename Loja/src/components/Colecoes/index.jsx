import './Colecoes.css'

import verao from '../../assets/verao.jpg'
import scarpins from '../../assets/scarpins.jpg'
import bolsas from '../../assets/bolsas.jpg'

export default function Colecoes() {
    return(
        <section className="colecoes">
            <div className='titulos'>
                <h2>Coleções 2026</h2>
                <p>A nova temporada traz calçados que unem estilo e conforto: sandálias modernas, tênis casuais e sapatos elegantes em cores e designs exclusivos. E não para por aí: confira também nossas bolsas estilosas e porta-notebook que completam qualquer look. Venha conhecer as tendências que vão marcar este ano!
                </p>
                <button className='btn'>Comprar agora</button>
            </div>

            <div className='grid-colecoes'>
                <div className='item'>
                    <img src={verao} alt="colecao verao" />'
                </div>

                <div className='item grande'>
                    <img src={bolsas} alt="colecao verao" />'
                </div>

                <div className='item'>
                    <img src={scarpins} alt="colecao verao" />'
                </div>

            </div>
        </section>
    )
}