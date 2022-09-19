import React from "react"

export default function Usuario(props = "") {

  const [nome, setNome] = React.useState("editar");
  const [nickname, setNickname] = React.useState("editar");
  const [image, setImage] = React.useState("https://static.vecteezy.com/system/resources/thumbnails/005/544/770/small/profile-icon-design-free-vector.jpg")

  function editarPerfil() {
    const pNome = prompt("Qual seu nome?");
    const pNickname = prompt("Qual seu nome de usuário?");
    const pImage = prompt("Link para sua foto de perfil:");

    setNome(pNome);
    setNickname(pNickname);
    setImage(pImage);

  }

  return (
    <div class="usuario">
      <img src={image} alt="" />
      <div class="texto">
        <div>
          <strong>{nickname}</strong>
          {nome}
        </div>
        <div class="pencil-icon">
          <ion-icon onClick={editarPerfil} name="pencil"></ion-icon>
        </div>
      </div>
    </div>
  )
}