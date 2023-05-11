const Block = require("./Block");
const GENESIS_DATA = require("./config");

describe('Block', () => {  

    const timestamp = Date.now().toString();
    const data = {
        "sender": "marrvin",
        "amount": "1 BTC",
        "receiver": "tompa"
    };
    const hash = "245645fdag345";
    const lastHash = "0";

    const block = new Block({ timestamp, data, hash, lastHash });

    it('should have a timestamp', () => {
        expect(block.timestamp).toEqual(timestamp)
    });

    it('should have data', () => {
        expect(block.data).toEqual(data)
    });

    it('should have a hash', () => {
        expect(block.hash).toEqual(hash)
    });

    it('should have a lastHash', () => {
        expect(block.lastHash).toEqual(lastHash)
    });

    it('should be an instance of Block ', () => {
        expect(block instanceof Block).toBe(true)
    });
});

describe('genesis function', () => {
    const genesisBlock = Block.genesis();

    it('should be an instance of Block', () => {
        expect(genesisBlock instanceof Block).toBeTruthy();
    });

    it('should return genesis data', () => {
        expect(genesisBlock).toEqual(GENESIS_DATA)
    });
});

describe('mineBlock function', () => {
    const lastBlock = Block.genesis();
    const data = 'New data';
    const minedBlock = Block.mineBlock({lastBlock, data});

    it('should return an instance of Block', () => {
        
        expect(minedBlock instanceof Block).toBeTruthy();
    });

    it('should set the lastHash to the hash of the previous block', () => {
        expect(minedBlock.lastHash).toEqual(lastBlock.hash)
    });

    it('should set data', () => {
        expect(minedBlock.data).toEqual(data)
    });

    it('should have timestamp', () => {
        expect(minedBlock.timestamp).not.toEqual(undefined)
    });
});