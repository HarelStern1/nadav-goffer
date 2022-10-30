export const format = (message: string, email: string, phone: string) => {
  const content = `
  ${message}


  Email: ${email}
  Phone: ${phone}`;

  return content;
};
