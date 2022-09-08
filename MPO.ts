/*
More profitable operation
As part of our car buying and selling process, we often have a forecast of potential car prices. A good use of this forecast is to take advantage of the moment when the price of a car is low to buy it and then take advantage of the moment when that price is higher to sell it.

Let's say we have a string with N integer prices separated by a comma, where each price P (i) represents the value of a car on day i. If we are only allowed to do one buy trade and one sell trade, then design an algorithm that finds the highest possible profit given the sequence of prices over time.

Note: You should be aware that you cannot sell a car before you buy it. 

Example # 1:
Input: “7,1,5,3,6,4”

Output: 5

Explanation: We buy on day 2 at $1 and sell on day 5 at $6 with a profit of $5.

Example # 2:

Input: “7,6,4,3,1"

Output: 0

Explanation:
In this case, it is not recommended to buy the car because clearly it’s worth less each day and we will never profit from it.
*/

import * from "readline";
var readIO = createInterface({
    input: process.stdin,
    output: process.stdout
});
let top = 0;
let atrib = (pergunta:string)=> new Promise<string>(resposta=> readIO.atrib(pergunta,resposta )).finally(()=>readIO.close());

let geral = await atrib("Insira os valores");

let partido = geral.split(',');
for(let num of partido){
    for(let ind = partido.indexOf(num); partido.length;ind++){
        let sum = Number(num) - Number(partido[ind]);
        if(sum<0){
            if(top<sum){
                top=sum;
            }
        }
    }
}
return top;