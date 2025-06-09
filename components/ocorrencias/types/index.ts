export interface Ocorrencia {
    id: number
    identificador: string
    tipo_caso: 'humano' | 'animal'
    tipo_display: string
    data_nascimento: string
    sexo: string
    gestante: boolean
    data_notificacao: string
    latitude: any
    longitude: any
    municipio: string
    created_at: string
    updated_at: string
    faixa_etaria_kalacal: number
    faixa_etaria_kalacal_display: string
    sitios_sangramento: number
    sitios_sangramento_display: string
    edema: boolean
    aids: boolean
    ictericia: boolean
    dispneia: boolean
    infeccao: boolean
    vomitos: boolean
    leucopenia: boolean
    plaquetopenia: boolean
    insuficiencia_renal: boolean
    hepatite: boolean
    kalacal_habilitado: boolean
    is_crianca_kalacal: boolean
    is_adulto_kalacal: boolean
    faixa_etaria_automatica: FaixaEtariaAutomatica
}

export interface FaixaEtariaAutomatica {
    value: number
    label: string
}

export interface OcorrenciaForm {
    identificador: string
    tipo_caso: string
    sexo: string
    gestante: boolean
    data_nascimento: string
    data_notificacao: string
    municipio: string
    latitude: number
    longitude: number
    faixa_etaria_kalacal: number
    sitios_sangramento: number
    edema: boolean
    aids: boolean
    kalacal_habilitado: boolean
  }

export type SexoOption = "masculino" | "feminino" | "Outro";
export type GestanteOption = true | false;
