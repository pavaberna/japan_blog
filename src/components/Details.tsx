import peoples from "../assets/peoples.png"
import travel from "../assets/travel.png"
import religion from "../assets/religion.png"
import food from "../assets/food.png"

export default function Details() {

    return (
        <section className="py-20 flex flex-col gap-36">

            <div className="flex justify-between items-center">
                <img src={food} alt="" className="w-[400px] h-[400px] object-cover" />
                <div className="w-[40%] flex flex-col items-center gap-8 leading-8">
                    <h1 className="text-3xl font-bold">Japán konyha</h1>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil consectetur id hic eos facere sed. Nobis, veniam illo! Beatae nam necessitatibus expedita perspiciatis voluptates debitis possimus porro veritatis dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil consectetur id hic eos facere sed. Nobis, veniam illo! Beatae nam necessitatibus expedita perspiciatis voluptates debitis possimus porro veritatis dolorem</p>
                    <button>Tovább olvasom</button>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="w-[40%] flex flex-col items-center gap-8 leading-8">
                    <h1 className="text-3xl font-bold">Vallás</h1>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil consectetur id hic eos facere sed. Nobis, veniam illo! Beatae nam necessitatibus expedita perspiciatis voluptates debitis possimus porro veritatis dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil consectetur id hic eos facere sed. Nobis, veniam illo! Beatae nam necessitatibus expedita perspiciatis voluptates debitis possimus porro veritatis dolorem</p>
                    <button>Tovább olvasom</button>
                </div>
                <img src={religion} alt="" className="w-[400px] h-[400px] object-cover" />
            </div>

            <div className="flex justify-between items-center">
                <img src={travel} alt="" className="w-[400px] h-[400px] object-cover" />
                <div className="w-[40%] flex flex-col items-center gap-8 leading-8">
                    <h1 className="text-3xl font-bold">Közlekedés</h1>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil consectetur id hic eos facere sed. Nobis, veniam illo! Beatae nam necessitatibus expedita perspiciatis voluptates debitis possimus porro veritatis dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil consectetur id hic eos facere sed. Nobis, veniam illo! Beatae nam necessitatibus expedita perspiciatis voluptates debitis possimus porro veritatis dolorem</p>
                    <button>Tovább olvasom</button>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="w-[40%] flex flex-col items-center gap-8 leading-8">
                    <h1 className="text-3xl font-bold">Japán emberek</h1>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil consectetur id hic eos facere sed. Nobis, veniam illo! Beatae nam necessitatibus expedita perspiciatis voluptates debitis possimus porro veritatis dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil consectetur id hic eos facere sed. Nobis, veniam illo! Beatae nam necessitatibus expedita perspiciatis voluptates debitis possimus porro veritatis dolorem</p>
                    <button>Tovább olvasom</button>
                </div>
                <img src={peoples} alt="" className="w-[400px] h-[400px] object-cover" />
            </div>
        </section>
    )
}
