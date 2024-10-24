import Image from "next/image"

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <div
        className="flex flex-col
        lg:flex-row"
      >
        <div
          className="h-screen-minus-header px-5 overflow-hidden 
         flex flex-col gap-0 text-[#505D65] font-[family-name:var(--font-sofia)] 
          bg-contain bg-gradient-radial
          lg:w-1/2 lg:px-12"
        >
          <div className="flex flex-col gap-[10px] mt-[30px] 2xl:mt-28 2xl:gap-5">
            <h1 className="leading-5 text-lg font-semibold lg:text-[40px] lg:leading-10">Fireflies WEB3</h1>
            <h1 className="mr-7 text-[40px] leading-10 font-bold lg:text-6xl">
              PIONEERING THE FUTURE OF TRAVEL
            </h1>
            <span className="text-[14px] leading-[14px] font-normal text-[#939AA5] 2xl:text-2xl 2xl:leading-6">
              Embark on an unparalleled adventure with Fireflies Web3,
              where we merge the familiarity of traditional online travel booking
              with the cutting-edge innovation of Web3 technology.
            </span>
          </div>
          {/* <div className="flex-1"> */}
          {/* <div className="relative">
            <Image
              src="/images/auth/bannerImg.png"
              alt="hero"
              width={262}
              height={219}
              className="absolute max-w-[262px] -right-8 z-10 lg:w-96 lg:-top-[300px] lg:right-0 2xl:w-[480px] 2xl:-top-[380px]"
            />
          </div>
          <Image
            src="/images/layout/logo.svg"
            alt="logo" width={72}
            height={30}
            className="lg:w-36"
          /> */}
          <div className="flex flex-col justify-end grow gap-0">
            <div className="2xl:grow top-0 left-0">
              <Image
                src="/images/auth/bannerImg.png"
                alt="hero"
                width={262}
                height={219}
                className="w-auto top-0 right-0 2xl:h-full ml-auto mt-auto translate-x-7 2xl:translate-x-0"
              />
            </div>
            <div className="h-8 lg:h-16">
              <Image
                src="/images/layout/logo.svg"
                alt="logo"
                width={72}
                height={30}
                className="h-full"
              />
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="lg:w-1/2 absolute left-[50%] px-5 -translate-x-[50%] top-[340px] sm:top-72 w-full lg:static lg:flex lg:items-center lg:justify-center lg:left-0 lg:translate-x-0 z-20">
          {children}
        </div>
      </div>
    </>
  )
}

export default AuthLayout