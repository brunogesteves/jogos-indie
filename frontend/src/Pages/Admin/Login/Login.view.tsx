import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useLogic } from "./Login.logic";

export default function Login(props) {
  const { data, methods } = useLogic();

  return (
    <>
      {data.isLogged ? <Redirect to="/admin/posts" /> : null}
      <div className="bg-red-500 flex justify-center flex-col items-center h-screen">
        <div>
          <img src={"/1.jpg"} alt="logotype" className="w-80" />
        </div>
        <div className="flex flex-col">
          <p className="text-white text-lg my-1">Email:</p>
          <input
            type="text"
            name="usernameField"
            className="rounded-lg h-7 px-2 placeholder:px-2 focus:outline-none"
            placeholder="Digite seu email"
            onChange={(e) =>
              methods.setSignInfo({ ...data.signInfo, email: e.target.value })
            }
            size={30}
          />
        </div>
        <div className="flex flex-col mt-5">
          <p className="text-white text-lg my-1">Senha:</p>
          <input
            type="password"
            name="passwordField"
            className="rounded-lg h-7 placeholder:px-2 px-2 focus:outline-none"
            placeholder="Digite sua senha"
            onChange={(e) =>
              methods.setSignInfo({
                ...data.signInfo,
                password: e.target.value,
              })
            }
            size={30}
          />
        </div>
        <div>
          <input
            type="button"
            value="ENTRAR"
            className="bg-white my-10 rounded-lg py-1 px-5 cursor-pointer"
            onClick={() => methods.signIn()}
          />
        </div>
        <div className=" flex flex-col text-center">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/" className="text-white">
            Lembrar Senha
          </Link>
        </div>
      </div>
    </>
  );
}
