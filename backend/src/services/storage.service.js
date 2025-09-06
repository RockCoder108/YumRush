import dotenv from "dotenv";
dotenv.config();
import ImageKit from "imagekit";

var imagekit = new ImageKit({
  publicKey: process.env.IMAGE_PUBLIC_KEY,
  privateKey: process.env.IMAGE_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGE_URL_ENDPOINT,
});

async function uploadFile(file, fileName) {
  const result = await imagekit.upload({
    file: file,
    fileName: fileName,
  });
  return result;
}

export default {uploadFile};
