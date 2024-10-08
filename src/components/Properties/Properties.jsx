import BathtubIcon from "../Icons/BathtubIcon/BathtubIcon";
import BedIcon from "../Icons/BedIcon/BedIcon";


const cardData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Luxury Beachfront Villa",
        price: "$5000.00",
        bedrooms: 5,
        bathrooms: 4,
    },
    {
        id: 2,
        image: "https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Mountain View Retreat",
        price: "$2500.00",
        bedrooms: 2,
        bathrooms: 1,
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1571843439991-dd2b8e051966?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Cozy Countryside Cottage",
        price: "$1500.00",
        bedrooms: 1,
        bathrooms: 1,
    },
    {
        id: 4,
        image: "https://plus.unsplash.com/premium_photo-1687995673087-8719f3a394e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Elegant City Apartment",
        price: "$3500.00",
        bedrooms: 3,
        bathrooms: 2,
    },
    {
        id: 5,
        image: "https://plus.unsplash.com/premium_photo-1687995673113-865539d3b21d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Charming Historic Home",
        price: "$2800.00",
        bedrooms: 4,
        bathrooms: 3,
    },
    {
        id: 6,
        image: "https://plus.unsplash.com/premium_photo-1687960116861-8a5cf8ae0909?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Stylish Urban Loft",
        price: "$3200.00",
        bedrooms: 2,
        bathrooms: 2,
    },
];

// Use this updated cardData in your React project.


const Properties = () => {
    return (
        <section>
            <div className="container">
                <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                    <span className="mb-2 block text-lg font-semibold text-primary">
                        Properties
                    </span>
                    <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                        Grab your Dream Property
                    </h2>
                    <p className="text-base text-body-color dark:text-dark-6">
                        There are many variations of passages of Lorem Ipsum available
                        but the majority have suffered alteration in some form.
                    </p>
                </div>

                <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {cardData.map(card => (
                        <div key={card.id} className="p-4 bg-white rounded-lg border border-gray-600/10">
                            <img src={card.image} alt="property" />
                            <div className="p-6">
                                <h4 className="text-2xl font-bold cursor-pointer">{card.title}</h4>
                                <div className="mt-2">
                                    <span className="text-xl font-extrabold text-blue-600">{card.price}</span> /M
                                </div>
                            </div>
                            <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
                                <div className="flex items-center">
                                    <BedIcon />
                                    <p><span className="font-bold text-gray-900">{card.bedrooms}</span> Bedrooms</p>
                                </div>
                                <div className="flex items-center">
                                    <BathtubIcon />
                                    <p><span className="font-bold text-gray-900">{card.bathrooms}</span> Bathrooms</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Properties;