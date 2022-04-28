import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { IdeasNftExchange } from "../target/types/ideas_nft_exchange";

describe("ideas-nft-exchange", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.IdeasNftExchange as Program<IdeasNftExchange>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
