const sendEmail = (email) => {
  return new Promise((resolve, reject) => {
    if (!email)
      reject({
        message: 'Email is required',
        success: false,
      });
    if (!email.split('@')[1])
      reject({
        message: 'Invalid pattern',
        success: false,
      });

    setTimeout(
      () =>
        resolve({
          success: true,
        }),
      500
    );
  });
};
//async await
const main = async () => {
  // sendEmail('dfnigvnd')
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log('error->', error);
  //   });
  try {
    const response = await sendEmail('willianerick17gmail.com');
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

main();