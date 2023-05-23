import data from '../src/data/rickandmorty/rickandmorty.js';
import { filtrar1, filtrar2, isalfabeto, filtrarorigen, episodiosTotal} from '../src/data.js';



describe('filtar1', () => {
  it('is a function', () => {
    expect(typeof filtrar1).toBe('function');
  });


  it('retorna un array vacio cuando el texto no se encuentra', () => {
    const resultado = filtrar1("Paola")
    expect(resultado.length).toBe(0)
  })

  it('filtrar por Bepisian', () => {
    const bepisian = filtrar1("bepisian")
    expect(bepisian.length).toBe(1)
  })
});

describe('filtar2', () => {
  it('is a function', () => {
    expect(typeof filtrar1).toBe('function');
  });


  it('retorna un array vacio cuando el texto no se encuentra', () => {
    const resultado = filtrar2("Paola")
    expect(resultado.length).toBe(0)
  })

  it('filtrar por Bepisian', () => {
    const bepisian = filtrar2("bepisian")
    expect(bepisian.length).toBe(1)
  })
});


describe('isalfabeto', () => {
  it('is a function', () => {
    expect(typeof isalfabeto).toBe('function');
  });

  it('Se espera que retorne un array', () => {
    /*const resultado = isalfabeto("ascendente")*/
    expect(typeof isalfabeto(data)).toBe('array');
  });
});

describe('filtrarorigen', () => {
  it('is a function', () => {
    expect(typeof filtrarorigen).toBe('function');
  });
});

describe('episodiosTotal', () => {
  it('is a function', () => {
    expect(typeof episodiosTotal).toBe('object');
  });
});