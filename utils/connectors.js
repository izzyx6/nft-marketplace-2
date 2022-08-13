import {InjectedConnector} from "@web3-react/injected-connector";
import {FortmaticConnector} from "@web3-react/fortmatic-connector";

const injected = new InjectedConnector({
    supportedChainIds: [137, 80001]

});

const fortmatic = new FortmaticConnector({apiKey: process.env.NEXT_PUBLIC_FORTMATIC_API_KEY, chainId: 4});

export {
    injected,
    fortmatic
};
