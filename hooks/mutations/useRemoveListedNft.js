import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { nftaddress } from "../../config";
import toastUpdate from "../../utils/toastUpdate";

import useEthers from "../contexts/useEthers";

/**
 * hook to list nft for sale
 * @returns {{removeListingNftMutation: function}, {isLoading: bool}}
 */
const useListNft = () => {
  const [isLoading, setIsloading] = useState(false);
  const toastRef = useRef(null);
  const { signedMarketContract } = useEthers();

  /** function to list nft
   * @param {tokenId} tokenId id to be listed
   * @returns {Promise< object {transaction receipt data} >} self-descriptive
   */
  const removeListingNftMutation = async (tokenId) => {
    setIsloading(true);

    toastRef.current = toast("Waiting for transaction approval", {
      isLoading: true,
    });
    const transaction = await signedMarketContract
      .removeMarketSale(nftaddress, tokenId)
      .then(async (res) => {
        toastUpdate(
          toastRef.current,
          toast.TYPE.DEFAULT,
          "Processing transaction",
          true
        );
        return res
          .wait()
          .then((transactionReceipt) => {
            toastUpdate(
              toastRef.current,
              toast.TYPE.SUCCESS,
              "Listing successful!"
            );
            return transactionReceipt;
          })
          .catch((err) => {
            toastUpdate(toastRef.current, toast.TYPE.ERROR, err.message);
            return err;
          });
      })
      .catch((err) => {
        toastUpdate(toastRef.current, toast.TYPE.ERROR, err.message);
        return err;
      });

    setIsloading(false);

    return transaction;
  };

  return { removeListingNftMutation, isLoading };
};

export default useListNft;
