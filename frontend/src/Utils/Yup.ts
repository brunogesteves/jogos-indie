import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email Inválido ').required('Digite o email'),
  password: Yup.string().required('Digite a senha')
});
