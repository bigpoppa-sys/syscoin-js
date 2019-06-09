// @formatter:off
    // == Blockchain ==
import {
    AssetAllocationBalanceQuery,
    AssetAllocationBalanceQueryWithGuid,
    Asset,
    AssetNewRequest,
    AssetNewResponse,
    AssetInfoRequest,
    EthHeaders,
    ListAssetIndexOptions,
    ListAssetOptions,
    PbstPayloadInfo,
    RawTx,
    RpcResponse,
    SyscoinAddressEntry,
    TpsRawTx,
    Transaction,
    TransactionData,
    TxHeader, GetTransactionRequest, ListTransactionsRequest, TransactionListEntry, AssetTransferRequest, HexResponse, AssetAllocationSendManyRequest, AssetSendRequest, AssetSendManyRequest, AssetAllocationSendRequest, AssetAllocation, AssetAllocationInfoRequest, WalletInfo, NetworkInfo, BlockchainInfo, AddressInfo, AssetAllocationAmount
} from "./index"; import { ListAssetIndexAssetsRequest } from "./model/sys4/listAssetIndexAssetsRequest"; import { AssetUpdateRequest } from "./model/sys4/assetUpdateRequest";

export interface RPCServiceFunctions {
    getBestBlockHash(): Promise<any>;
    getBlock(blockHash: string, verbosity?: number ): Promise<any>;
    getBlockchainInfo(): Promise<BlockchainInfo>;
    getBlockCount(): Promise<any>;
    getBlockFilter(blockHash: string, filterType?: string ): Promise<any>;
    getBlockHash(height: number): Promise<any>;
    getBlockHeader(blockHash: string, verbose?: number): Promise<any>;
    getBlockStats(hashOrHeight: string, stats?: number): Promise<any>;
    getChainTips(count?: number, branchLength?: number): Promise<any>;
    getChainTxStats(nBlocks?: number, blockHash?: number): Promise<any>;
    getDifficulty(): Promise<any>;
    getMemPoolAncestors(txid: string, verbose?: number ): Promise<any>;
    getMemPoolDescendants(txid: string, verbose?: number): Promise<any>;
    getMemPoolEntry(txid: string): Promise<any>;
    getMemPoolInfo(): Promise<any>;
    getRawMemPool(verbose?: number): Promise<any>;
    getTxOut(txid: string, voutNumber: number, includeMempool?: boolean): Promise<any>;
    getTxOutProof(txids: Array<string>, blockHash: string): Promise<any>;
    getTxOutSetInfo(): Promise<any>;
    preciousBlock(blockHash: string): Promise<any>;
    pruneBlockchain(blockHeight: number): Promise<any>;
    saveMemPool(): Promise<any>;
    scanTxOutSet(action: string, scanObjects: Array<any>): Promise<any>;
    verifyChain(checkLevel?: number, numberOfBlocksToCheck?: number): Promise<any>;
    verifyTxOutProof(proof: string): Promise<any>;

    // == Control ==
    getMemoryInfo(mode?: string): Promise<any>;
    getRpcInfo(): Promise<any>;
    help(command?: string): Promise<any>;
    logging(includeCategories?: Array<string>, excludeCategories?: Array<string>): Promise<any>;
    stop(): Promise<any>;
    uptime(): Promise<any>;

    // == Generating ==
    generate(numberOfBlocks: number, maxTries?: number): Promise<any>;
    generateToAddress(numberOfBlocks: number, address: string, maxTries?: number): Promise<any>;

    // == Mining ==
    createAuxBlock(address: string): Promise<any>;
    getAuxBlock(blockHash?: string, auxPow?: string): Promise<any>;
    getBlockTemplate(blockTemplate: string): Promise<any>;
    getMiningInfo(): Promise<any>;
    getNetworkHashesPerSecond(numberOfBlocks: number, blockHeight: number): Promise<any>;
    prioritiseTransaction(txid: string, dummy: null, feeDeltaInSatoshis: number): Promise<any>;
    submitAuxBlock(blockHash: string, auxPow: string): Promise<any>;
    submitBlock(hexDataToSubmit: string): Promise<any>;
    submitHeader(hexData: string): Promise<any>;

