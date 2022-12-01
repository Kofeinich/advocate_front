// "arb" - Арбитраж,
//  "vzs" - взыскание задолженности,


export const texts = {
    main: {
        description: "",
        cards: [
            {
                number: "> 18",
                text: "лет практики",
            },
            {
                number: "> 300",
                text: "решенных дел",
            },
            {
                number: "100 %",
                text: "индивидуальный подход",
            },
        ],
        service: [
            {
                title: "Семейные споры",
                services: [
                    "Расторжение брака",
                    "Взыскание алиментов",
                    "Установление отцовства",
                    "Брачный договор",
                    "Раздел имущества супругов"
                ]
            },
            {
                title: "Раздел имущества",
                services: [
                    "Юридическая консультация",
                    "Оспаривание сделок",
                    "Исковое заявление",
                    "Установление имущественных прав",
                    "Раздел имущества при разводе"
                ]
            },
            {
                title: "Арбитраж",
                services: [
                    "Защита в суде",
                    "Досудебное урегулирование",
                    "Представление интересов в арбитражном суде",
                    "Сопровождение в производстве",
                    "Работа по всем видам договоров",
                ]
            },
            {
                title: "Недвижимость",
                services: [
                    "Продажа недвижимости",
                    "Покупка недвижимости",
                    "Регистрация недвижимости",
                    "Подготовка договоров купли-продажи, аренды, найма",
                    "Сопровождение сделок c недвижимостью",
                ]
            },
            {
                title: "Взыскание долгов",
                services: [
                    "Взыскание задолженности",
                    "Арест имущества",
                    "Составление договоров",
                    "Судебное представительство",
                    "Анализ документов",
                ]
            },
            {
                title: "Наследство",
                services: [
                    "Составление завещания",
                    "Оспаривание действий нотариуса",
                    "Признание завещания недействительным",
                    "Право наследования",
                    "Порядок наследования",
                ]
            },
        ]
    },
    practice: {

        hashTagsList: [
            {
                id: "arb",
                text: "арбитраж",
                isActive: false,
            },
            {
                id: "sem",
                text: "семейные_споры",
                isActive: false,
            },
            {
                id: "nas",
                text: "наследство",
                isActive: false,
            },
            {
                id: "raz",
                text: "раздел_имущества",
                isActive: false,
            },
            {
                id: "ned",
                text: "недвижимость",
                isActive: false,
            },
            {
                id: "vzs",
                text: "взыскание_долгов",
                isActive: false,
            },
            {
                id: "rvd",
                text: "разводы",
                isActive: false,
            },
        ],

        description: "",
        titles: [
            {
                uniqueId : 'VYUIMUDO',
                id: [
                    "arb",
                ],
                description: "Взыскание задолженности по договору поставки",
                title: "Только арбитраж",
            },
            {
                uniqueId : 'YBDUJMLL',
                id: [
                    "vzs",
                ],
                description: "Раздел общего имущества супругов",
                title: "Только Взыскание",
            },
            {
                uniqueId : 'KIMIDLJT',
                id: [
                    "arb",
                    "vzs",
                    "sem"
                ],
                description: "Определение долей супругов в общем имуществе и его разделе",
                title: "И то и то",
            },

        ],
    }
}