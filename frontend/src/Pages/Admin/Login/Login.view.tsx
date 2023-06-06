import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useLogic } from './Login.logic';
import { Form, Formik, Field } from 'formik';
import { LoginSchema } from '../../../Utils/Yup';
import { LoginProps } from '../../../Utils/types';

export default function Login() {
  const { data, methods } = useLogic();

  return (
    <>
      {data.isLogged ? <Redirect to="/admin" /> : null}
      <div className="bg-red-500 flex justify-center flex-col items-center h-screen">
        <div>
          <img
            src={`${process.env.REACT_APP_API_URL_FILES}/logotype.png`}
            alt="logotype"
            className="w-80"
          />
        </div>

        <Formik
          initialValues={data.initialValues}
          validationSchema={LoginSchema}
          onSubmit={(values: LoginProps, actions) => {
            methods.signIn(values);
            actions.resetForm();
          }}>
          {({ errors, touched }) => (
            <Form className=" flex justify-center flex-col  px-3 gap-x-3">
              <p className="text-white text-lg my-1">Email:</p>
              <div className=" h-14 ">
                <Field
                  name="email"
                  placeholder="email"
                  className="rounded-lg h-7 px-2 placeholder:px-2 focus:outline-none"
                />
                {errors.email && touched.email ? (
                  <div className="text-white text-center">{errors.email}</div>
                ) : null}
              </div>
              <p className="text-white text-lg my-1">Senha:</p>

              <div className=" h-14 ">
                <Field
                  name="password"
                  placeholder="password"
                  className="rounded-lg h-7 px-2 placeholder:px-2 focus:outline-none"
                />
                {errors.password && touched.password ? (
                  <div className="text-white text-center">{errors.password}</div>
                ) : null}
              </div>
              <p className="text-white text-center text-xs h-1">{data.errorMessage}</p>
              <button type="submit" className="bg-white my-10 rounded-lg py-1 px-5 cursor-pointer">
                Entrar
              </button>
            </Form>
          )}
        </Formik>
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
