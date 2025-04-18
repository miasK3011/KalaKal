const pontos = [
    {
        sede: 'Bom Jesus',
        nome: 'Hosp. Reg. Manoel de Sousa Santos',
        endereco: 'Av. Raimundo Santos',
        address:
            'https://www.google.com/maps/place/Hospital+Regional+Manoel+de+Sousa+Santos/@-9.0686505,-44.3635939,17z/data=!4m8!1m2!2m1!1sHosp.+Reg.+Manoel+de+Sousa+Santos!3m4!1s0x77c4da824fbc40b:0x8e5042eb63ff3bd6!8m2!3d-9.0687727!4d-44.3609705',
        latitude: -9.0686505,
        longitude: -44.3635939,
        telefone: '(89) 3562-1192/1404',
        cnes: '2364816',
        tipo: [
            {
                cuidado: 'Referência Secundária',
            },
        ],
    },
    {
        sede: 'Campo Maior',

        nome: 'Hosp. Reg. de Campo Maior',
        endereco: 'Av. do Contorno, S/N- Bairro: São Luís',
        address:
            'https://www.google.com/maps/place/Hosp.+Reg.+De+Campo+Maior/@-4.8371558,-42.1790504,16z/data=!4m8!1m2!2m1!1sHosp.+Reg.+de+Campo+Maior!3m4!1s0x7918ddde0ba2f93:0x8630ab5bac861908!8m2!3d-4.83685!4d-42.168967',
        latitude: -4.8371558,
        longitude: -42.1790504,
        telefone: '(86) 3252-1372/4546 (FAX)',
        cnes: '2777754',
        tipo: [
            {
                cuidado: 'Referência Secundária',
            },
        ],
    },
    {
        sede: 'Floriano',

        nome: 'Hosp. Local Tibério Nunes',
        endereco: 'Praça Idelfonso Ramos, S/N',
        address:
            'https://www.google.com/maps/place/Hospital+Regional+Tib%C3%A9rio+Nunes/@-6.7716425,-43.0309697,17z/data=!3m1!4b1!4m5!3m4!1s0x7837d2a44be018f:0xed1e52c903521633!8m2!3d-6.7716478!4d-43.028781',
        latitude: -6.7716425,
        longitude: -43.0309697,
        telefone: '(89) 3522-1323/ 1489/ 1333',
        cnes: '2365146',
        tipo: [
            {
                cuidado: 'Referência Secundária',
            },
        ],
    },
    {
        sede: 'Oeiras',

        nome: 'Hosp. Reg. Deolindo Couto',
        endereco: 'Av. Rui Barbosa, 586, CEP: 64500-000',
        address:
            'https://www.google.com/maps/place/Hosp.+Regional+Deolindo+Couto/@-7.0150734,-42.1282108,17z/data=!3m1!4b1!4m5!3m4!1s0x79c917be82ece8f:0xcda3091fdc12b6f0!8m2!3d-7.0150787!4d-42.1260221',
        latitude: -7.0150734,
        longitude: -42.1282108,
        telefone: '(89) 3462-1714/ 1213/3969',
        cnes: '2777762',
        tipo: [
            {
                cuidado: 'Referência Secundária',
            },
        ],
    },
    {
        sede: 'Parnaíba',

        nome: 'Hosp. Est. Dirceu Arcoverde',
        endereco: 'Rua Rodrigues Coimbra, 1650- Rodoviária',
        address:
            'https://www.google.com/maps/place/Hospital+Estadual+Dirceu+Arcoverde+(HEDA)/@-2.9190903,-41.7136787,12.2z/data=!4m8!1m2!2m1!1sHosp.+Est.+Dirceu+Arcoverde!3m4!1s0x0:0xaa52689d5c978345!8m2!3d-2.9280831!4d-41.7488408',
        latitude: -2.9190903,
        longitude: -41.7136787,
        telefone: '(86) 3323-7188/ 7226',
        cnes: '8015899',
        tipo: [
            {
                cuidado: 'Referência Secundária',
            },
        ],
    },
    {
        sede: 'Picos',

        nome: 'Hosp. Reg. Justino Luz',
        endereco:
            'Praça Antenor Neiva, 184- Bairro Bomba, CEP: 64600-000 Praça Antenor Neiva, 184- Bairro Bomba, CEP: 64600-000',
        address:
            'https://www.google.com/maps/place/Hosp.+Reg.+Justino+Luz/@-7.0737756,-41.4672913,19.31z/data=!4m8!1m2!2m1!1sHosp.+Reg.+Justino+Luz!3m4!1s0x0:0xb73f45fe0b8b837!8m2!3d-7.0744532!4d-41.4669178',
        latitude: -7.0737756,
        longitude: -41.4672913,
        telefone: '(89) 3422-1314',
        cnes: '4009622',
        tipo: [
            {
                cuidado: 'Referência Secundária',
            },
        ],
    },
    {
        sede: 'Piripiri',

        nome: 'Hosp. Reg. Chagas Rodrigues',
        endereco: 'Av. Dr. Pádua Oliveira',
        address:
            'https://www.google.com/maps/place/Hosp.+Reg.+Chagas+Rodrigues/@-4.2689996,-41.7767227,17z/data=!4m12!1m6!3m5!1s0x793071ae29e5bcf:0xb8d4ba398efe5b5d!2sHosp.+Reg.+Chagas+Rodrigues!8m2!3d-4.269005!4d-41.774534!3m4!1s0x793071ae29e5bcf:0xb8d4ba398efe5b5d!8m2!3d-4.269005!4d-41.774534',
        latitude: -4.2689996,
        longitude: -41.7767227,
        telefone: '(86) 3276-3362/ 1325',
        cnes: '2777746',
        tipo: [
            {
                cuidado: 'Referência Secundária',
            },
        ],
    },
    {
        sede: 'São Raimundo Nonato',

        nome: 'Hosp. Reg. Sen. João Candido Ferraz',
        endereco: 'Praça Cel. Nilton R. Macedo',
        address:
            'https://www.google.com/maps/place/Hospital+Regional+Senador+Jos%C3%A9+C%C3%A2ndido+Ferraz/@-9.0164775,-42.6974766,18.62z/data=!4m8!1m2!2m1!1shospital+perto+de+S%C3%A3o+Raimundo+Nonato,+PI!3m4!1s0x0:0x3377443c31b966fb!8m2!3d-9.016362!4d-42.6967335',
        latitude: -9.0164775,
        longitude: -42.6974766,
        telefone: '(89) 3582-3663',
        cnes: '2777649',
        tipo: [
            {
                cuidado: 'Referência Secundária',
            },
        ],
    },
    {
        sede: 'Teresina',

        nome: 'Inst. de Doenças Tropicais Natan Portela',
        endereco:
            'Rua Governador Raimundo Artur de Vasconcelos, 151, Centro(Sul), CEP: 64002-510',
        address:
            'https://www.google.com/maps/place/Instituto+De+Doen%C3%A7as+Tropicais+Natan+Portela/@-5.0881867,-42.8056137,17z/data=!3m1!4b1!4m5!3m4!1s0x78e39df1aed0b19:0x30ddba12ce5af484!8m2!3d-5.088192!4d-42.803425',
        latitude: -5.0881867,
        longitude: -42.8056137,
        telefone: '(86) 3221-2424',
        cnes: '2323338',
        tipo: [
            {
                cuidado: 'Referência Secundária',
            },
            {
                cuidado: 'Referência Terciária',
            },
        ],
    },
    {
        sede: 'Teresina',

        nome: 'Hospital Infantil Lucidio Portela',
        endereco:
            'Rua Governador Raimundo Artur de Vasconcelos, 220 - Centro (Sul), Teresina - PI, 64001-450',
        address:
            'https://www.google.com.br/maps/place/Hospital+Infantil+Lucidio+Portela+(Hilp)/@-5.0892584,-42.8056687,17z/data=!4m5!3m4!1s0x78e37bb8f29c903:0xe2650396089859!8m2!3d-5.0892637!4d-42.80348?hl=pt-BR&authuser=0',
        latitude: -5.0892584,
        longitude: -42.8056687,
        telefone: '(86) 3226-1811',
        cnes: '00',
        tipo: [
            {
                cuidado: 'Referência Secundária',
            },
            {
                cuidado: 'Referência Terciária',
            },
        ],
    },
    {
        sede: 'Teresina',

        nome: 'Maternidade Dona Evangelina Rosa',
        endereco:
            'Av. Higino Cunha, 1552 - Cristo Rei, Teresina - PI, 64014-535',
        address:
            'https://www.google.com.br/maps/place/Maternidade+Dona+Evangelina+Rosa/@-5.0959127,-42.7903784,17z/data=!3m1!4b1!4m5!3m4!1s0x78e30ac82d37ac7:0x1c81a265b24ae164!8m2!3d-5.095918!4d-42.7881897?hl=pt-BR&authuser=0',
        latitude: -5.0959127,
        longitude: -42.7903784,
        telefone: '(86) 3228-1053',
        cnes: '0',
        tipo: [
            {
                cuidado: 'Referência Secundária',
            },
            {
                cuidado: 'Referência Terciária',
            },
        ],
    },
    {
        sede: 'Uruçui',

        nome: 'Hosp. Reg. Sen. Dirceu Arcoverde',
        endereco: 'Av. José Cavalcante, S/N',
        address:
            'https://www.google.com/maps/place/HOSP+REG+SEN+DIRCEU+ARCOVERDE/@-7.2372652,-44.5569435,17z/data=!4m12!1m6!3m5!1s0x7804560c2e6a5f1:0x41303b0f5d5981c8!2sHOSP+REG+SEN+DIRCEU+ARCOVERDE!8m2!3d-7.2372705!4d-44.5547548!3m4!1s0x7804560c2e6a5f1:0x41303b0f5d5981c8!8m2!3d-7.2372705!4d-44.5547548',
        latitude: -7.2372652,
        longitude: -44.5569435,
        telefone: '(89) 3544-2223/1405',
        cnes: '2323680',
        tipo: [
            {
                cuidado: 'Referência Secundária',
            },
        ],
    },
    {
        sede: 'Valença',

        nome: 'Hosp. Reg. Eustaqui Portela',
        endereco: 'Av. Santos Dumont, S/N, CEP: 64760-000',
        address:
            'https://www.google.com/maps/place/Hospital+Regional+Eust%C3%A1quio+Portela/@-6.4024201,-41.735087,16.98z/data=!4m8!1m2!2m1!1sHosp.+Reg.+Eustaqui+Portela!3m4!1s0x0:0xc6d60becf7a9266f!8m2!3d-6.4004947!4d-41.737432',
        latitude: -6.4024201,
        longitude: -41.735087,
        telefone: '(89) 3465-2804',
        cnes: '2777789',
        tipo: [
            {
                cuidado: 'Referência Secundária',
            },
        ],
    },
];

export default pontos;