import style from "./header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <h1>Buscar</h1>
      <p>
        Selecione um tribunal para listar os processos ou buscar pelo número
        unificado
      </p>
    </header>
  );
}

export default Header;
