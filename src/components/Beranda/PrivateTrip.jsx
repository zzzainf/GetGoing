import React from "react";
import image_1 from "../../assets/Beranda/person-pin-gradient.png";
import image_2 from "../../assets/Beranda/star-gradient.png";
import image_3 from "../../assets/Beranda/support-gradient.png";
import image_4 from "../../assets/Beranda/commute-gradient.png";
import image_5 from "../../assets/Beranda/check-circle.png";
import { useLocation } from "react-router-dom";

const PrivateTrip = () => {
    const location = useLocation();
    const data = [
        {
            image: image_3,
            title: "Konsultasi Gratis",
            description: "Curhatin aja semuanya!",
        },
        {
            image: image_1,
            title: "Local Guide",
            description: "Biar ada teman!",
        },
        {
            image: image_4,
            title: "Transportasi",
            description: "Bebas pilih transportasi apa",
        },
        {
            image: image_2,
            title: " Lengkapi Pokoknya",
            description: "Hotel, Asuransi, Visa, Wifi dll",
        },
    ];

    return (
        <div className="px-4 lg:px-[260px] font-poppins">
            <div>
                <h1 className="font-extrabold text-xl lg:text-3xl text-center">
                    "Better to <span className="text-[#cc0001]">SEE</span>{" "}
                    something once than hear it about it
                    <span className="text-blue-500"> A THOUSAND TIMES</span>"
                </h1>
                <p className="text-center font-extrabold text-lg lg:text-2xl mt-3">
                    -Asian Proverb.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-[76px] gap-10 lg:gap-20">
                <div className="text-center lg:text-left">
                    <p className="text-red-600 text-2xl lg:text-4xl">PRIVATE TRIP</p>
                    <p className="font-extrabold text-2xl lg:text-4xl mt-4">
                        BERANGKAT
                        <span className="text-[#cc0001]"> Kapan Saja</span>
                        <p className="mt-3">Semaumu</p>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-8 text-slate-500 ">
                        <div className="flex">
                            <img className="w-5 h-5 mr-3 mt-4" src={image_5} alt="" />
                            <p>
                                Tentukan tanggal <br /> keberangkatan <br /> sesukamu
                            </p>
                        </div>
                        <div className="flex">
                            <img className="w-5 h-5 mr-3 mt-4" src={image_5} alt="" />
                            <p>
                                Tidak ada kuota <br /> minimum,jadi pasti <br /> berangkat
                            </p>
                        </div>
                        <div className="flex">
                            <img className="w-5 h-5 mr-3 mt-4" src={image_5} alt="" />
                            <p>
                                Fleksibel,bebas <br /> tetukan destinasi dan <br /> aktivitas
                                perjalanan
                            </p>
                        </div>
                        <div className="flex">
                            <img className="w-5 h-5 mr-3 mt-4" src={image_5} alt="" />
                            <p>
                                Liburan jadi lebih <br /> exclusive untuk kamu <br /> dan keluarga
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-full lg:max-w-screen-lg h-max p-4 lg:px-[42px] py-[30px] lg:py-[58px] rounded-l-[45px] w-full lg:w-[630px]"
                    style={{
                        background: "linear-gradient(to left, #ff9e23, #ff8262, #f02424, #d10809)",
                    }}
                >
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-full h-[156px] rounded-xl shadow-md"
                        >
                            <div className="absolute inset-0 bg-gray-200 opacity-25 rounded-xl"></div>
                            <div className="relative p-4 lg:p-6">
                                <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] bg-white rounded-xl p-1 lg:p-2">
                                    <img src={item.image} alt="" className="w-full h-full" />
                                </div>
                                <p className="font-bold text-white mt-2">{item.title}</p>
                                <p className="mt-2 text-xs lg:text-sm text-white">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrivateTrip;
