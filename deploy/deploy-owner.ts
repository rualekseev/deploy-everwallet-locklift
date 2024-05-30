import { WalletTypes, toNano } from "locklift";

export default async () => {
  await locklift.deployments.deployAccounts(
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


};

export const tag = "owner";
