import ProjectCard from "./projectcard"


const filtro = () => {
    const [dados, setDados] = useState(brutos);
    
    const filtra = (entrada) => {
      setDados(brutos.filter(
        (ele) => { 
          return ele.nome.includes(entrada) || ele.link_original.includes(entrada);
        }
      ))
    }

<input 
    type= "text" 
    placeholder= "filtro"
    onChange={ (e) => filtra(e.target)} />
}