import { ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import Class from "./Class";

export const classes: Array<ClassType> = [
  {
    name: "FORKIFY",
    description: (
      <div className="text-left">
        <p className="py-2">
          Stack: JavaScript, SASS, Parcel, Netlify, Git (Разработка приложения
          для поиска и создания кулинарных рецептов)
        </p>
        <p className="py-2">
          Проект на чистом JavaScript. Работала с архитектурой, классами,
          асинхронным кодом, запросами на сервер. В качестве сборщика модулей -
          Parcel. Использование LocalStorage. Публикация проекта на Netlify
        </p>
        <p>
          <a
            href="https://github.com/LinaKv/forkify-course-study.git"
            target="_blank"
          >
            GitHub
          </a>
        </p>
        <p>
          <a
            href="https://wondrous-paprenjak-49e84c.netlify.app/"
            target="_blank"
          >
            Netlify
          </a>
        </p>
      </div>
    ),
    image: image1,
  },
  {
    name: "House-Market",
    description: (
      <div className="text-left">
        <p className="py-2">
          Stack: JavaScript, React, React-router-dom, React-dom, react-toastify,
          FireBase (Приложение для размещения объявлений о сдаче/покупке
          недвижимости)
        </p>
        <p className="py-2">
          Авторизация пользователей в приложении, создание новых аккаунтов,
          аутентификация и иные CRUD операции. Сортировка данных rent/sell.
          Загрузка в базу данных файлов типа jpg и их дальнейшее использование.
        </p>
        <p>
          <a href="https://github.com/LinaKv/House-market.git" target="_blank">
            GitHub
          </a>
        </p>
      </div>
    ),
    image: image2,
  },
  {
    name: "Sociopedia",
    description: (
      <div className="text-left">
        <p className="py-2">
          Stack: JavaScript, React, React-router-dom, React-dom, react-toastify,
          axios, formik, nodeJS (Приложение аналог твиттера)
        </p>
        <p className="py-2">
          Авторизация пользователей в приложении, создание новых аккаунтов,
          возможность добавлять пользователей в друзья, создавать посты, читать
          ленту постов друзей
        </p>
        <p>
          <a
            href="https://github.com/LinaKv/Fullstack-App/tree/main"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </div>
    ),
    image: image3,
  },
  {
    name: "NoAnx",
    description: (
      <div className="text-left">
        <p className="py-2">
          Stack: JavaScript, React, React-router-dom, React-dom, axios, nodeJS
          (Фуллстек приложение в разработке. Набор текстовых упражнений)
        </p>
        <p className="py-2">
          Сайт с возможностью проходить разные упражнения. В данный момент
          находится в разработке. В данный момент ведется разработка сервера
        </p>
        <p>
          <a href="https://github.com/LinaKv/noAnx" target="_blank">
            GitHub
          </a>
        </p>
      </div>
    ),
    image: image4,
  },
  {
    name: "Evogym",
    description: (
      <div className="text-left">
        <p className="py-2">
          Stack: TypeScript, Tailwind, React, Framer-motion (Лендинг)
        </p>
        <p>
          <a
            href="https://github.com/LinaKv/gym-application-ts"
            target="_blank"
          >
            GitHub
          </a>
        </p>
        <p>
          <a href="https://gym-application-ts.pages.dev/" target="_blank">
            Посмотреть сайт
          </a>
        </p>
      </div>
    ),
    image: image5,
  },
];
