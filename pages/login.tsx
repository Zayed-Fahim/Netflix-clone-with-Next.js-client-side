import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="relative bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover h-full w-full">
      <div className="h-full w-full bg-black bg-opacity-50">
        <nav className="xl:py-[25.1px] xl:px-14">
          <Image src="/images/logo.png" alt="logo" width={148} height={40} />
        </nav>
        <div className="flex justify-center items-center">
          <div className="xl:w-[450px] xl:h-[660px] xl:px-[68px] xl:py-[60px] bg-black/[.75] rounded self-center">
            <h1 className="text-white xl:text-[32px] font-bold xl:mb-7">
              Sign In
            </h1>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Email or phone number"
                  className="w-full peer ring-0 focus:outline-none xl:h-[50px] rounded xl:px-5 text-[17px] bg-[#333]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full peer ring-0 focus:outline-none xl:h-[50px] rounded xl:px-5 text-[18px] bg-[#333]"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
