import Buttoncustom from "../custombutton/Button";

export default function Subscription() {
  return (
    <div className="pt-10 relative pb-24 md:pb-40 text-center my-20 space-y-2 bg-[#7cadd87d] text-[#333]">
      <h1 className="text-2xl md:text-4xl px-3 md:px-0">
        Newsletter - Stay tune and get the latest update
      </h1>
      <h4 className="text-xl md:text-2xl">Far far away, behind the word mountains</h4>
      <div className="md:absolute md:px-0 justify-center flex items-center ">
        <label className="md:absolute border-2 border-black  cursor-text md:left-[430px] font-semibold text-xl top-4">
          <input
            type="email"
            placeholder="Enter email address"
            className="bg-transparent placeholder:capitalize placeholder:text-[#333]  text-white focus:outline-none  py-5 pl-5 pr-16"
          />
          <div className="absolute hidden md:block top-4 -right-14 ">
            <Buttoncustom text="subscribe" />
          </div>
        </label>
      </div>
    </div>
  );
}
