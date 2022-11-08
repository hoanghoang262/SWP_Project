import { Buffer } from "buffer";

const convertBufferToImg = (data) => {
    const b64 = Buffer.from(data).toString('base64');
    const mimeType = 'image/png';
    return `data:${mimeType};base64,${b64}`
}

export default convertBufferToImg