import {useState} from "react";
import {toast} from "react-toastify";
import {create} from "ipfs-http-client";

const projectId = '2DBANLQn7hrUUpcJH4txsjAKNKK';
const projectSecret = 'a73163527f7255218c1d5e056f6a18fc';

const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth
    }
});


// const client = create("https://ipfs.infura.io:5001/api/v0");

const useIpfsUpload = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    /**
   * function to upload data to ipfs
   * @param {File | object} info or file data to be uploaded to ipfs
   * @returns {Promise < Object >} ipfs data
   */
    const ipfsUploadMutation = async (info) => {
        setIsLoading(true);
        return client.add(info).then((response) => {
            setIsLoading(false);
            setData(response);
            return response;
        }).catch((error) => {
            toast.error(`Failed to upload file to IPFS ${error}`);
        });
    };

    return {ipfsUploadMutation, data, isLoading};
};

export default useIpfsUpload;
