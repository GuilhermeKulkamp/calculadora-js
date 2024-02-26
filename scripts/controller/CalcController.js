/*  Classe de controle para a calculadora
*   
*   Por regra o nome da classe tem sua primeira letra em maiúscula
*   e é utilizado a formatação CamelCase.
*   Também é interessante incluir a palavra 'Controller' no final
*/

class CalcController {

    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display")
        this._dateEl = document.querySelector("#date");
        this._timeEl = document.querySelector("#time");
        this._currentDate;
        this.initialize();

    }

    initialize() {

        this.setDisplayDateTime();

        // foi atribuída uma variável apenas para exemplificar o comando clearInterval
        let interval = setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);

        /* esta rotina pode ser utilizada para parar a contagem 
        *   dos comandos <setInterval> e <setTimeout>
        *
        *   setTimeout(()=>{
        *
        *       clearInterval(interval);
        *
        *   }, 10000)
        */

        this.initButtonsEvents();

    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    addEventListenerAll (element, events, fn){

        // o comando SPLIT transforma uma string num array
        events.split(" ").forEach(event => {

            element.addEventListener(event, fn, false);
            

        });

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > button");

        buttons.forEach((btn, index)=>{
            

            this.addEventListenerAll(btn, "click drag", e => {
                
                console.log(btn.id.replace("btn-",""));
                

            })

        });

    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        this._dateEl.innerHTML = value;
    }
    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
        return;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }

}