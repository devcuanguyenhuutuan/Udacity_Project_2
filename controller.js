import { filterImageFromURL, deleteLocalFiles } from './util/util.js';

export const filteredImageController = async (req, res, next) => {
    try {
        const imageUrl = req.query.image_url;
        if (!imageUrl) {
            return res.status(400).send('Image URL is required');
        }
        const filteredImagePath = await filterImageFromURL(imageUrl);
        res.sendFile(filteredImagePath, (err) => {
            if (err) {
                console.error('Error sending file:', err);
                return res.status(422).send('Image URL is invalid');
            }
            deleteLocalFiles([filteredImagePath]);
        });
    } catch (error) {
        const errorMessage = error?.toString() ?? "error from Server !";
        console.log('ERROR:', errorMessage);
        return res.status(500).send(`ERROR: ${errorMessage}`);
    }
}

export const blankUrlController = (req, res, next) => {
    return res.send("try GET /filteredimage?image_url={{URL}}");
}
