import { ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";

export const portfolio: Array<ClassType> = [
  {
    name: "FORKIFY",
    descriptionRus: (
      <div className="text-left">
        <p className="py-2">
          Stack: JavaScript, SASS, Parcel, Netlify, Git (Поиск и
          созданиекулинарных рецептов)
        </p>
        <p className="py-2">
          Ванильный JavaScript. Работа с архитектурой, классами, асинхронным
          кодом, запросами на сервер. Сборщик модулей - Parcel. Использование
          LocalStorage. Публикация проекта на Netlify
        </p>
        <div className="flex items-start gap-5 py-2">
          <p>
            <a
              href="https://github.com/LinaKv/forkify-course-study.git"
              target="_blank"
              className="underline underline-offset-2"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://wondrous-paprenjak-49e84c.netlify.app/"
              target="_blank"
              className="underline underline-offset-2"
            >
              Посмотреть сайт
            </a>
          </p>
        </div>
      </div>
    ),
    descriptionEng: (
      <div className="text-left">
        <p className="py-2">
          Stack: JavaScript, SASS, Parcel, Netlify, Git (Searching for and
          creating culinary recipes)
        </p>
        <p className="py-2">
          Vanilla JavaScript. Working with architecture, classes, asynchronous
          code, server requests. Module bundler - Parcel. Utilizing
          LocalStorage. Project deployment on Netlify
        </p>
        <div className="flex items-start gap-5 py-2">
          <p>
            <a
              href="https://github.com/LinaKv/forkify-course-study.git"
              target="_blank"
              className="underline underline-offset-2"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://wondrous-paprenjak-49e84c.netlify.app/"
              target="_blank"
              className="underline underline-offset-2"
            >
              To see the website
            </a>
          </p>
        </div>
      </div>
    ),
    image: image1,
  },
  {
    name: "House-Market",
    descriptionRus: (
      <div className="text-left">
        <p className="py-2">
          Stack: JavaScript, React, React-router-dom, React-dom, react-toastify,
          FireBase (Приложение для размещения объявлений о сдаче/покупке
          недвижимости)
        </p>
        <p className="py-2">
          Авторизация пользователей, регистрация новых, аутентификация и иные
          CRUD операции. Сортировка данных. Загрузка в базу данных файлов и их
          использование.
        </p>
        <p>
          <a
            href="https://github.com/LinaKv/House-market.git"
            className="underline underline-offset-2"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </div>
    ),
    descriptionEng: (
      <div className="text-left">
        <p className="py-2">
          Stack: JavaScript, React, React-router-dom, React-dom, react-toastify,
          FireBase (Application for posting real estate rental/purchase
          advertisements)
        </p>
        <p className="py-2">
          User authentication, registration of new users, authentication, and
          other CRUD operations. Sorting of data. Uploading files to the
          database and their utilization.
        </p>
        <p>
          <a
            href="https://github.com/LinaKv/House-market.git"
            className="underline underline-offset-2"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </div>
    ),
    image: image2,
  },
  {
    name: "Sociopedia",
    descriptionRus: (
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
            className="underline underline-offset-2"
          >
            GitHub
          </a>
        </p>
      </div>
    ),
    descriptionEng: (
      <div className="text-left">
        <p className="py-2">
          Stack: JavaScript, React, React-router-dom, React-dom, react-toastify,
          axios, formik, nodeJS (Application similar to Twitter)
        </p>
        <p className="py-2">
          User authentication in the application, creating new accounts, the
          ability to add users as friends, create posts, and read the feed of
          friends' posts
        </p>
        <p>
          <a
            href="https://github.com/LinaKv/Fullstack-App/tree/main"
            target="_blank"
            className="underline underline-offset-2"
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
    descriptionRus: (
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
          <a
            href="https://github.com/LinaKv/noAnx"
            target="_blank"
            className="underline underline-offset-2"
          >
            GitHub
          </a>
        </p>
      </div>
    ),
    descriptionEng: (
      <div className="text-left">
        <p className="py-2">
          Stack: JavaScript, React, React-router-dom, React-dom, axios, nodeJS
          (Full-stack application in development. Set of text-based exercises)
        </p>
        <p className="py-2">
          A website with the ability to take various exercises. Currently in
          development. Server development is currently in progress
        </p>
        <p>
          <a
            href="https://github.com/LinaKv/noAnx"
            target="_blank"
            className="underline underline-offset-2"
          >
            GitHub
          </a>
        </p>
      </div>
    ),
    image: image4,
  },
  {
    name: "Evogym",
    descriptionRus: (
      <div className="text-left">
        <p className="py-2">
          Stack: TypeScript, Tailwind, React, Framer-motion (Лендинг)
        </p>
        <div className="flex items-start gap-5 py-2">
          <p>
            <a
              href="https://github.com/LinaKv/gym-application-ts"
              target="_blank"
              className="underline underline-offset-2"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://gym-application-ts.pages.dev/"
              target="_blank"
              className="underline underline-offset-2"
            >
              Посмотреть сайт
            </a>
          </p>
        </div>
      </div>
    ),
    descriptionEng: (
      <div className="text-left">
        <p className="py-2">
          Stack: TypeScript, Tailwind, React, Framer-motion
        </p>
        <div className="flex items-start gap-5 py-2">
          <p>
            <a
              href="https://github.com/LinaKv/gym-application-ts"
              target="_blank"
              className="underline underline-offset-2"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://gym-application-ts.pages.dev/"
              target="_blank"
              className="underline underline-offset-2"
            >
              Посмотреть сайт
            </a>
          </p>
        </div>
      </div>
    ),
    image: image5,
  },
];
