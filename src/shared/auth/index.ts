export const getErrorMessage = (error: string): string => {
  switch(error) {
    case 'generic': 
      return 'Algo deu errado! Verifique sua conexão com a internet ou atualize a página.'
    case 'auth/user-not-found':
      return 'Esse usuário não existe. Faça seu cadastro.'
    case 'auth/wrong-password':
      return 'Senha incorreta.'
      case 'auth/email-already-in-use':
      return 'Esse usuário já existe!'
    case 'auth/invalid-email':
      return 'Email inválido!'
    default:
      return 'Algo deu errado!'
  }
}