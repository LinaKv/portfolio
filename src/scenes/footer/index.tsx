function footer() {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-5 basis-1/2 md:mt-0">
          <p className="my-5">
            Если вы случайно обнаружили какие-либо баги в данном лендинге, буду
            благодарна, если вы сообщите о них, чтобы я имела возможность их
            исправить
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            <a href="https://github.com/LinaKv" target="_blank">
              GitHub
            </a>
          </p>
          <p className="my-5">
            <a
              href="https://www.linkedin.com/in/pauline-kvitka/"
              target="_blank"
            >
              Linkedin
            </a>
          </p>
          <p className="my-5">
            <a href="https://t.me/polina_obw" target="_blank">
              Telegram
            </a>
          </p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Связаться со мной</h4>
          <p className="my-5">
            <a href="https://t.me/polina_obw" target="_blank">
              Telegram
            </a>
          </p>
          <p>
            <span>kvitka.p</span>
            <span className="before-at-sign" />
            <span className="domain">yandex.ru</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default footer;
