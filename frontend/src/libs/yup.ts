import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Obrigatório"),
  birth: Yup.string().required("Obrigatório"),
  cpf: Yup.string().required("Obrigatório"),
  username: Yup.string().required("Obrigatório"),
  userEmail: Yup.string().email("Email Inválido").required("Obrigatório"),
  password: Yup.string()
    .required("Digite uma senha")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "A senha deve conter pelo menos 8 caracteres, uma maiúscula, um número e um caractere especial"
    ),
  confirmPassword: Yup.string(),
  // .required("Por favor Confirme a senha")
  // .when("password", {
  //   is: (password: string) =>
  //     password && password.length > 0 ? true : false,
  //   then: Yup.string().oneOf([Yup.ref("password")], "Senhas diferentes"),
  // }),
});

export const LoginSchema = Yup.object().shape({
  userEmail: Yup.string().email("Email Inválido").required("Obrigatório"),
  password: Yup.string().required("Digite a senha"),
});

export const NewPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required("Digite uma senha")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "A senha deve conter pelo menos 8 caracteres, uma maiúscula, um número e um caractere especial"
    ),
  // confirmPassword: Yup.string()
  //   .required("Por favor Confirme a senha")
  //   .when("newPassword", {
  //     is: (password: string) =>
  //       password && password.length > 0 ? true : false,
  //     then: Yup.string().oneOf([Yup.ref("newPassword")], "Senhas diferentes"),
  //   }),
});

export const PostContentSchema = Yup.object().shape({
  name: Yup.string().required("Obrigatório"),
  category: Yup.string().required("Obrigatório"),
  content: Yup.string().required("Conteúdo Obrigatório"),
  isScheduled: Yup.boolean().optional(),
  slide: Yup.boolean().optional(),
  middle: Yup.boolean().optional(),
  gameplay: Yup.boolean().optional(),
  main: Yup.boolean().optional(),
  thumb: Yup.string().required("ThumbNail Obrigatória"),
});
