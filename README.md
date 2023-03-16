## Comentários
Eu poderia ter pensado numa lógica melhor para separar os cards em suas respectivas colunas, pois deixei as 3 colunas "chapadas" no HTML e criei um metodo (separateCards) para separar o array de cards em 3 arrays (toDoCards, doingCards, doneCards).
Como eram apenas 3 colunas e o tempo era curto, foi o que consegui pensar na hora, mas caso mais colunas precisassem ser adicionadas ficaríamos com a escalabilidade e manutenção comprometidas.

Queria também ter reaproveitado o código do modal de criar cards para a edição do cards pois eles são extremamente parecidos. Pensei usar 1 componente só com um boolan por exemplo 'isEditMode' para saber qual endpoint chamar e outras pequenas diferenças, mas não deu tempo também e infelizmente ficou essa repetição de código feia. =(



## Rodando o projeto
1. Caso não tenha o Angular instalado:    
npm install -g @angular/cli  

2. Na raíz do projeto rode os comandos:  
npm install  
ng serve  

3. O front estará rodando na porta 4200  
