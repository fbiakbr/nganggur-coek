import { useEffect, useState } from "react";

const startDate = new Date("2024-11-19");

const calculateTimeElapsed = (start) => {
  const now = new Date();
  const totalSeconds = Math.floor((now - start) / 1000);

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};

const UnemploymentCounter = () => {
  const [timeElapsed, setTimeElapsed] = useState(
    calculateTimeElapsed(startDate)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed(startDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="bg-neobrutalism bg-yellow text-center">
        <h1>Nganggur Coek</h1>
      </div>
      <div className="bg-neobrutalism text-center mt-4">
        <img
          src="https://i.pinimg.com/736x/d2/59/c0/d259c0dc247a9f094569f213020cd927.jpg"
          alt="Tertawa Tapi Terlika"
          className="img-fluid mb-3"
          style={{ height: "150px", width: "auto" }}
        />
        <p>
          Pemuda ini telah menganggur selama
          <br />
          <strong className="text-yellow">
            {timeElapsed.days} Hari, {timeElapsed.hours} Jam,{" "}
            {timeElapsed.minutes} Menit, {timeElapsed.seconds} Detik
          </strong>
          <br />
          Ingin Menjadi Programmer Handal Namun Enggan Ngoding
        </p>
      </div>
      <footer
        className="text-center p-3 bg-neobrutalism bg-yellow"
        style={{ marginTop: "20px" }}
      >
        <p className="mb-1">Made with ❤︎ by Ijul Batagor</p>
        <div>
          <a
            href="https://facebook.com/fbiakbr"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/rheatkhs"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/fbiakbr"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
};

export default UnemploymentCounter;
