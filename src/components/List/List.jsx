import "./list.scss"
// import "../../data.js";

export default function List({title, active, setSelected, id}) {
return (
    <li 
    className={active ? "List active" : "List"}
    onClick={()=> setSelected(id)}
    >
    {title}
    {/* {data.map((id)=> (
        <div
        className="item">
            <a target="_blank" href={d.link}>
                <img src={d.img} alt={d.alt}></img>
                <h4 id="poemTitle">{d.title}</h4>
            </a>
        </div>
    ))} */}
    </li>
);
}