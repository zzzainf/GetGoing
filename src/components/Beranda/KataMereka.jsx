import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import image_1 from "../../assets/Servis Kami/1711270623swiper-photo-1.png";
import image_2 from "../../assets/Servis Kami/1711339750IMG_2218.JPG";
import image_3 from "../../assets/Servis Kami/171134041220240103_115420-min.jpg";
import image_4 from "../../assets/Servis Kami/1711346982IMG_5234_(1).jpg";
import image_5 from "../../assets/Servis Kami/1711340541IMG-20231028-WA0016.jpg";

export default function Liburan() {
    const descriptionSwiperRef = useRef(null);
    const imageSwiperRef = useRef(null);

    const data = [
        {
            image: image_2,
            title: "Keluar Negeri Pertama Kali Tanpa Rasa Khawatir",
            description:
                "GetGoing bikin liburan keluar negri tanpa rasa khawatir dan benar-benar kerasa kaya cuma punya kami berdua. Apalagi ada aplikasinya juga yang bisa dipakai untuk mengeksplorasi kota dengan informasinya yang cukup lengkap. Bintang 5 pokoknya.",
        },
        {
            image: image_1,
            title: "Liburan seperti yang aku mau",
            description:
                "Best banget segalanya mau aku recokin kapanpun (bahkan tengah malampun ready hahaha). Bener-bener seperti yang ku mau, yakni sistem 'partner trip' bukan 'jasa tour'. Temen-temen yang dikirim buat menemani juga baik dan sabar. Thank you banyak, sampai ketemu di negara lain!",
        },
        {
            image: image_5,
            title: "Liburan keluarga yang sangat berkesan",
            description:
                "Sekali lagi, terima kasih kepada Tim GetGoing yang SUPER KEREN! Semua pelayanan cepat, ide-ide yang luar biasa, hotel nyaman, dan lainnya. Ini adalah liburan keluarga yang sangat berkesan, bucket list impian ke Swiss terwujud. Terima kasih, Tim GetGoing!",
        },
        {
            image: image_4,
            title: "Liburan mengesankan di hari anniversary",
            description:
                "Liburan penuh cerita dan pengalaman luar biasa. Kejutan Black Forest di Freiburg untuk anniversary kami! Terima kasih untuk servis luar biasa Tim GetGoing, dari persiapan hingga setelah liburan. Semoga Tim GetGoing semakin sukses.",
        },
        {
            image: image_3,
            title: "Perpaduan servis dan kemauan liburan",
            description:
                "Keputusan menggunakan GetGoing sangat tepat karena mereka bisa memadukan servis sesuai kemauan dan preferensi kami. Mereka selalu siap konsultasi 2 arah dengan kita! Sangat cocok buat kalian yang mau liburan tanpa ribet.",
        },
    ];

    const syncSwipers = (swiper) => {
        if (descriptionSwiperRef.current && imageSwiperRef.current) {
            descriptionSwiperRef.current.slideTo(swiper.activeIndex);
            imageSwiperRef.current.slideTo(swiper.activeIndex);
        }
    };

    return (
        <div className="container mx-auto flex gap-20 font-poppins justify-center mt-[200px] px-[100px]">
            <div className="w-[519px] p-6" id="kata_mereka">
                <Swiper
                    modules={[Pagination, Navigation]}
                    onSwiper={(swiper) =>
                        (descriptionSwiperRef.current = swiper)
                    }
                    onSlideChange={(swiper) => syncSwipers(swiper)}
                    slidesPerView={1}
                    centeredSlides={true}
                    pagination={{ type: "fraction" }}
                    navigation={{
                        nextEl: "#swiper-button-next",
                        prevEl: "#swiper-button-prev",
                    }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex justify-center gap-10 mb-4 items-start">
                <button id="swiper-button-prev" className="text-lg font-bold">
                    <BsArrowLeftCircle className="text-4xl text-slate-600 hover:text-red-600" />
                </button>
                <button id="swiper-button-next" className="text-lg font-bold">
                    <BsArrowRightCircle className="text-4xl text-slate-600 hover:text-red-600" />
                </button>
            </div>

            <div className="w-[519px] py-5">
                <Swiper
                    modules={[Pagination, Navigation]}
                    onSwiper={(swiper) => (imageSwiperRef.current = swiper)}
                    onSlideChange={(swiper) => syncSwipers(swiper)}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={20} 
                    pagination={{ type: "fraction" }}
                    navigation={{
                        nextEl: "#swiper-button-next",
                        prevEl: "#swiper-button-prev",
                    }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-[188px] h-[349px] relative overflow-hidden rounded-2xl">
                                <img
                                    className="w-full h-full object-cover"
                                    src={item.image}
                                    alt="Liburan"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/40"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

// import React, { useState } from "react";

// export default function Component() {
//     const [activeIndex, setActiveIndex] = useState(1);

//     const items = [
//         {
//             image: "/placeholder.svg?height=400&width=300",
//             name: "Herlika",
//             role: "ENTREPRENEUR",
//         },
//         {
//             image: "/placeholder.svg?height=400&width=300",
//             name: "Hilda",
//             role: "ENTREPRENEUR",
//         },
//         {
//             image: "/placeholder.svg?height=400&width=300",
//             name: "Kiky",
//             role: "ENTREPRENEUR",
//         },
//     ];

//     const nextSlide = () => {
//         setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
//     };

//     const prevSlide = () => {
//         setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
//     };

//     return (
//         <div className="relative w-full max-w-4xl mx-auto h-[500px] overflow-hidden">
//             <div className="absolute inset-0 flex items-center justify-center">
//                 {items.map((item, index) => {
//                     let position = index - activeIndex;

//                     return (
//                         <div
//                             key={index}
//                             className={`absolute w-[280px] bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out
//                 ${
//                     position === 0
//                         ? "z-20 opacity-100 scale-100 translate-y-0 rotate-0"
//                         : position === -1
//                         ? "z-10 opacity-70 scale-95 -translate-x-32 -rotate-12"
//                         : position === 1
//                         ? "z-10 opacity-70 scale-95 translate-x-32 rotate-12"
//                         : "opacity-0 scale-90"
//                 }
//               `}
//                         >
// <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
//     <img
//         src={item.image}
//         alt={item.name}
//         className="object-cover w-full h-full"
//     />
//     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
//         <h3 className="text-xl font-bold text-white mb-1">
//             {item.name}
//         </h3>
//         <p className="text-sm text-gray-200">
//             {item.role}
//         </p>
//     </div>
// </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// import React, { useRef, useState } from "react";
// import { Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

// export default function CarouselCards() {
//     const [activeIndex, setActiveIndex] = useState(1);
//     const items = [
//         {
//             image: "/placeholder.svg?height=400&width=300",
//             name: "Herlika",
//             role: "ENTREPRENEUR",
//         },
//         {
//             image: "/placeholder.svg?height=400&width=300",
//             name: "Hilda",
//             role: "ENTREPRENEUR",
//         },
//         {
//             image: "/placeholder.svg?height=400&width=300",
//             name: "Kiky",
//             role: "ENTREPRENEUR",
//         },
//     ];

//     const nextSlide = () => {
//         setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
//     };

//     const prevSlide = () => {
//         setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
//     };

//     return (
//         <div className="relative w-full max-w-4xl mx-auto h-[500px] overflow-hidden">
//             <div className="absolute inset-0 flex items-center justify-center">
//                 {items.map((item, index) => {
//                     let position = index - activeIndex;

//                     return (
//                         <div
//                             key={index}
//                             className={`absolute w-[280px] bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out
//                             ${
//                                 position === 0
//                                     ? "z-20 opacity-100 scale-100 translate-y-0 rotate-0"
//                                     : position === -1
//                                     ? "z-10 opacity-70 scale-95 -translate-x-32 -rotate-12"
//                                     : position === 1
//                                     ? "z-10 opacity-70 scale-95 translate-x-32 rotate-12"
//                                     : "opacity-0 scale-90"
//                             }
//                           `}
//                         >
//                             <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
//                                 <img
//                                     src={item.image}
//                                     alt={item.name}
//                                     className="object-cover w-full h-full"
//                                 />
//                                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center">
//                                     <h3 className="text-xl font-bold text-white mb-1">
//                                         {item.name}
//                                     </h3>
//                                     <p className="text-sm text-gray-200">
//                                         {item.role}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>

//             <div className="flex justify-center gap-10 mb-4 items-start">
//                 <button
//                     onClick={prevSlide}
//                     className="text-lg font-bold"
//                 >
//                     <BsArrowLeftCircle className="text-4xl text-slate-600 hover:text-red-600" />
//                 </button>
//                 <button
//                     onClick={nextSlide}
//                     className="text-lg font-bold"
//                 >
//                     <BsArrowRightCircle className="text-4xl text-slate-600 hover:text-red-600" />
//                 </button>
//             </div>
//         </div>
//     );
// }