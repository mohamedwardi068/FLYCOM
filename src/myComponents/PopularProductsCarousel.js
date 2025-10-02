import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
    {
        id: 1,
        name: "iPhone 12 Pro Moment Case - Blue",
        price: 149.0,
        image:
            "https://png.pngtree.com/png-clipart/20210309/original/pngtree-vertical-smartphone-with-transparent-wide-display-png-image_5897986.jpg",
        type: "CASES",
        compatibleDevices: ["iPhone 12 Pro"],
        rating: 4,
    },
    {
        id: 2,
        name: "iPhone Leather Wallet Black",
        price: 199.0,
        image: "https://w1.pngwing.com/pngs/8/703/png-transparent-iphone-x-apple-iphone-xs-max-iphone-5s-smartphone-book-scanner-telephone-mobile-phones-mobile-phone-case-mobile-phone-accessories-thumbnail.png",
        type: "WALLET",
        compatibleDevices: ["iPhone 12", "iPhone 13"],
        rating: 5,
    },
    {
        id: 3,
        name: "Everyday Leather Strap – Olive",
        price: 199.0,
        image: "https://w1.pngwing.com/pngs/8/703/png-transparent-iphone-x-apple-iphone-xs-max-iphone-5s-smartphone-book-scanner-telephone-mobile-phones-mobile-phone-case-mobile-phone-accessories-thumbnail.png",
        type: "WATCH BAND",
        compatibleDevices: ["Apple Watch"],
        rating: 4,
    },
    {
        id: 4,
        name: "Case for AirPods – Blue",
        price: 9.99,
        image: "https://w7.pngwing.com/pngs/853/608/png-transparent-airpods.png",
        type: "CASES",
        compatibleDevices: ["AirPods"],
        rating: 3,
    },
    {
        id: 5,
        name: "iPhone 13 Case – Smokey Black",
        price: 169.0,
        image: "https://w7.pngwing.com/pngs/853/608/png-transparent-airpods.png",
        type: "CASES",
        compatibleDevices: ["iPhone 13"],
        rating: 5,
    },
    {
        id: 6,
        name: "Lightning Cable USB-A",
        price: 25.0,
        image: "https://w7.pngwing.com/pngs/853/608/png-transparent-airpods.png",
        type: "ACCESSORIES",
        compatibleDevices: ["iPhone", "iPad"],
        rating: 4,
    },
]

export default function PopularProductsCarousel() {
    const [current, setCurrent] = useState(0)

    const itemsPerSlide = 5
    const totalSlides = Math.ceil(products.length / itemsPerSlide)

    const prevSlide = () => {
        setCurrent(current === 0 ? totalSlides - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === totalSlides - 1 ? 0 : current + 1)
    }

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center bgw">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Most Popular Products
                </h2>
                <p className="text-gray-500 mt-2 text-sm md:text-base">
                    Proponents of content strategy may shun of dummy copy designers
                </p>

                {/* Carousel */}
                <div className="relative mt-10 bg-white">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out bg"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {/* Chunk products into slides */}
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 min-w-full"
                                >
                                    {products
                                        .slice(
                                            slideIndex * itemsPerSlide,
                                            slideIndex * itemsPerSlide + itemsPerSlide
                                        )
                                        .map((product) => (
                                            <div
                                                key={product.id}
                                                className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition"
                                            >
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="h-32 mx-auto object-contain"
                                                    style={{ mixBlendMode: "multiply" }}
                                                />

                                                <h3 className="mt-4 text-sm font-medium text-gray-800">
                                                    {product.name}
                                                </h3>
                                                <p className="text-xs text-gray-500">{product.type}</p>
                                                <p className="mt-2 text-blue-600 font-bold">
                                                    ${product.price.toFixed(2)}
                                                </p>

                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full ${index === current ? "bg-blue-600" : "bg-gray-300"
                                    }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
