export const biases_ru = {
    cognitiveBias: "Когнитивных искажений",
    cognitiveBiases: {
        categories: [
            {id: "memory", name: "Память"},
            {id: "social", name: "Социум"},
            {id: "learning", name: "Обучение"},
            {id: "belief", name: "Убеждения"},
            {id: "money", name: "Деньги"},
            {id: "politics", name: "Политика"},
        ],
        biases: [
            {
                categories: ["belief", "social"],
                name: "Фундаментальная Ошибка Атрибуции",
                description: "Мы судим о других по их личности или фундаментальному характеру, но мы судим о себе по ситуации.",
                example: "Иван опаздывает в класс - он ленивый. Вы опоздали на занятия - это было плохое утро."
            },
            {
                categories: ["money", "belief", "social"],
                name: "Cвоекорыстное Aтрибутивное Искажение",
                description: "Наши неудачи ситуативны, но ответственность за успехи лежит на нас.",
                example: "Вы получили эту награду благодаря упорному труду, а не помощи или удаче. Тем не менее, вы провалили тест, потому что не выспались."
            },
            {
                categories: ["social", "belief", "politics"],
                name: "Груповое предпочтение",
                description: "Мы предпочитаем людей, которые находятся в нашей группе, а не вне её.",
                example: "Иван из вашего класса нарвится вам больше чем Игорь из другого."
            },
            {
                categories: ["social", "memory", "belief", "politics"],
                name: "Гипотеза справедливого мира",
                description: "Мы склонны верить, что мир справедлив, поэтому считаем акты несправедливости заслуженными.",
                example: "Максим разбил машину. Нечего было смеяться над мотоциклом Ивана!"
            },
            {
                categories: ["social", "memory", "belief", "politics"],
                name: "Наивный цинизм",
                description: "Мы верим в свою способность быть объективными и преувеличиваем эгоцентрические мотивы других дю как другие люди склонны вести себя эгоцентричнее реальность, а другие люди иррациональны, неосведомлены или предвзяты.",
                example: "Я-то вижу реальную картину, чего не скажешь об Иване, Максиме и Анне."
            },
            {
                categories: ["memory", "belief"],
                name: "Эффект Форера (он же - Барнума)",
                description: "Мы с легкостью характеризуем себя расплывчатыми утверждениями, которые применимы к большой группе людей.",
                example: "Этот гороскоп так точно описывает меня!"
            },
            {
                categories: ["memory", "social","learning", "belief", "money", "politics"],
                name: "Эффект Даннинга-Крюгера",
                description: "Чем меньше вы знаете, тем более вы уверены в себе, и наоборот.",
                example: "Анна уверенно заявляет, что в мороженом не могут быть водоросли. Ведь это же молочная промышленность!"
            },
            {
                categories: ["memory", "learning", "belief", "money"],
                name: "Якорение",
                description: "При принятии решения мы в большей степени полагаемся на первую доступную информацию.",
                example: "Скидка 50%! Какая отличная сделка!"
            },
            {
                categories: ["memory", "learning", "belief", "money"],
                name: "Якорение",
                description: "При принятии решения мы в большей степени полагаемся на первую доступную информацию.",
                example: "Скидка 50%? Отличная сделка!"
            },
            {
                categories: ["memory", "learning", "belief"],
                name: "Предвзятость к автоматизации",
                description: "Порой мы слишком полагаемся на автоматизированные системы в оценке правильности принятия решений.",
                example: "Телефон правит "также" на "так же", значит, это правильно."
            },
            {
                categories: ["memory", "learning", "belief"],
                name: "Эффект Google (или Цифровая амнезия)",
                description: "Мы склонны забывать информацию, которую легко найти в поисковых системах.",
                example: "Как же звали главного актёра в том забавном фильме? Я смотрел его раз восемь, наверное."
            },
            {
                categories: ["memory", "learning", "belief"],
                name: "Эффект Google (или Цифровая амнезия)",
                description: "Мы склонны забывать информацию, которую легко найти в поисковых системах.",
                example: "Как же звали главного актёра в том забавном фильме? Я смотрел его раз восемь, наверное."
            },
            {
                categories: ["social", "belief", "politics"],
                name: "Реактивное сопротивление",
                description: "Мы делаем противоположное тому, что нам говорят, особенно когда видим угрозу личным свободам.",
                example: "Один из учеников Алисы отказывается делать домашнее задание, хотя и она, и его родители постоянно ему говорят об этом."
            }, 
            {
                categories: ["memory", "learning", "belief", "politics"],
                name: "Тенденциозность",
                description: "Мы склонны находить и запоминать ту информацию, которая подтверждает наши представления.",
                example: "Если проанализировать последние новости, то теория заговора – это не вымысел."
            },
            {
                categories: ["memory", "learning", "belief", "politics"],
                name: "Эффект обратного огня",
                description: "Опровержение наших доказательств иногда имеет противоположный эффект – подтверждает наши убеждения.",
                example: "Доказательства, опровергающие теорию заговора, сфальсифицированы правительством."
            }, 
            {
                categories: ["memory", "social","learning", "belief", "politics"],
                name: "Эффект третьего лица",
                description: "Мы считаем, что другие больше подвержены влиянию средств массовой информации, чем мы сами.",
                example: "Вам явно промыли мозги СМИ!"
            },
        ]
    }
};
