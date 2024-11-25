"use client"

import { Lista } from "@/core/lista";
import { getListas } from "@/services/lista";
import Image from "next/image";
import { useEffect, useState } from "react";

import style from "@/app/css/style.module.css"

export default function CartaoTipos() {

    const [listas, setListas] = useState<Lista[] | undefined>([])
    const imagens = ["/rpg.jpg", "/plataforma.jpg"];

    useEffect(() => {
        const fetchData = async () => {
            const dados = await getListas()
            console.log("Dados: ", dados)
            setListas(dados)
        }

        fetchData();
    }, [])

    return (

        <div className="flex flex-col items-center justify-center w-[90%] mx-auto rounded-md gap-4">
            {listas?.map((lista) => (
                <span
                    className="
                            flex items-center gap-7
                            bg-green-400 rounded-md
                            w-[90%] overflow-hidden
                            hover:scale-105 transition-all
                        "
                    key={lista.id}>
                    <div className={`w-fit overflow-hidden ${style.corte}`}>
                        <Image src={imagens[lista.id - 1]} alt="Tipos" width={300} height={100} />
                    </div>
                    <span className="text-2xl">{lista.name}</span>
                </span>
            ))}
        </div>
    )
}