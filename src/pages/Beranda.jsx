import React, { useEffect, useState } from "react";
import Sweeper from "../components/Beranda/Sweeper";
import SedangPopuler from "../components/Beranda/SedangPopuler";
import PrivateTrip from "../components/Beranda/PrivateTrip";
import KotaPopuler from "../components/Beranda/KotaPopuler";
import Footer from "../components/Footer";
import Blog_2 from "../components/Blog.jsx/Blog_2";
import KataMereka from "../components/Beranda/KataMereka";

const Beranda = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (
        <>
            <div className="justify-center h-screen mt-28">
                <Sweeper />
                <SedangPopuler />
                <PrivateTrip />
                <KotaPopuler />
                <KataMereka />
                <Blog_2 />

                <Footer />
            </div>
        </>
    );
};

export default Beranda;
