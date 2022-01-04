import "./list.scss"

export default function List({title, active, setSelected, id}) {
return (
    <li 
    className={active ? "List active" : "List"}
    onClick={()=> setSelected(id)}
    >
    {title}
    </li>
);
}