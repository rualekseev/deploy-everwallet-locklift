export default async () => {
  const signer = await locklift.keystore.getSigner('0');

  await locklift.deployments.deploy({
    deployConfig: {
        contract: "SafeMultisigWallet",
        publicKey: signer.publicKey,
        constructorParams: { owners: [signer.publicKey], reqConfirms: 1 },
        value: locklift.utils.toNano(2)
    },
    deploymentName: "msig",// user-defined custom name
    },
    true // enable logs
  );

};

export const tag = "msig";