import Input from "@/Components/Login/Input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  console.log({ EmailOrPhone: emailOrPhone, Password: password });
  return (
    <div className="relative bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover h-full w-full">
      <div className="h-full w-full bg-black bg-opacity-50">
        <nav className="xl:py-[25.1px] xl:px-14">
          <Image src="/images/logo.png" alt="logo" width={167} height={45} />
        </nav>
        <div className="flex justify-center items-center">
          <div className="xl:w-[450px] xl:h-[660px] xl:px-[68px] xl:py-[60px] bg-black/[.75] rounded self-center">
            <h1 className="text-white xl:text-[32px] font-bold xl:mb-7">
              Sign In
            </h1>
            <div className="flex flex-col gap-[72px]">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
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
                </div>
                <div className="flex flex-col gap-3">
                  <button className="xl:w-full xl:h-12 bg-[#E50914] rounded text-white font-bold">
                    Sign In
                  </button>
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
                        className="text-[#B3B3B3] xl:ml-2 xl:text-[13px]"
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
                <h1 className="text-[#737373] text-[17px] inline-block">
                  New to Netflix?{" "}
                  <span>
                    <Link
                      href=""
                      className="hover:underline text-white font-bold"
                    >
                      Sign up now
                    </Link>
                  </span>
                </h1>
                <p className="text-[#737373] text-[14px] inline-block">
                  This page is protected by Google reCAPTCHA to ensure you are
                  not a bot.{" "}
                  <span>
                    <Link href="" className="text-[#0071EB] hover:underline">
                      Learn more.
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
