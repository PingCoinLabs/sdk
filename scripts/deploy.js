async function main() {
  const PingCoin = await ethers.getContractFactory("PingCoin");
  const ping = await PingCoin.deploy(1000000);

  await ping.waitForDeployment();

  console.log("PingCoin deployed to:", await ping.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
