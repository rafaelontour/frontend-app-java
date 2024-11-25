import { Lista } from "@/core/lista";

const getListas = async (): Promise<Lista[] | undefined> => {
  const url: string = "http://localhost:8080/lists";

  try {
    const resposta = await fetch(url, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!resposta) {
      throw new Error("Erro ao buscar listas.");
    }

    const dados = await resposta.json();

    return dados ? dados : undefined;
  } catch (error) {
    console.log("Erro: ", error);
  }
};

export { getListas };