    // == Network ==
    addNode(nodeAddress: string): Promise<any>;
    clearBanned(): Promise<any>;
    disconnectNode(nodeAddress: string, nodeId: number): Promise<any>;
    getAddedNodeInfo(nodeAddress: string): Promise<any>;
    getConnectionCount(): Promise<any>;
    getNetTotals(): Promise<any>;
    getNetworkInfo(): Promise<NetworkInfo>;
    getNodeAddresses(): Promise<any>;
    getPeerInfo(): Promise<any>;
    getInfo(): Promise<any>;
    listBanned(): Promise<any>;
    ping(): Promise<any>;
    setBan(subnet: string, command: string, banTime?: number):Promise<any>;

    // == Rawtransactions ==
    analyzePsbt(pbst: string): Promise<any>;
    combinePsbt(pbsts: Array<string>): Promise<any>;
    combineRawTransaction(hexs: Array<string>): Promise<any>;
    convertToPsbt(hex: string, permitSigData?: number, isWitness?: number): Promise<any>;
    createPsbt(txHeaders: Array<TxHeader>, payloadInfo: Array<PbstPayloadInfo>, locktime?: number, replaceable?: number): Promise<any>;
    createRawTransaction(txHeaders: Array<TxHeader>, payloadInfo: Array<PbstPayloadInfo>, locktime?: number, replaceable?: number): Promise<any>;
    decodePsbt(pbst: string): Promise<any>;
    decodeRawTransaction(hexString: string, isWitness?: boolean): Promise<any>;
    decodeScript(hexString: string): Promise<any>;
    finalizePsbt(pbst: string, extract?: number): Promise<any>;
    fundRawTransaction(hexString: string, options?: number, isWitness?: number): Promise<any>;
    getRawTransaction(txid: string, verbose?: number, blockHash?: string): Promise<any>;
    joinPsbts(pbsts: Array<string>): Promise<any>;
    sendRawTransaction(hexString: string, maxFeeRate?: number): Promise<any>;
    signRawTransactionWithKey(hexString: string, privateKeys: Array<string>, txs?: Array<TransactionData>, sigHashType?: string): Promise<any>;
    testMempoolAccept(rawTxs: Array<string>, maxFeeRate?: number): Promise<any>;
    utxoUpdatePsbt(pbst: string): Promise<any>;

