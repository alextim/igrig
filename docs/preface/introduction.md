[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)[![Netlify Status](https://api.netlify.com/api/v1/badges/35a6f056-1bb6-46d7-b5b1-09df51b948b6/deploy-status)](https://app.netlify.com/sites/igrig/deploys)


Этот сайт создан по технологии [JAMStack](https://jamstack.org/).

Для хранения данных используются форматы [YAML](https://yaml.org/) и [Markdown](https://daringfireball.net/projects/markdown/).

Исходные файлы сайта создаются, хранятся и редактируются на локальном компьютере.
Изменения данных отслеживаются распределенной системой контроля версий [Git](https://git-scm.com/).

По команде пользователя система контроля версий [Git](https://git-scm.com/) синхронизирует изменения данных на локальном компьютере с облачным репозиторием [GitHub](https://github.com/).

Облачный репозиторий [GitHub](https://github.com/) связан с облачным провайдером [Netlify](https://netlify.com), который подписан на изменения в вашем репозитории.

После каждого изменения провайдер автоматически скачивает обновленные данные из вашего репозитория себе, запускает генератор статических сайтов [Gatsby](https://www.gatsbyjs.com/), компилирует и публикует обновленную версию сайта.

Технология JAMStack в комлексе с бессерверными вычислениями позволяют не разворачивать собственный сервер, избежать затрат на хостинг и обслуживание. Статический сайт безопасен, устойчив к атакам и вирусам, обладает хорошим быстродействием.


## Аббревиатуры

- `[CONTENT_DIR]` - имя папки на локальном компьютере с данными сайта.
- `[PROJECT_DIR]` - имя папки на локальном компьютере с кодом сайта.
- `{locale}` - язык, `en`, `uk` или `ru`.

## Допущения

`[CONTENT_DIR]` и `[PROJECT_DIR]` должны находится в одной родительской папке.

## Поддержка

Создайте <a href="https://github.com/alextim/igrig/issues" target="_blank" rel="noopener">GitHub issue</a> для выявленных ошибок, пожеланий или вопросов.

## Лицезия

Этот проект Open Source и доступен под лицезией [MIT](https://github.com/alextim/igrig/blob/main/LICENSE).

Copyright (c) Oleksii Tymoshenko
