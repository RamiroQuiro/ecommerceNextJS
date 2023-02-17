
  export function useGetBounding(referencia:any) {

    if (!referencia) return;

    const posicion = referencia.getBoundingClientRect();

    return posicion;
    
  }