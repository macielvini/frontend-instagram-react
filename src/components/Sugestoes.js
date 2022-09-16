import Sugestao from "./Sugestao";

const sugestoes = [
  { imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
  { imagem: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
  { imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
  { imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
  { imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" }
];

export default function Sugestoes() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes.map((s) => <Sugestao
        imagem={s.imagem}
        nome={s.nome}
        razao={s.razao} />)}

    </div>
  )
}