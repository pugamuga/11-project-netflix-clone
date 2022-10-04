import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import NetflixIcon from "../components/svg/NetflixIcon";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useForm, SubmitHandler  } from "react-hook-form";
import { Inputs } from "../typing";
import useAuth from "../hooks/useAuth";
import { useRecoilState } from "recoil";
import { signUpAtom } from "../atoms/modalAtom";

export default function SignUp() {
const [login, setLogin] = useState<boolean>(false);
const [signUpComponent, setSignUpComponent] = useRecoilState(signUpAtom)

  const [passIsView, setPassIsView] = useState<boolean>(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
const {signIn, signUp} = useAuth()

  const onSubmit: SubmitHandler<Inputs> = async({email,password}) => {
    if(login){
        await signIn(email, password)
    } else{
      await signUp(email, password)
    }
  }


  return (
    
      
      
      <form
      onSubmit={handleSubmit(onSubmit)}
        className=" relative mt-24 space-y-8 rounded bg-black/75 py-10 px-12 md:mt-0
      md:w-[420px] md:px-14"
      >
        <h1 className=" text-3xl">Sign Up</h1>
        <div className=" space-y-4 flex flex-col">
          <label>
            <input type="email" placeholder="new Email" className=" input " {...register("email", {required:true})}/>
            {errors.email && <span className=" text-red-600 ">This field is required</span>}
          </label>
      
          <label className="relative">
            <input
              type={passIsView ? "text" : "password"}
              placeholder="new Password"
              className=" input"
              {...register("password",{required:true})}
            />
            {errors.password && <span className=" text-red-600 ">This field is required</span>}
            {passIsView?<EyeIcon  onClick={() => {
             setPassIsView((prev:boolean) => {
                return !prev
             })   
            }} className="w-5 h-5 absolute top-0 bottom-0 my-auto right-5" />:
            <EyeOffIcon onClick={() => {
             setPassIsView((prev:boolean) => {
                return !prev
             })   
            }} className="w-5 h-5 absolute top-0 bottom-0 my-auto right-5" />}
          </label>
        </div>
        <button onClick={() => {
          setLogin(false)
        }} type="submit" className=" w-full text-center rounded-sm bg-[#e50913] text-lg pb-2 pt-3">
          Sign Up
        </button>
        <div className=" flex space-x-2">
          <h1 className=" text-white/40">Already have account?</h1>
          <button 
          onClick={() => {
           
           setSignUpComponent(false)
          }}
          className="hover:underline">Sign in</button>
        </div>
      </form>
  );
}
