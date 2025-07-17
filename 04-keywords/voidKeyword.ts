/**
 * Void
 * 
 * Tipo que representa a ausência de valor.
 * Funções com retorno VOID, não retornam nenhum valor.
 */

function printMessage(msg: string): void {
  console.log(msg);

  // ERRO
  // return msg;
}

printMessage("message");