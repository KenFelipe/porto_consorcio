import React from 'react'

import TitlingWrapper from '../../component/titling/titling'
import TitlingHeader from '../../component/titling/header'
import TitlingText from '../../component/titling/text'

const Titling = props => (
    <TitlingWrapper>
        <TitlingHeader>Planos de 200 meses para pagar com opções de parcela reduzida até a contemplação.</TitlingHeader>
        <TitlingText>
            <p>O consórcio é uma ótima opção para você adquirir um imóvel por meio de parcelas mensais e sem juros. Além do sorteio mensal, é possível dar lances, inclusive usando seu FGTS, para ampliar as chances de ser contemplado.</p>
            <p>Você também pode usar seu crédito do consórcio para construir, reformar, comprar uma casa de praia ou um terreno.</p>
        </TitlingText>
    </TitlingWrapper>
)

export default Titling