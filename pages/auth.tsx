import Input from "@/Components/Login/Input";
import Footer from "@/Components/Footer/Footer";
import Link from "next/link";
import { useCallback, useState } from "react";
import Image from "next/image";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState("login");
  const [isClicked, setIsClicked] = useState(false);

  const togglePage = useCallback(() => {
    setOption((currentPage) => (currentPage === "login" ? "sign-up" : "login"));
  }, []);

  return (
    <div className="relative bg-black md:bg-black lg:bg-[url('/images/hero.jpg')] xl:bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover h-full w-full px-6 lg:px-0 xl:px-0">
      <div className="h-full w-full bg-black lg:bg-opacity-50">
        <nav className="h-12 pt-5 pb-10 lg:h-16 xl:h-20 xl:py-8 lg:px-20 xl:px-20">
          <Image
            src="/images/logo.png"
            alt="logo"
            layout="responsive"
            width={167}
            height={45}
            className="!w-20 !h-6 lg:!w-[167px] lg:!h-[45px] xl:!w-[167px] xl:!h-[45px]"
          />
        </nav>
        <div className="flex justify-center items-center">
          <div className="w-full lg:w-[26rem] lg:px-12 lg:pt-12 xl:w-[450px] lg:pb-8 h-auto xl:px-[68px] xl:pt-[60px] xl:pb-10 bg-black/[.75] rounded self-center">
            <h1 className="text-white text-3xl lg:text-3xl mb-8 lg:mb-5 xl:text-[32px] font-bold xl:mb-7">
              {option === "login" ? "Sign In" : "Sign Up"}
            </h1>
            <div className="flex flex-col gap-7 lg:gap-12 xl:gap-[72px]">
              <div className="flex flex-col gap-3">
                <form className="flex flex-col gap-4">
                  {option !== "login" && (
                    <Input
                      id="userName"
                      type="text"
                      onChange={(event: any) => setUserName(event.target.value)}
                      value={userName}
                      label="Username"
                    />
                  )}
                  <Input
                    id="emailOrPhone"
                    type="text"
                    onChange={(event: any) =>
                      setEmailOrPhone(event.target.value)
                    }
                    value={emailOrPhone}
                    label="Email or phone number"
                  />
                  <Input
                    id="password"
                    type="password"
                    onChange={(event: any) => setPassword(event.target.value)}
                    value={password}
                    label="Password"
                  />
                  <button className="w-full h-10 xl:h-12 bg-[#E50914] mt-7 lg:mt-6 xl:mt-8 rounded text-white font-bold">
                    {option === "login" ? "Sign In" : "Sign Up"}
                  </button>
                </form>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        defaultChecked
                        name="remember-me"
                        id="remember-me"
                        className="accent-[#737373]"
                      />
                      <label
                        htmlFor="remember-me"
                        className="text-[#B3B3B3] ml-1 xl:text-[13px]"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link href="" className="text-[#B3B3B3] xl:text-[13px]">
                      Need Help?
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-[#737373] inline-block">
                  {option === "login"
                    ? "New to Netflix?"
                    : "Already have an account?"}{" "}
                  <span
                    className="hover:underline text-white"
                    onClick={togglePage}
                  >
                    {option === "login" ? "Sign up now" : "Login"}
                  </span>
                </h1>
                <p className="text-[#737373] text-[13px] inline-block">
                  This page is protected by Google reCAPTCHA to ensure you are
                  not a bot.{" "}
                  <span
                    className="text-[#0071EB] hover:underline"
                    onClick={() => setIsClicked(true)}
                  >
                    {!isClicked && "Learn more."}
                  </span>
                </p>
                {isClicked && (
                  <p className="text-[13px] text-[#8C8C8C]">
                    The information collected by Google reCAPTCHA is subject to
                    the Google{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      className="text-[#0071EB] hover:underline"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://policies.google.com/terms"
                      className="text-[#0071EB] hover:underline"
                    >
                      Terms of Service
                    </a>
                    , and is used for providing, maintaining, and improving the
                    reCAPTCHA service and for general security purposes (it is
                    not used for personalized advertising by Google).
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
