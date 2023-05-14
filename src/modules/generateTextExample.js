export default function generateTextExample(){
   const textArea = document.getElementById('textInput')
   if(textArea.value.length >= 0){
      textArea.textContent ="Se você pressionar o botão de contagem, deverá ver a frequência absoluta dessas palavras em uma tabela e gráfico de pizza. Se você pressionar o botão de gerar exemplo, deverá ver esta mensagem. Considere isso um padrão"
   }
}