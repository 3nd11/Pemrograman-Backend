/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = () => {
  return new Promise((resolve) => {
    resolve(`Download Selesai`);
  });
};

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */
const download = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = "windows-10.exe";
      resolve(`Hasil Download: ${result}`);
    }, 3000);
  });
};

const main = async () => {
  try {
    console.log(await showDownload());
    console.log(await download());
  } catch {
    console.log(error);
  }
};

main();

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
