require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain million hidden cloth fold spy'; 
let testAccounts = [
"0x34316d6396f7fbaa6b50ed383c8b34cc6c7e155ab17d511ca08d655d6bc553ca",
"0xcc9b6bff70f860892a234dea8bba4c7031a6ff30eca404adf2439c10aed1efeb",
"0xa04443c9509c7c9be5852c8f9b70f9d3c15d288c4bd7b66e2635357c41d33605",
"0xd3e4a0f224ed84c2fdc3e0f7bd2afce611c255fcf4fb65102c634e1ed4dc3405",
"0x258b2890a42d17de9f3eefa65e283647f6ea8f58657df69149123eb198649d0e",
"0x9d445532d6d0373fab16223f25c75db07fb629f601c06e2f51d13fc8ffab99fc",
"0x1da0cc584a89b6baf50cb13ec7d4f3c344f5e3b80c8386693209345382d4e704",
"0xe16b6eb050dac99e70efb2de759389f3a3357269ab07647c3587cd2a5b1099c7",
"0x2f7332062a514417313e586b7599b174b71018a38f3fb8d65ecd26e1e81b1151",
"0xdc5b8dda5ed413371bccf8a44c21a12b7fa42b5ee5fb8b9e49e7c8a7f8ae6e53"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
