# COVID19 Portugal

Página para apresentar os dados mais recentes do surto COVID19 em Portugal, comparando-os com os dados do dia anterior.

Utiliza os dados da [DGS](https://www.dgs.pt/) disponibilidados pelos grandes da [Data Science for Social Good Portugal](https://www.dssg.pt) no seu [repositório](https://github.com/dssg-pt/covid19pt-data/) recorrendo à [API](https://covid19-api.vost.pt) disponibilizada pelos também grandes da [VOST Portugal](https://www.vost.pt).

Frontend desenvolvido em Angular 9 com recurso às bibliotecas ApexCharts, Bootstrap e FontAwesome. 
Pequeno backend em PHP para evitar problemas de CORS e transformação de dados.

## Funcionalidades
* Apresentação dos dados mais recentes e comparação com dados anteriores (actualmente apenas dia anterior)
    * Pode funcionar sem dados anteriores, não fazendo comparações
* Análise da distribuição de sintomas
* Análise detalhada dos casos confirmados, recuperados e óbitos
    * Por área regional de saúde, em ordem decrescente
    * Por grupo etário (apenas casos confirmados e óbitos), dados totais + classificados por sexo
        * Gráficos de distribuição de novos dados
        * Tabela de dados
        * Gráficos de frequência relativa
    * Taxa de letalidade (apenas óbitos), dados em ordem decrescente
        * Por área regional de saúde
        * Por grupo etário, dados totais + classificados por sexo
* 2 idiomas disponíveis: Português e Inglês. Facilmente extensível a mais idiomas

## Servidor de desenvolvimento

Correr `npm start` para arrancar um servidor de desenvolvimento local em `http://localhost:4200/`. O servidor estará acessível dentro da rede do computador onde é corrido e terá configurado um proxy para utilizar o backend PHP em https://covid19.anteropires.com/api

## Sugestões

Sugestões são sempre bem-vindas! Não hesitem em utilizar os Issues ou Pull Requests. Desde já peço desculpa por alguma eventual demora a responder ;)
Ou podem dar-me uma apitadela no [Twitter](https://twitter.com/anttails)!