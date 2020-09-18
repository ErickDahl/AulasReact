const fakeAPI = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if(num !== 2){
      resolve(`resposta para requisição ${num}`);
    }else{
      reject(`erro na requisição ${num}`);
    }
  }, 3000)
})

// function executarPromise() {
//   fakeAPI(1)
//     .then(response => {
//       (console.log(response))
//       fakeAPI(2)
//         .then(response => {
//           (console.log(response))
//           fakeAPI(1)
//             .then(response => {
//               (console.log(response))

//             }).catch(err => (console.log('error ', err)));

//         }).catch(err => (console.log('error ', err)));

//     }).catch(err => (console.log('error ', err)));
// }

// executarPromise();

// function executarPromise_() {
//   try {
//     console.log(fakeAPI(0));
//     console.log(fakeAPI(0));
//     console.log(fakeAPI(0));
//   } catch (error) {
//     console.log("Error:", error) 
//   }
// }

// async function executarPromise() {
//   try {
//     console.log(await fakeAPI(1));
//     console.log(await fakeAPI(1));
//     console.log(await fakeAPI(1));
//   } catch (error) {
//     console.log("Error:", error) 
//   }
// }

// async function executarPromise2() {
//   try {
//     console.log(await fakeAPI(3));
//     console.log(await fakeAPI(3));
//     console.log(await fakeAPI(3));
//   } catch (error) {
//     console.log("Error:", error) 
//   }
// }

// executarPromise_();
// executarPromise();
// executarPromise2();


// async function executarPromise() {
//   try {
//     console.log(await fakeAPI(1));
//     console.log(await fakeAPI(2));
//     console.log(await fakeAPI(1));
//   } catch (error) {
//     console.log("Error:", error) 
//   }
// }

// executarPromise();


async function executarPromise() {
  try {
    console.log(await fakeAPI(1));
  } catch (error) {
    console.log("Error:", error) 
  }

  try {
    console.log(await fakeAPI(2));
  } catch (error) {
    console.log("Error:", error) 
  }

  try {
    console.log(await fakeAPI(1));
  } catch (error) {
    console.log("Error:", error) 
  }
}

executarPromise();
