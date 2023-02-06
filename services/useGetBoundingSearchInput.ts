
  export function useGetBounding(referencia) {

    if (!referencia) return;

    const posicion = referencia.getBoundingClientRect();

    return posicion;
    
  }