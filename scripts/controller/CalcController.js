/*  Classe de controle para a calculadora
*   
*   Por regra o nome da classe tem sua primeira letra em maiúscula
*   e é utilizado a formatação CamelCase.
*   Também é interessante incluir a palavra 'Controller' no final
*/

class CalcController {

    constructor(){

        this._displayCalc = "0";
        this._currentDate;
        this.initialize();

    }

    initialize() {

        let displayCalcEl = document.querySelector("#display")
        let dateEl = document.querySelector("#date");
        let timeEl = document.querySelector("#time");

        displayCalcEl.innerHTML = "0"
        dateEl.innerHTML = "00/00/0000"
        timeEl.innerHTML = "00:00"

    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(value) {
        this._displayCalc = value;
    }

    get dataAtual() {
        return this._currentDate;
    }

    set dataAtual(value) {
        this._currentDate = value;
    }

}