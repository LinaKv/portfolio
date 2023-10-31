import { workingPlace } from "../types";

export const workingPlaces: Array<workingPlace> = [
  {
    name: "Combined Radio Solutions",
    dateStart: "2022-10-01",
    dateEnd: null,
    responsibilitiesRus: [
      `Разработала функционал на TypeScript при помощи Azure Functions, позволяющий юзерам выполнять необходимые манипуляции с информацией`,
      `Участие в разработке инфраструктуры и архитектуры проекта вместе с другими разработчиками и бизнес-аналитиками`,
      `Участие на всех этапах жизненного цикла разработки бизнес-логики, включая анализ требований и проектирование`,
      `Ежедневное взаимодействие с клиентами из США на ежедневных сценарных собраниях (scrum meetings)`,
      `Разработала несколько элементов интерфейса, отзывчивых  на действия юзера`,
      `Применяю такие алгоритмы, как быстрая сортировка, хэш-таблицы и т.д для повышения производительности`,
      `Разработала асинхронные скрипты для работы с данными из noSQL базы данных. Смогла сократить время их выполнения с нескольких часов до примерно 40 минут`,
      ` Тестирование при помощи Postman, Insomnia и Swagger UI. Дополнительно провожу мануальное тестирование`,
      `Проводила рефакторинг. Удалось сократить время выполнения скрипта в несколько раз`,
    ],
    responsibilitiesEng: [
      "Developed functionality in TypeScript using Azure Functions, enabling users to perform necessary manipulations with information",
      "Participated in the development of project infrastructure and architecture alongside other developers and business analysts",
      "Involved in all stages of the development lifecycle of business logic, including requirements analysis and design",
      "Daily interaction with clients from the USA in daily scenario meetings (scrum meetings)",
      "Designed several user interface elements responsive to user actions",
      "Applied algorithms such as quicksort, hash tables, etc., to improve performance",
      "Developed asynchronous scripts for working with data from a noSQL database, reducing execution time from several hours to approximately 40 minutes",
      "Conducted testing using Postman, Insomnia, and Swagger UI. Additionally, performed manual testing",
      "Conducted refactoring, significantly reducing script execution time",
    ],
  },
  {
    name: "iactiv.pro (проектная работа)",
    dateStart: "2023-06-01",
    dateEnd: "2023-09-01",
    responsibilitiesRus: [
      ` Работала с функциональными компонентами React и их тестирование`,
      `Работала с контекстом и Redux для эффективного управления состоянием приложения`,
      `Работала с легаси-кодом`,
      ` Разработала анимации, используя Framer Motion и react-transition-group`,
      `Разработала адаптивный и кросс-браузерный интерфейс для поддержки различных устройств и браузеров`,
      ` Взаимодействовала с бекендом для интеграции баз данных, а также для подключения авторизации через WhatsApp и другие социальные сети`,
      ` Разработала гайд по пользовательскому интерактивному интерфейсу путем внедрения дополнительных библиотек и работы с функциональными компонентами React и менеджером Redux`,
    ],
    responsibilitiesEng: [
      "Worked with functional components in React and their testing",
      "Utilized context and Redux for effective state management in the application",
      "Engaged with legacy code",
      "Developed animations using Framer Motion and react-transition-group",
      "Created an adaptive and cross-browser interface to support various devices and browsers",
      "Collaborated with the backend for database integration, as well as connecting authorization through WhatsApp and other social networks",
      "Developed a guide for user interactive interface by incorporating additional libraries and working with functional React components and the Redux manager",
    ],
  },
];