    // == Syscoin ==
    addressBalance(address: string): Promise<any>;
    assetAllocationBalance(assetGuid: number, address: string): Promise<any>;
    assetAllocationBurn(assetGuid: number, address: string, amount: number, ethAddress: string): Promise<any>;
    assetAllocationInfo(assetGuid: number, address: string): Promise<AssetAllocation>;
    assetAllocationLock(assetGuid: number, addressFrom: string, txid: string, outputIndex: number, witness?: string): Promise<any>;
    assetAllocationMint(assetGuid: number, address: string, amount: number, blockNum: number, txHex: string, txRootHex: string, merkleProofHex: string, merkleProofPathHex: string, witness?: string): Promise<any>;
    assetAllocationSend(assetGuid: number, addressFrom: string, addressTo: string, amount: number): Promise<HexResponse>;
    assetAllocationSenderStatus(assetGuid: number, address: string, txid: string): Promise<any>;
    assetAllocationSendMany(assetGuid: number, addressFrom: string, amounts: AssetAllocationAmount[], witness: string): Promise<HexResponse>;
    assetInfo(assetGuid: number): Promise<Asset>;
    assetNew(address: string, symbol: string, public_value: string, contract: string, precision: number, total_supply: number, max_supply: number, update_flags: number, witness: string): Promise<AssetNewResponse>;
    assetSend(assetGuid: number, addressTo: string, amount: number): Promise<HexResponse>;
    assetSendMany(assetGuid: number, amounts: AssetAllocationAmount[], witness: string): Promise<HexResponse>;
    assetTransfer(assetGuid: number, address: string, witness: string): Promise<HexResponse>;
    assetUpdate(assetGuid?: number, publicValue?: string, contract?: string, supply?: number, updateFlags?: number, witness?: string): Promise<HexResponse>;
    convertAddress(address: string): Promise<any>;
    getBlockHashByTxid(txid: string): Promise<any>;
    getGovernanceInfo(): Promise<any>;
    getSuperblockBudget(index: number): Promise<any>;
    gObject(command: string): Promise<any>;
    listAssetAllocationMempoolBalances(count?: number, from?: number, query?: AssetAllocationBalanceQuery): Promise<any>;
    listAssetAllocations(count?: number, from?: number, query?: AssetAllocationBalanceQueryWithGuid): Promise<any>;
    listAssetIndex(page?: number, options?: ListAssetIndexOptions): Promise<any>;
    listAssetIndexAllocations(address: string): Promise<AssetAllocation[]>;
    listAssetIndexAssets(address: string): Promise<Asset[]>;
    listAssets(count?: number, from?: number, options?: ListAssetOptions): Promise<any>;
    masternode(command: string): Promise<any>;
    masternodeBroadcast(command: string): Promise<any>;
    masternodeList(mode?: string, filter?: string): Promise<any>;
    mnSync(command: string): Promise<any>;
    sentinelPing(version: number): Promise<any>;
    spork(command: string): Promise<any>;
    syscoinBurn(fundingAddress: string, amount: number, ethAddress: string): Promise<any>;
    syscoinDecodeRawTransaction(hexString: number): Promise<any>;
    syscoinGetSpvProof(txid: string, blockHash?: string): Promise<any>;
    syscoinMint(address: string, amount: number, blockNum: number, txHex: string, txRootHex: string, txMerkleProofHex: string, witness?: string): Promise<any>;
    syscoinSetEthHeaders(headers: EthHeaders): Promise<any>;
    syscoinSetEthStatus(syncStatus: string, highestBlock: number): Promise<any>;
    syscoinStartGeth(): Promise<any>;
    syscoinStopGeth(): Promise<any>;
    syscoinTxFund(hexString: string, address: string, outputIndex: number): Promise<any>;
    tpsTestAdd(startTime, rawTxs?: Array<TpsRawTx>): Promise<any>;
    tpsTestInfo(): Promise<any>;
    tpsTestSetEnabled(enabled: number): Promise<any>;
    voteRaw(mnTxHash: string, mnTxIndex: number, govHash: string, votSignal: string, vote: string, time: number, voteSig: string): Promise<any>;

    // == Util ==
    createMultiSig(numberOfRequiredSignatures: number, keys: Array<string>, addressType?: string): Promise<any>;
    deriveAddress(descriptor: string, range?: number): Promise<any>;
    estimateSmartFee(confTarget: number, estimateMode?: string): Promise<any>;
    getDescriptorInfo(descriptor: string): Promise<any>;
    signMessageWithPrivKey(privateKey: string, message: string): Promise<any>;
    validateAddress(address: string): Promise<any>;
    verifyMessage(address: string, signature: string, message: string): Promise<any>;

