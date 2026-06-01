"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PerguntaErro extends Error {
    details;
    constructor(mensagem, details) {
        super(mensagem); //chamamos o constructor de erro;
        this.name = "PerguntaErro";
        this.details = details;
    }
    toString() {
        return `[${this.name}] ${this.message}`;
    }
}
exports.default = PerguntaErro;
//# sourceMappingURL=PerguntaErro.js.map