const Card = ({img, name, dis}) => {

    return (
       <>
         <div className="card">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{dis}</p>
            <button>View Profile</button>
        </div>
       </>
    )
}

export default Card