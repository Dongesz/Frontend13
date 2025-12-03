

export default function Card({ item, bgColor, border }) {




    return (
        <div class="card p-3" style={{ width: "18rem", margin: "20px", backgroundColor: bgColor, border: border ? "solid 2px black" : "" }}>
            <img src={item.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Értékelés: {item.rating}</li>
                <li class="list-group-item">{item.desc}</li>
            </ul>
        </div>
    )
}
