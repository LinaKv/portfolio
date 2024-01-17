import { useMyContext } from "@/context/MyContext";

function footer() {
  const { language } = useMyContext();

  return (
    <footer className="mx-auto bg-gray-50 py-10 lg:w-2/4">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-5 basis-1/2 md:mt-0">
          <p className="my-5">
            {language
              ? "Если вы случайно обнаружили какие-либо баги в данном лендинге, буду благодарна, если вы сообщите о них, чтобы я имела возможность их исправить"
              : "If you happen to discover any bugs on this landing page, I would appreciate it if you could report them so that I have the opportunity to fix them"}
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
          <h4 className="font-bold">
            {language ? "Связаться со мной" : "Connect with me"}
          </h4>
          <p className="my-5">
            <a href="https://t.me/polina_obw" target="_blank">
              Telegram
            </a>
          </p>
          <p>
            <span>polinakvitka409</span>
            <span className="before-at-sign" />
            <span className="domain">gmail.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default footer;
