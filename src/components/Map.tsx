import map from "../assets/map.png"

export default function Map() {

    return (
        <section className="flex items-center justify-between py-20">
            <div className="text-xl leading-10 w-[50%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis distinctio necessitatibus perspiciatis et natus, animi quis ut similique enim laudantium non nobis officia expedita aliquid, alias, saepe eos doloremque iste! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis distinctio necessitatibus perspiciatis et natus, animi quis ut similique enim laudantium non nobis officia expedita aliquid, alias, saepe eos doloremque iste!</div>
            <div>
                <img src={map} alt="map" />
            </div>
        </section>
    )
}