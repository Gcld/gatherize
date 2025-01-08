interface CepData {
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    regiao: string;
    ibge?: string;
    gia?: string;
    ddd?: string;
    siafi?: string;
    erro?: boolean;
}

export async function fetchCepData(cep: string): Promise<CepData | null> {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
            throw new Error('Failed to fetch CEP data');
        }
        const data: CepData = await response.json();
        if (data.erro || !data.cep) {
            return null;
        }
        return {
            cep: data.cep,
            logradouro: data.logradouro || '',
            complemento: data.complemento || '',
            unidade: data.unidade || '',
            bairro: data.bairro || '',
            localidade: data.localidade || '',
            uf: data.uf || '',
            estado: data.estado || '',
            regiao: data.regiao || '',
            ibge: data.ibge,
            gia: data.gia,
            ddd: data.ddd,
            siafi: data.siafi
        };
    } catch (error) {
        console.error('Error fetching CEP data:', error);
        return null;
    }
}