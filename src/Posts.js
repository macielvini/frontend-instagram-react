import Post from "./Post";

const posts = [
  { userImagem: "assets/img/meowed.svg", userNome: "meowed", postImagem: "assets/img/gato-telefone.svg", imagemCurtidor: "assets/img/respondeai.svg", nomeCurtidor: "respondeai", quantidadeCurtidas: 101.523 },
  { userImagem: "assets/img/barked.svg", userNome: "barked", postImagem: "assets/img/dog.svg", imagemCurtidor: "assets/img/adorable_animals.svg", nomeCurtidor: "adorable_animals", quantidadeCurtidas: 99.159 },
];

export default function Posts() {
  return (
    <div class="posts">
      {
        posts.map((p) => <Post
          userImagem={p.userImagem}
          userNome={p.userNome}
          postImagem={p.postImagem}
          imagemCurtidor={p.imagemCurtidor}
          nomeCurtidor={p.nomeCurtidor}
          quantidadeCurtidas={p.quantidadeCurtidas} />)
      }

    </div>
  )
}