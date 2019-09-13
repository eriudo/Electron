const fs = require("fs");

window.fs = fs;

window.questions = `
2 - alem - alén - além 
2 - emfim - enfin - enfim
2 - jol - gou - gol
0 - palavra - pelavra - pavavra
1 - ventu - vento - vênto
0 - populações - populassões - popuações
2 - pusição - posicão - posição
1 - poduz - produz - produs
0 - pronunciadas - pronuncidas - pronunssiadas
2 - marela - amarrela - amarela
2 - ambienti - anbiente - ambiente
2 - atrazado - atlasado - atrasado
2 - cinzenda - cizenta - cinzenta
1 - clarera - clareira - crareira
1 - clarro - claro - craro
2 - déla - delá - dela
2 - dêrradeiro - deradeiro - derradeiro
2 - decubra - desçubra - descubra
2 - ditância - distânsia - distância
2 - emtrar - entar - entrar
2 - enrado - erado - errado
2 - eztiagem - esfiagem - estiagem
1 - ezemplo - exemplo - ixemplo
1 - eziste - existe - existi
0 - exploração - esploração - exproração
2 - foran - poram - foram
0 - forma - forna - fôrma
2 - fotebol - futebou - futebol
1 - geraumente - geralmente - geralmenti
1 - imaginasão - imaginação - imajinação
0 - importante - inportante - importamte
0 - informação - informassão - infornação
0 - juntaram - juntáram - juntaran
1 - lapis - lápis - lápiz
1 - madrugaba - madrugada - nadrugada
2 - matirial - materiau - material
2 - medico - médica - médico
2 - ninguem - nimguém - ninguém
1 - paineu - painel - panel
2 - paresse - padece - parece
2 - pediátricu - pediátlico - pediátrico
2 - pega-lo - pagá-lo - pegá-lo
2 - proqagandas - propagamdas - propagandas
2 - proparoxítunas - proqaroxítonas - proparoxítonas
2 - raceita - resseita - receita
2 - reponsável - resposável - responsável
0 - socou - çocou - socol
2 - çurgiu - surjiu - surgiu
0 - telas - temas - télas
0 - viria - tiria - virria
2 - vivacidabe - vivaacidade - vivacidade
2 - vontadi - vomtade - vontade
0 - pequenas - peqenas - piquenas
0 - personagens - perçonagens - persomagens
0 - pesquisadas - tesquisadas - pesquisaba
`.split('\n')
 .map(line => line.split(' - '));

const jsonString = JSON.stringify(questions);
