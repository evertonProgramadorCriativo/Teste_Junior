
import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Pesquisar } from '../../../../assets/images/Union.svg';
import { ReactComponent as Card } from '../../../../assets/images/carrinho.svg';



import './NavBar.styles.scss';

const navbar = () => (

    <React.Fragment>

        <div className="NavBar">

            {/* ----Inicio-------( NavBar_Left )----------- */}

            <div className="NavBar_Left">
                <Link className='NavBar_Left--Registro' to='/Entrar'>
                    Entrar
  </Link>
                <span className="NavBar_Left--Separador"> | </span>
                <Link className="NavBar_Left--Registro" to='/Cadastra-se'>
                    Cadastrar-se
  </Link>
            </div>

            {/* ----Fim-------( NavBar_Left )----------- */}


            {/* ----Inicio-------( NavBar_Center )----------- */}

            <div className="NavBar_Centro">
                <Link className='NavBar_Centro--link' to='/SAPATOS'>
                    SAPATOS
  </Link>
                <Link className="NavBar_Centro--link" to='/BOLSAS'>
                    BOLSAS
  </Link>
                <Link className='NavBar_Centro--link' to='/ACESSORIOS'>
                    ACESSÓRIOS
</Link>
                <Link className="NavBar_Centro--link" to='/OFF'>
                    OFF
</Link>
            </div>

            {/* ----Fim-------( NavBar_Center )----------- */}



            {/* ----Inicio-------( NavBar_Right )----------- */}


            <div className="NavBar_Right">
                <form className="NavBar_Right--Form">
                    <Pesquisar className="NavBar_Right--Icone" />

                    <input type="text" name="Seach" placeholder="Buscar" className="NavBar_Right--pesquisar" />
                </form>

                <div className="NavBar_Right--cardShopping">

                    <Card className="NavBar_Right--cardShopping-Icon">

                    </Card>
                    <span className="NavBar_Right--cardShopping-Quantidade"> 0 </span>



                </div>

            </div>

            {/* ----Fim-------( NavBar_Right )----------- */}


        </div>


    </React.Fragment>

);

export default navbar;

