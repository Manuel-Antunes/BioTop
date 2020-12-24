import React from 'react';
import Crosswords from '../../components/Games/Crosswords';

import { Container } from './styles';
function handleEndGame(win: boolean) {
    console.log(win);
}
const Dashboard: React.FC = () => {
    return (
        <Container>
            <h1>Trabalho de Biologia</h1>
            <Crosswords id={1} crosswords={[['P', 'Õ', 'Â', 'K', 'C', 'Ô', 'Í', 'D', 'Â', 'F', 'E', 'O', 'S', 'I', 'N', 'Ó', 'F', 'I', 'L', 'O', 'S', 'D', 'T',],
            ['U', 'Ê', 'L', 'Ê', 'T', 'Q', 'V', 'Â', 'C', 'Ó', 'C', 'L', 'E', 'A', 'D', 'U', 'O', 'D', 'E', 'N', 'O', 'Q', 'G',],
            ['L', 'L', 'D', 'D', 'S', 'P', 'A', 'Ó', 'F', 'Q', 'O', 'W', 'A', 'C', 'E', 'R', 'E', 'B', 'E', 'L', 'O', 'Ê', 'S',],
            ['M', 'X', 'Ú', 'Õ', 'S', 'Ô', 'L', 'Ô', 'A', 'J', 'X', 'N', 'M', 'Ó', 'Ó', 'H', 'Z', 'Ô', 'Ã', 'E', 'B', 'O', 'Ú',],
            ['Õ', 'N', 'J', 'Â', 'J', 'Z', 'V', 'F', 'Ã', 'G', 'M', 'V', 'Ú', 'E', 'Õ', 'Â', 'I', 'Ã', 'O', 'Z', 'I', 'M', 'T',],
            ['E', 'O', 'H', 'T', 'B', 'M', 'A', 'I', 'Z', 'W', 'F', 'W', 'Ê', 'L', 'N', 'Ô', 'C', 'N', 'Â', 'N', 'Ô', 'Y', 'E',],
            ['S', 'Z', 'I', 'N', 'V', 'Ú', 'A', 'L', 'U', 'Ã', 'H', 'B', 'A', 'N', 'Z', 'I', 'E', 'R', 'Ô', 'Ú', 'G', 'K', 'R',],
            ['Â', 'A', 'P', 'O', 'T', 'Ú', 'Ó', 'T', 'Z', 'Z', 'L', 'D', 'K', 'S', 'U', 'G', 'N', 'M', 'Â', 'J', 'S', 'R', 'M',],
            ['G', 'N', 'E', 'I', 'R', 'B', 'R', 'R', 'T', 'X', 'S', 'P', 'Y', 'K', 'Í', 'L', 'R', 'G', 'Õ', 'N', 'Ê', 'Z', 'O',],
            ['X', 'T', 'R', 'Ó', 'A', 'P', 'T', 'A', 'K', 'O', 'Ã', 'Í', 'B', 'T', 'K', 'O', 'A', 'E', 'E', 'Ç', 'I', 'Q', 'R',],
            ['Õ', 'I', 'T', 'Õ', 'Q', 'O', 'I', 'Ç', 'H', 'Ç', 'Ô', 'Ç', 'N', 'L', 'H', 'E', 'P', 'S', 'D', 'S', 'A', 'O', 'R',],
            ['C', 'C', 'E', 'G', 'U', 'G', 'C', 'Ã', 'Ô', 'P', 'U', 'A', 'Â', 'Â', 'S', 'N', 'Ã', 'T', 'W', 'S', 'V', 'K', 'E',],
            ['T', 'O', 'N', 'Í', 'E', 'T', 'A', 'O', 'Ú', 'S', 'T', 'T', 'B', 'A', 'S', 'T', 'O', 'N', 'E', 'T', 'E', 'S', 'C',],
            ['E', 'R', 'S', 'F', 'I', 'L', 'D', 'E', 'G', 'L', 'U', 'T', 'I', 'Ç', 'Ã', 'O', 'Ã', 'Ú', 'F', 'Y', 'O', 'Ç', 'E',],
            ['P', 'P', 'Ã', 'U', 'A', 'H', 'Ã', 'B', 'T', 'R', 'A', 'T', 'O', 'D', 'I', 'G', 'E', 'S', 'T', 'I', 'V', 'O', 'P',],
            ['E', 'O', 'O', 'T', 'H', 'N', 'R', 'Ê', 'R', 'B', 'F', 'R', 'Z', 'Ó', 'F', 'Ó', 'L', 'R', 'Q', 'A', 'P', 'Y', 'T',],
            ['Õ', 'L', 'A', 'M', 'J', 'B', 'E', 'C', 'Â', 'V', 'A', 'Ú', 'P', 'F', 'C', 'A', 'D', 'J', 'Â', 'F', 'Q', 'W', 'O',],
            ['T', 'Ú', 'N', 'I', 'C', 'A', 'M', 'U', 'C', 'O', 'S', 'A', 'M', 'C', 'Ô', 'R', 'G', 'Y', 'I', 'X', 'Ú', 'O', 'R',],
            ['G', 'Õ', 'G', 'N', 'F', 'I', 'C', 'A', 'V', 'I', 'D', 'A', 'D', 'E', 'S', 'N', 'A', 'S', 'A', 'I', 'S', 'Y', 'E',],
            ['Y', 'Z', 'Z', 'W', 'V', 'A', 'Ú', 'S', 'Í', 'Ô', 'Ç', 'G', 'B', 'R', 'Ô', 'N', 'Q', 'U', 'I', 'O', 'S', 'L', 'S',],
            ['Ú', 'O', 'Ú', 'R', 'E', 'A', 'B', 'S', 'O', 'R', 'Ç', 'Ã', 'O', 'P', 'O', 'H', 'O', 'T', 'T', 'Ê', 'Ç', 'S', 'B',],
            ['H', 'V', 'A', 'N', 'Õ', 'Õ', 'K', 'D', 'M', 'A', 'N', 'D', 'R', 'Ó', 'G', 'E', 'N', 'O', 'S', 'Q', 'O', 'W', 'Q',],
            ['B', 'Í', 'A', 'D', 'E', 'N', 'O', 'I', 'P', 'Ó', 'F', 'I', 'S', 'E', 'U', 'V', 'B', 'Ó', 'M', 'P', 'J', 'R', 'K',],]} answers={['TRATODIGESTIVO', 'PULMÕES', 'TÚNICAMUCOSA', 'DEGLUTINAÇÃO', 'DUODENO', 'EOSINÓFILOS', 'ANTÍGENO', 'ANTICORPO', 'CRÂNIO', 'MENINGES', 'CEREBELO', 'HORMÔNIOS', 'ADENOIPÓFISE', 'ANDRÓGENOS', 'TERMORRECEPTORES', 'CÓCLEA', 'FILTRAÇÃO', 'REABSORÇÃO', 'CAVIDADESNASAIS', 'TRAQUEIA', 'BRÔQUIOS', 'VÊNULAS', 'HIPERTENSÃO', 'VALVAAÓRTICA']} onEnd={handleEndGame} finders={["É um tubo formado pela boca, faringe, esôfago, estômago, intestino delgado e intestino grosso.	",
                "É a camada mais interna das camadas que formam, histologicamente, o trato digestivo.	",
                "É a ação na qual a língua empurra a comida para a faringe, ao mesmo tempo em que a epiglote abaixa e o glote sobre fechando a traqueia, enviando a comida para o esôfago.	",
                "É a primeira seção do intestino delgado.	",
                "Célula fagocitária responsável pela defesa contra vermes.	",
                "Elemento estranho capaz de iniciar uma resposta imune.	",
                "Proteína produzida pelo sistema específico capaz de responder ao antígeno.	",
                "Estrutura óssea protetora do encéfalo.	",
                "Estruturas protetoras do sistema nervoso, dentre as quais estão a dura-máter, aracnóide e a pia-máter.	",
                "Estrutura do encéfalo responsável pelas funções motoras.	",
                "Produzidos pelas glândulas endócrinas e transportados pela corrente sanguínea.	",
                "Um dos lobos da hipófise, produz os hormônios trópicos, o GHS e a prolactina.	",
                "Hormônios sexuais masculinos.	",
                "Receptores sensoriais que respondem à variação de temperatura.	",
                "Célula fotorreceptora muito sensível à luz.	",
                "Cóclea: Tubo longo enrolado e preenchido por líquido no formato de um caracol.	",
                "Processo no qual o sangue chega ao glomérulo propiciando a passagem de elementos do plasma para a cápsula renal.	",
                "Processo no qual algumas substâncias são reabsorvidas pelos túbulos néfricos.	",
                "Onde estão localizadas células sensoriais que são responsáveis pela percepção de cheiro.	",
                "É formada por vários anéis de cartilagem, que impedem que ela se feche, permitindo a passagem constante de ar.	",
                "Penetram nos pulmões e ramificam-se em tubos mais finos que são conhecidos como bronquíolos.	",
                "Responsáveis pela troca do oxigênio em gás carbônico, através da respiração.	",
                "Resultado da reunião de vasos capilares. Formam as veias.	",
                "Doença na qual a pressão arterial sistólica e diastólica fica acima de 14 por 9.	",
                "Encontrada no ventrículo esquerdo na abertura da aorta.	",]} />

        </Container>
    );
}

export default Dashboard;