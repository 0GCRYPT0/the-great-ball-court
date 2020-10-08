import { getProvider } from '@decentraland/web3-provider'
import { getUserPublicKey } from "@decentraland/Identity"
import { CreateBallCourt } from "./scenes/ballCourt";
import { CreateGround } from './scenes/ground'


const gameCanvas = new UICanvas();

const publicKeyRequest = executeTask(async () => {
  const provider = await getProvider()
  const publicKey = await getUserPublicKey()
  log(publicKey)
  return publicKey
})

class IDSystem implements ISystem {
  update() {
    if (publicKeyRequest.didFail) {
      log("error fetching id" + publicKeyRequest.error)
    } else {
      log("id:" + publicKeyRequest.result)
    }
  }
}


// Ball court was moved to another file
CreateGround();
CreateBallCourt(gameCanvas);