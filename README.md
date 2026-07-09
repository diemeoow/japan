# 🇯🇵 Japan — сайт о Японии
[![GitHub last commit](https://img.shields.io/github/last-commit/diemeoow/japan)](https://github.com/diemeoow/japan/commits/main)
[![GitHub license](https://img.shields.io/github/license/diemeoow/japan)](https://github.com/diemeoow/japan/blob/main/LICENSE)
[![GitHub Pages](https://img.shields.io/badge/demo-online-green)](https://diemeoow.github.io/japan)
[![GitHub stars](https://img.shields.io/github/stars/diemeoow/japan)](https://github.com/diemeoow/japan/stargazers)

Одностраничный сайт (лендинг), посвящённый Японии: её истории, культуре, языку и современности. Сделан на чистом HTML, CSS и JavaScript.

🔗 **Демо:** [diemeoow.github.io/japan](https://diemeoow.github.io/japan)

## О проекте

Сайт рассказывает о Японии через четыре тематических раздела:

- **История** — от эпохи феодальных войн (Сэнгоку) через реформы Мэйдзи до современности
- **Культура** — чайная церемония, икебана, манга, сакура, кимоно, кабуки
- **Язык** — три японские системы письма: кандзи, хирагана, катакана (реализовано в виде аккордеона)
- **О стране** — Япония сегодня: технологии, экономика, уровень жизни

## Технологии

<img src="https://skillicons.dev/icons?i=html,css,js" />

- [Slick Carousel](https://kenwheeler.github.io/slick/) — карусели/слайдеры
- [Font Awesome](https://fontawesome.com/) — иконки

## Структура проекта

```
japan/
├── .github/workflows/   # CI/CD (GitHub Actions, деплой на GitHub Pages)
├── .vscode/             # настройки редактора
├── js/                  # скрипты (scripts.js)
├── pic/                 # изображения и иконки
├── index.html           # главная страница
└── style.css            # стили
```

## Запуск локально

Проект не требует сборки — достаточно открыть `index.html` в браузере:

```bash
git clone https://github.com/diemeoow/japan.git
cd japan
```

Затем откройте `index.html` в браузере, либо запустите локальный сервер, например:

```bash
npx serve .
```
