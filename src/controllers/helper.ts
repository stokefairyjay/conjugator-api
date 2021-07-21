export const health = async(req, res) : Promise<object> => {
    return res.status(200).send('ok');
}