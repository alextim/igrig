## Главная страница

Папка: `[CONTENT_DIR]/pages/home`

Файлы: `home.en.md`, `home.uk.md` и `home.ru.md`

На этой странице фоновое изображение перегружается в зависимости от разрешения экрана.

Пример содержимого файла.

```yaml
---
title: Inna Grygorashchenko
headline: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
metaTitle: 
metaDescription: 
template: home
sections:
  - items:
      - image:
          # mobile
          sm: ./images/hero-mobile.jpg
          alt: alt text 1
      - image:
          # tablet
          sm: ./images/hero-tablet.jpg
          alt: alt text 2
      - image:
          # desktop
          sm: ./images/hero-desktop.jpg
          alt: alt text 3
---
```

| Имя файла        | Соотношение Ш : В | Размер, px  
|---               |  ---:             |   ---:
| hero-mobile.jpg  | 9 : 16            |  480 x  853
| hero-tablet.jpg  | 4 : 3             | 1024 x  768
| hero-desktop.jpg | 16 : 9            | 1920 x 1080


## Cтраница "Отчеты о путешествиях"

Папка: `[CONTENT_DIR]/blog/pages/blog`

Файлы: `blog.en.md`, `blog.uk.md` и `blog.ru.md`


Поле **cover** из Frontmatter не выводится.

На странице отображается постраничный список всех постов из папки `[CONTENT_DIR]/blog/posts`.

Список постов сортируется по дате публикации: поле `datePublished` из Frontmatter.

Количество постов на одной странице задается константой `CARDS_PER_PAGE` в конфигурации сайта. По умолчанию - 6.

В зависимости от разрешения экрана посты выводятся в одну, две или три колонки.

## Cтраница "Список тегов"

Папка: `[CONTENT_DIR]/blog/pages/tag-list`

Файлы: `tag-list.en.md`, `tag-list.uk.md` и `tag-list.ru.md`

На странице выводится сгруппированный список всех тегов, найденных в постах, и количество постов по каждому тегу. Кликнувши на тег можно перейти на страницу "Путешествия с тегом:".


## Cтраница "Путешествия с тегом: ????"

Папка: `[CONTENT_DIR]/blog/pages/tags`

Файлы: `tags.en.md`, `tags.uk.md` и `tags.ru.md`

Устройство налогично странице "Блог".

На странице отображается результы выборки всех всех постов из папки `[CONTENT_DIR]/blog/posts`, отфильтрованных по одному тегу.

!> Если теги разных языков не совпадают, то при смене языка переход осуществляется на Главную страницу выбранного языка.

## Cтраница "Фотопроекты"

Папка: `[CONTENT_DIR]/photo-projects/pages/photo-projects`

Файлы: `photo-projects.en.md`, `photo-projects.uk.md` и `photo-projects.ru.md`

Устройство налогично странице "Блог".

На странице отображается постраничный список всех постов из папки `[CONTENT_DIR]/photo-projects/posts`.

## Cтраница "Фотоcерии"

Папка: `[CONTENT_DIR]/photo-series/pages/photo-series`

Файлы: `photo-series.en.md`, `photo-series.uk.md` и `photo-series.ru.md`

Устройство налогично странице "Блог".

На странице отображается постраничный список всех постов из папки `[CONTENT_DIR]/photo-series/posts`.

## Cтраница "Обо мне / Контакты"

Папка: `[CONTENT_DIR]/pages/contacts`

Файлы: `contacts.en.md`, `contacts.uk.md` и `contacts.ru.md`

Данные для страницы "Контакты" хранятся во вспомогательных файлах:

- `contacts.yaml`
- `address.{locale}.yaml`

## Cтраница "404"

Папка: `[CONTENT_DIR]/pages/404`

Файлы: `404.en.md`, `404.uk.md` и `404.ru.md`

Поле **cover** из Frontmatter не выводится.

Поле **noindex** игнорируется и всегда `true`.

:warning: Для русскоязычных ненайденных страниц задан редирект:

|   Откуда     | Куда       | Статус
|---           |---         |---
| /ru/*        |  /ru/404   | 404
| /uk/*        |  /uk/404   | 404

*Файл с редиректами: `[PROJECT_DIR]/static/_redirects`*
