async function main() {
    await locklift.deployments.load();
    const owner = locklift.deployments.getAccount("Owner").account;
    
    console.log(owner.address);
    console.log(locklift.deployments.needToRedeploy("Owner", "Account"));

        
    await locklift.provider.sendMessage({
      sender: owner.address,
      recipient: owner.address,
      amount: locklift.utils.toNano(0.5),
      bounce: false
    });
  }
  
  main()
    .then(() => process.exit(0))
    .catch(e => {
      console.log(e);
      process.exit(1);
    });
  

