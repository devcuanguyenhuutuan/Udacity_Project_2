import { NOT_VALID_MESSAGE, SERVER_ERROR_MESSAGE } from './constant.js';
import { filterImageFromURL, deleteLocalFiles } from './util/util.js';

export const filteredImageController = async (req, res, next) => {
    const { image_url: url } = req.query;
    try {
        if (!url) {
            return res.status(400).send(NOT_VALID_MESSAGE);
        }
        const imagePath = await filterImageFromURL(url);
        res.sendFile(imagePath, (e) => {
            if (e) {
                return res.status(400).send(NOT_VALID_MESSAGE);
            }
            deleteLocalFiles([imagePath]);
        });
    } catch (error) {
        const errorMessage = error?.toString();
        console.log('ERROR:', errorMessage);
        return res.status(500).send(`ERROR: ${errorMessage}`);
    }
}

export const blankUrlController = (req, res, next) => {
    return res.send("try GET /filteredimage?image_url={{URL}}");
}
