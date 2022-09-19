import React from "react"

export default function Usuario() {

  const defaultProfileIcon = "https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg";
  const [nome, setNome] = React.useState("editar");
  const [nickname, setNickname] = React.useState("editar");
  const [image, setImage] = React.useState(defaultProfileIcon)

  function editarNomes() {
    let pNome = prompt("Qual seu nome?");
    let pNickname = prompt("Qual seu nome de usuário?");

    if (pNome === "") {
      pNome = "editar";
    }
    if (pNickname === "") {
      pNickname = "editar";
    }

    setNome(pNome);
    setNickname(pNickname);
  }

  function editarImagem() {
    let pImage = prompt("Link para sua foto de perfil:");

    if (!pImage) {
      pImage = defaultProfileIcon;
    }

    setImage(pImage);
  }

  return (
    <div class="usuario">
      <div class="imagem-usuario">
        <img src={image} alt="" />
        <div id="editar-imagem">
          <ion-icon onClick={editarImagem} name="pencil"></ion-icon>
        </div>
      </div>
      <div class="texto">
        <div>
          <strong>{nickname}</strong>
          {nome}
        </div>
        <div class="pencil-icon">
          <ion-icon onClick={editarNomes} name="pencil"></ion-icon>
        </div>
      </div>
    </div>
  )
}