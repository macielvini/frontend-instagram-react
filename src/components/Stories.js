import Story from "./Story";

const stories = [
  { imagem: "assets/img/9gag.svg", user: "9gag" },
  { imagem: "assets/img/meowed.svg", user: "meowed" },
  { imagem: "assets/img/barked.svg", user: "barked" },
  { imagem: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" },
  { imagem: "assets/img/wawawicomics.svg", user: "wawawicomics" },
  { imagem: "assets/img/respondeai.svg", user: "respondeai" },
  { imagem: "assets/img/filomoderna.svg", user: "filomoderna" },
  { imagem: "assets/img/memeriagourmet.svg", user: "memeriagourmet" }
]

export default function Stories() {
  return (
    <div class="stories">
      {stories.map((s) => <Story imagem={s.imagem} user={s.user} />)}\
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}