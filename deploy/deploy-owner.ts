import { WalletTypes, toNano } from "locklift";

export default async () => {
  const accounts = await locklift.deployments.deployAccounts(
    [
      {
        deploymentName: "Owner",
        signerId: "1",
        accountSettings: {
          type: WalletTypes.EverWallet,
          value: toNano(2),
        },
      },
    ],
    true,
  );


  await locklift.provider.sendMessage({
    sender: accounts[0].account.address,
    recipient: accounts[0].account.address,
    amount: toNano(0.5),
    bounce: false,
  });



};

export const tag = "owner";
