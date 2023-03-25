import { Typography } from "components";
import { padding } from "../../constants";
import Image from "next/image";

export const OurClients = () => {
  const clients = [
    {
      url: "move@2x.png",
      width: 131,
      height: 38,
    },
    {
      url: "check@2x.png",
      width: 78,
      height: 38,
    },
    {
      url: "jatievip@2x.png",
      width: 92,
      height: 38,
    },
    {
      url: "kinumi@2x.png",
      width: 165,
      height: 29,
    },
    {
      url: "patient@2x.png",
      width: 116,
      height: 34,
    },

    {
      url: "cannabox@2x.png",
      width: 141,
      height: 81,
    },
  ];

  const establishiedClients = [
    {
      url: "toyota@2x.png",
      width: 189,
      height: 38,
    },
    {
      url: "mars@2x.png",
      width: 94,
      height: 38,
    },
    {
      url: "webflow@2x.png",
      width: 141,
      height: 38,
    },
    {
      url: "honda@2x.png",
      width: 177,
      height: 38,
    },
    {
      url: "citi@2x.png",
      width: 74,
      height: 38,
    },

    {
      url: "vaillant@2x.png",
      width: 96,
      height: 38,
    },
    {
      url: "liquitex@2x.png",
      width: 110,
      height: 38,
    },
    {
      url: "ione@2x.png",
      width: 105,
      height: 32,
    },
    {
      url: "navigate@2x.png",
      width: 184,
      height: 32,
    },
    {
      url: "tuon@2x.png",
      width: 128,
      height: 32,
    },
    {
      url: "vint@2x.png",
      width: 125,
      height: 30,
    },
  ];

  return (
    <div
      className={[
        "max-w-mobile sm:max-w-desktop-s mx-auto w-full relative z-10 xl:-mt-[120px]",
        padding,
      ].join(" ")}
    >
      <div className="w-fit mx-auto">
        <Typography variant="heading1" classname="text-main-deepBlue">
          Our Clients
        </Typography>
      </div>
      <div className="sm:h-[40px]" />
      <div className="flex flex-col gap-[30px] sm:gap-[38px] max-w-full sm:max-w-945 w-full mx-auto">
        <div className="flex flex-col gap-5 sm:gap-[25px] w-full">
          <Typography
            variant="title-semi"
            classname="uppercase tracking-[3.75px] text-main-grey text-center sm:text-center x:text-center xl:text-start"
          >
            New Comers
          </Typography>
          <div className="flex gap-[37.5px] flex-wrap sm:flex-row justify-center sm:justify-center">
            {clients.map(({ url, width, height }, index) => (
              <Image
                key={index}
                src={"/assets/logos/Clients/" + url}
                width={width}
                height={height}
                alt="logos"
                className="object-contain"
              />
            ))}
          </div>
        </div>
        <div className="border border-main-lightBlue w-[92%] mx-auto" />
        <div className="flex flex-col gap-5 sm:gap-[25px] w-full">
          <Typography
            variant="title-semi"
            classname="uppercase tracking-[3.75px] text-main-grey text-center sm:text-center x:text-center xl:text-start"
          >
            Established Brands we have worked with
          </Typography>
          <div className="flex sm:gap-x-[35px] sm:gap-y-[25px] gap-5 flex-wrap justify-center sm:justify-center">
            {establishiedClients.map(({ url, width, height }, index) => (
              <Image
                key={index}
                src={"/assets/logos/Clients/" + url}
                width={width}
                height={height}
                alt="logos"
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
