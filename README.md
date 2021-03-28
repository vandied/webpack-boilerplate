# Шаблон сборки Webpack 5

Сборка проекта с помощью [webpack](https://webpack.js.org/) и библиотеки пакетов NPM.

### В ней есть оптимизация и минимизация:

1. JavaScript ([babel](https://babeljs.io/), [core-js](https://github.com/zloirock/core-js))
2. [SASS](https://sass-lang.com/)
3. [PostCss](https://postcss.org/)
4. HTML
5. [Webpack-dev-server](https://webpack.js.org/configuration/dev-server/)
----
### Установка

- Клонируем к себе репозиторий
- Сделайте 
```bash
git clone
``` 
- Смените директорию 
```bash
cd webpack-boilerplate
```
- Запустите
```bash
 npm install
```
----
### Для разработки:
- даем команду 
```bash  
npm run dev
```
- Получаем комфортную среду для отладки

### Для продакшена:
```bash
npm run build
```
- установите [http-server](https://www.npmjs.com/package/http-server) глобально для деплоя простого сервера.

```bash
npm i -g http-server
```
- Получаем папку dist содержащую минимизированный / сжатый код

Для запуска:
```bash
cd dist && http-server
```