    // == Wallet ==
    abandonTransaction(txid: string): Promise<any>;
    abortRescan(): Promise<any>;
    addMultiSigAddress(nRequired: number, keys: Array<string>, label?: string, addressType?: string): Promise<any>;
    backupWallet(destination: string): Promise<any>;
    bumpFee(txid: string, options?: any): Promise<any>;
    createWallet(walletName: string, disablePrivKeys?: boolean, blank?: boolean, passphrase?: string): Promise<any>;
    dumpPrivKey(address: string): Promise<any>;
    dumpWallet(fileName: string): Promise<any>;
    encryptWallet(passphrase: string): Promise<any>;
    getAddressesByLabel(label: string): Promise<any>;
    getAddressInfo(address: string): Promise<AddressInfo>;
    getBalance(dummy: string, minconf: number, includeWatchOnly: number): Promise<any>;
    getNewAddress(label?: string, addressType?: string): Promise<any>;
    getRawChangeAddress(addressType?: string): Promise<any>;
    getReceivedByAddress(address: string, minConf?: number): Promise<any>;
    getReceivedByLabel(label: string, minConf?: number): Promise<any>;
    getTransaction(txid: string, includeWatchOnly?: boolean): Promise<Transaction>;
    getUnconfirmedBalance(): Promise<any>;
    getWalletInfo(): Promise<WalletInfo>;
    importAddress(address: string, label?: string, rescan?: number, p2sh?: number): Promise<any>;
    importMulti(requests: string, options: any): Promise<any>;
    importPrivKey(key: string, label?: string, rescan?: number): Promise<any>;
    importPrunedFunds(rawTx: string, txOutProof: string): Promise<any>;
    importPubKey(pubKey: string, label?: string, rescan?: number): Promise<any>;
    importWallet(fileName: string): Promise<any>;
    keypoolRefill(newSize?: number): Promise<any>;
    listAddressGroupings(): Promise<any>;
    listLabels(purpose?: string): Promise<any>;
    listLockUnspent(): Promise<any>;
    listReceivedByAddress(minConf?: number, includeEmpty?: boolean, includeWatchOnly?: boolean, addressFilter?: string): Promise<SyscoinAddressEntry[]>;
    listReceivedByLabel(minConf?: number, includeEmpty?: boolean, includeWatchOnly?: boolean): Promise<any>;
    listSinceBlock(blockHash?: string, targetConfs?: number, includeWatchOnly?: number, includeRemoved?: number): Promise<any>;
    listTransactions(request: ListTransactionsRequest): Promise<Array<TransactionListEntry>>;
    listUnspent(minConf?: number, maxConf?: number, addresses?: Array<string>, includeUnsafe?: number, query?: any, options?: any): Promise<any>;
    listWalletDir(): Promise<any>;
    listWallets(): Promise<any>;
    loadWallet(fileName: string): Promise<any>;
    lockUnspent(unlock: number, txs?: Array<{ txid: string, vout: number }>): Promise<any>;
    removePrunedFunds(txid: string): Promise<any>;
    rescanBlockchain(start?: number, stop?: number): Promise<any>;
    sendMany(dummy: string, amounts: Array<{ [address: string]: number }>, minConf?: number, comment?: string, subtractFeeFrom?: Array<string>, replaceable?: boolean, confTarget?: number, estimateMode?: string): Promise<any>;
    sendToAddress(address: string, amount: number, minConf?: number, comment?: string, comment_to?: string, subtractFeeFromAmount?: number, replaceable?: boolean, confTarget?: number, estimateMode?: string): Promise<any>;
    setHdSeed(newKeyPool?: number, seed?: string): Promise<any>;
    setLabel(address: string, label: string): Promise<any>;
    setTxFee(amount: number): Promise<any>;
    signMessage(address: string, message: string): Promise<any>;
    signRawTransactionWithWallet(hexString: string, rawTxs?: Array<RawTx>, sigHashType?: string): Promise<any>;
    unloadWallet(walletName?: string): Promise<any>;
    walletCreateFundedPsbt(txs: any, amounts: any, lockTime?: any, options?: any, bip32derivs?: any): Promise<any>;
    walletLock(): Promise<any>;
    walletPassphrase(passphrase: string, timeout: number): Promise<any>;
    walletPassphraseChange(oldPass: string, newPass: string): Promise<any>;
    walletProcessPsbt(pbst: string, sign?: number, sigHashType?: string, bip32derivs?: number): Promise<any>;
    // @formatter:on

    //exposed for unit testing
    callThroughToRpc(args): Promise<any>;
    unwrapRpcResponse(response: RpcResponse | any): any;

}
