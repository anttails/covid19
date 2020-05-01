export class Update {
    data: string;
    data_dados: string;
    confirmados: number;
    confirmados_arsnorte: number;
    confirmados_arscentro: number;
    confirmados_arslvt: number;
    confirmados_arsalentejo: number;
    confirmados_arsalgarve: number;
    confirmados_acores: number;
    confirmados_madeira: number;
    confirmados_estrangeiro: number; // Deprecated
    confirmados_novos: number;
    recuperados: number;
    obitos: number;
    internados: number;
    internados_uci: number;
    lab: number;
    suspeitos: number;
    vigilancia: number;
    n_confirmados: number;
    cadeias_transmissao: number;
    transmissao_importada: number;
    confirmados_0_9_f: number;
    confirmados_0_9_m: number;
    confirmados_10_19_f: number;
    confirmados_10_19_m: number;
    confirmados_20_29_f: number;
    confirmados_20_29_m: number;
    confirmados_30_39_f: number;
    confirmados_30_39_m: number;
    confirmados_40_49_f: number;
    confirmados_40_49_m: number;
    confirmados_50_59_f: number;
    confirmados_50_59_m: number;
    confirmados_60_69_f: number;
    confirmados_60_69_m: number;
    confirmados_70_79_f: number;
    confirmados_70_79_m: number;
    confirmados_80_plus_f: number;
    confirmados_80_plus_m: number;
    sintomas_tosse: number;
    sintomas_febre: number;
    sintomas_dificuldade_respiratoria: number;
    sintomas_cefaleia: number;
    sintomas_dores_musculares: number;
    sintomas_fraqueza_generalizada: number;
    confirmados_f: number;
    confirmados_m: number;
    obitos_arsnorte: number;
    obitos_arscentro: number;
    obitos_arslvt: number;
    obitos_arsalentejo: number;
    obitos_arsalgarve: number;
    obitos_acores: number;
    obitos_madeira: number;
    obitos_estrangeiro: number; // Deprecated
    recuperados_arsnorte: number;
    recuperados_arscentro: number;
    recuperados_arslvt: number;
    recuperados_arsalentejo: number;
    recuperados_arsalgarve: number;
    recuperados_acores: number;
    recuperados_madeira: number;
    recuperados_estrangeiro: number; // Deprecated
    obitos_0_9_f: number;
    obitos_0_9_m: number;
    obitos_10_19_f: number;
    obitos_10_19_m: number;
    obitos_20_29_f: number;
    obitos_20_29_m: number;
    obitos_30_39_f: number;
    obitos_30_39_m: number;
    obitos_40_49_f: number;
    obitos_40_49_m: number;
    obitos_50_59_f: number;
    obitos_50_59_m: number;
    obitos_60_69_f: number;
    obitos_60_69_m: number;
    obitos_70_79_f: number;
    obitos_70_79_m: number;
    obitos_80_plus_f: number;
    obitos_80_plus_m: number;
    obitos_f: number;
    obitos_m: number;
}

export let ARSLIST: string[] = [
    'arsnorte',
    'arscentro',
    'arslvt',
    'arsalentejo',
    'arsalgarve',
    'acores',
    'madeira'
];

export let AGEGROUPLIST: string[] = [
    '0_9',
    '10_19',
    '20_29',
    '30_39',
    '40_49',
    '50_59',
    '60_69',
    '70_79',
    '80_plus'
];

export let SINTOMASLIST: string[] = [
    'tosse',
    'febre',
    'dificuldade_respiratoria',
    'cefaleia',
    'dores_musculares',
    'fraqueza_generalizada'
]