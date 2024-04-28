import Buttoncustom from "../custombutton/Button";

export default function Subscription() {
  return (
    <div className="pt-10 pb-20 text-center my-20 space-y-2 bg-[#7cadd87d] text-[#333]">
      <h1 className="text-4xl">
        Newsletter - Stay tune and get the latest update
      </h1>
      <h4 className="text-2xl">Far far away, behind the word mountains</h4>
      <div className="relative flex items-center ">
        <label className="relative focus-within:text-transparent cursor-text left-[430px] font-semibold text-xl top-4">
          <input
            type="email"
            className="bg-transparent  text-white focus:outline-none border-2 border-black py-5 pl-5 pr-16"
          />

          <span className="absolute left-2 top-5 px-1 capitalize tracking-wide">
            Enter email address
          </span>
        <div className="absolute top-4 -right-14 ">
          <Buttoncustom text="subscribe" />
        </div>
        </label>

      </div>
    </div>
  );
}
