import Image from "next/image";
const Logo = "/assets/Logo.svg";

export default function Header(): JSX.Element {
  return (
    <div >
      <div className="w-12 h-12">
        <Image src={Logo} color="red" height={128} width={128} />
        <img src="/assets/Logo.svg" className="text-slate-600 mt-10"  />
      </div>
    </div>
  );
}
