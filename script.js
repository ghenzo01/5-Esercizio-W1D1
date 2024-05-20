/* Cos'è un algoritmo? Prova a spiegarlo con parole tue, come se lo dovessi spiegare a qualcuno che non ne capisce niente di informatica.
 */

/* Un algoritmo è come una ricetta di cucina, ma destinata ad un computer. Quando cucina, il cuoco segue una serie di passaggi specifici per preparare un piatto.
Ad esempio, per fare una torta ci potrebbero essere passaggi come "mescola farina e zucchero", "aggiungi uova" e "cuoci in forno a una certa temperatura 
per un certo tempo".

In informatica, un algoritmo è una serie di istruzioni dettagliate che dicono a un computer, passo dopo passo, esattamente cosa fare per ottenere un risultato
o risolvere un problema. Come per una ricetta di cucina, il computer segue questi passaggi uno dopo l'altro per ottenere il risultato desiderato. 
In pratica un algoritmo è una ricetta per ottenere un risultato destinata ad un pc, il quale deve seguirne i passaggi. */





/* Cos'è una variabile? Prova a spiegarlo con parole tue, come se lo dovessi spiegare a qualcuno che non ne capisce niente di informatica.
*/

/* Una variabile in informatica può essere paragonata a una scatola vuota in cui si possono  mettere cose diverse. Come per ogni scatola vuota che viene riempita,
è possibile  cambiarne il contenuto quando si vuole. Supponendo di avere tante variabili, il nome scritto sulle scatole, che è il nome delle variabili,
aiuta a ricordare cosa esse contengono, in modo da sapere esattamente in quale scatola cercare qualora si dovesse aver bisogno di qualcosa di specifico.

Per esempio, se si ha una scatola chiamata "età" e ci si mette dentro il numero 30, ogni volta che si vorrà sapere l'età basterà guardare dentro la scatola "età".
Più tardi, col passare del tempo e il compimento del 31-esimo anno di età, si potrà aggiornare il contenuto della scatola cambiandolo da 30 a 31. */





/*undefined e null sono la stessa cosa?
*/

/*undefined e null in JavaScript non sono la stessa cosa, anche se a volte possono sembrare simili perché entrambi rappresentano valori di "non valore".

Tuttavia, hanno usi e significati differenti:

   - undefined indica che una variabile è stata dichiarata ma non è stata ancora assegnata a un valore. È il valore di default per le variabili che
   non hanno ricevuto un valore assegnato. Può anche indicare che una funzione non ha un valore di ritorno esplicito.

   - null è un valore che deve essere assegnato a una variabile intenzionalmente per indicare che la variabile non ha alcun valore. È usato per rappresentare
   intenzionalmente un "nulla", un vuoto o un valore mancante. 
   
   Esempio:

    let a;
    console.log(a);  // Stampa 'undefined' perché 'a' non ha ricevuto un valore.

    let b = null;
    console.log(b);  // Stampa 'null' perché 'b' è stato esplicitamente impostato a null.


In pratica, null è un valore assegnabile che indica un vuoto intenzionale, mentre undefined è quello che il sistema fornisce quando una variabile 
non ha ancora ricevuto un valore.*/