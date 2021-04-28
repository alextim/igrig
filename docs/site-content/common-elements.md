Папка: `[CONTENT_DIR]/data/`

Файл: `contacts.yaml`

## Список полей

|   Поле           | Назначение         |   Organization | LocalBusiness | Описание
|---               |---                 |---             |---            |---
| organizationType | SEO                |                |               | [Organization](https://schema.org/Organization), [LocalBusiness](https://schema.org/LocalBusiness)
| geo              | SEO                | нет            | да            | [географические координаты](https://schema.org/geo)
| hasMap           | SEO                | нет            | да            | [ссылка на Google-карты](https://schema.org/hasMap)
| whatsapp         | страница Котнтакты |                |               |
| telegram         | страница Котнтакты |                |               |
| phone            | SEO                | да             | да            | [телефон](https://schema.org/telephone) список цифровых значений, разделитель элементов `,`
| e-mail           | SEO                | да             | да            | [почта](https://schema.org/email) список, разделитель элементов `,`
| openingHours        | страница "Контакты" и SEO     | да | да | [рабочее время](https://schema.org/openingHours), преобразуется в `OpeningHoursSpecification`
| priceRange          | SEO                           | нет | да | [диапазон цен](https://schema.org/priceRange), валидные значения: `$`, `$$`, `$$$`, `$$$$`
| currenciesAccepted  | SEO                           | нет | да | [валюты, принимаемая к оплате](https://schema.org/currenciesAccepted)
| paymentAccepted     | SEO                           | нет | да | [способы оплаты](https://schema.org/paymentAccepted)
| foundingDate     | футер и SEO        | да             | да            | [дата основания](https://schema.org/foundingDate) в формате ISO 8601

Поля **e-mail** и **phone** участвуют в структурированных данных для **Organization** или **LocalBusiness**. Используется только первый элемент массива.


:bulb: Номер телефона допускает только цифры, без плюса спереди, без пробелов, скобок и прочих символов.

Сокращенный пример содержимого:

```yaml
organizationType: LocalBusiness

phone: [3803161111]

email: [igrig@gmail.com]

foundingDate: 2021-01-01

```

## Поле **openingHours** (Рабочее время)

Формат поля: список элементов, состоящий из следующей структуры: день недели, время начала рабочего дня, время окончания рабочего дня.

День недели - двухбуквенная аббревиатура на английском языке.

Время - в формате 24 часа.

```yaml
openingHours:
  - ["mo", "10:00", "18:00"]
  - ["tu", "10:00", "18:00"]
  - ["we", "10:00", "18:00"]
  - ["th", "10:00", "18:00"]
  - ["fr", "10:00", "18:00"]
```

Рабочее время с понедельника по пятницу с 10:00 до 18:00 можно записать короче

```yaml
openingHours:
  - ["mo-fr", "10:00", "18:00"]
```

Если в какой-то день вы работаете 24 часа в сутки, то укажите время с `00:00` до `23:59`.

Пример оформления для круглосуточной работы в среду:

```yaml
openingHours:
  - ["we", "00:00", "23:59"]
```

Для выходного дня укажите время начала и окончания `00:00`.

Пример оформления для выходного дня в воскресенье:

```yaml
openingHours:
  - ["su", "00:00", "00:00"]
```

Пример оформления для выходного дня в субботу и воскресенье:

```yaml
openingHours:
  - ["sa, su", "00:00", "00:00"]
```
