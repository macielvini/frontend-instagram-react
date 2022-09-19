import React from "react"

export default function Post(props = "") {

  const [totalCurtidas, setTotalCurtidas] = React.useState(props.quantidadeCurtidas);

  const [bookmark, setBookmarkIcon] = React.useState("bookmark-outline");
  const [heartIcon, setHeartIcon] = React.useState("heart-outline")

  function salvarPost() {
    if (bookmark === "bookmark-outline") setBookmarkIcon("bookmark");
    if (bookmark === "bookmark") setBookmarkIcon("bookmark-outline");
  }

  function curtirPost() {
    setHeartIcon("heart");
    if (heartIcon !== "heart") setTotalCurtidas(totalCurtidas + 1);
  }

  function botaoCurtir() {
    if (heartIcon === "heart-outline") {
      setHeartIcon("heart")
      setTotalCurtidas(totalCurtidas + 1);
    }

    if (heartIcon === "heart") {
      setHeartIcon("heart-outline");
      setTotalCurtidas(totalCurtidas - 1);
    }
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.userImagem} alt={props.alt} />
          {props.userNome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo" onClick={curtirPost}>
        <img src={props.postImagem} alt={props.alt} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name={heartIcon} onClick={botaoCurtir}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={bookmark} onClick={salvarPost}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imagemCurtidor} alt={props.alt} />
          <div class="texto">
            Curtido por <strong>{props.nomeCurtidor}</strong> e <strong>outras {totalCurtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}