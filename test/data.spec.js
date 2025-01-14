import data from '../src/data/rickandmorty/rickandmorty';
import { filtrar1, filtrar2, isalfabeto, filtrarorigen, episodiosTotal } from "../src/data.js";

describe("filtar1", () => {
  it("is a function", () => {
    expect(typeof filtrar1).toBe("function");
  });
  it("retorna un array vacio cuando el texto no se encuentra", () => {
    const resultado = filtrar1("Paola");
    expect(resultado.length).toBe(0);
  });
  it("filtrar por Bepisian", () => {
    const bepisian = filtrar1("bepisian");
    expect(bepisian.length).toBe(1);
  });
  it("filtrar por Rick", () => {
    const rick = filtrar1("rick");
    expect(rick.length).toBe(13);
  });
});


describe("filtar2", () => {
  it("is a function", () => {
    expect(typeof filtrar1).toBe("function");
  });
  it("retorna un array vacio cuando el texto no se encuentra", () => {
    const resultado = filtrar2("Paola");
    expect(resultado.length).toBe(0);
  });
  it("filtrar por Bepisian", () => {
    const bepisian = filtrar2("bepisian");
    expect(bepisian.length).toBe(1);
  });
});


describe("isalfabeto", () => {
  it("is a function", () => {
    expect(typeof isalfabeto).toBe("function");
  });
  
  it("Se espera que retorne un objeto", () => {
    expect(typeof isalfabeto()).toEqual("object");
  });
  
  it("Devuelve el primer personaje", () => {
    const letra = "A";
    const data = isalfabeto(letra);
    expect(data[0].name).toBe("Abadango Princess");
  });
});


describe("filtrarorigen", () => {
  
  it("is a function", () => {
    expect(typeof filtrarorigen).toBe("function");
  });
  
  it("Se espera que retorne un array", () => { 
    expect(Array.isArray(filtrarorigen(data, "Abadango"))).toStrictEqual(true);
  });
});


describe("episodiosTotal", () => {
  it("is a function", () => {
    expect(typeof episodiosTotal).toBe("object");
  });
});
