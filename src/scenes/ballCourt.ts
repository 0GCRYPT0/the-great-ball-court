import { ImageHint } from "../ui/imageHint"
import { ImageHint1, ImageHint2, ImageHint3, ImageHint5 } from "../ui/imageHint1"
import resources from "../resources"
import { CreateShapes } from "../components/shapes"

// Export as a function for game.ts to call in order to construct this room
export function CreateBallCourt(gameCanvas: UICanvas): void {

const myCourt = new Entity()


myCourt.addComponent(new GLTFShape("src/models/gbcprod/productionCourt1.glb"))
myCourt.addComponent(new Transform({ 
  position: new Vector3(39.5, 0, 56.8),
  rotation: new Quaternion(0, 0, 0, 0),
  scale: new Vector3(0.75, 1, .755)
}))

CreateShapes();

const art1Hint = new ImageHint(gameCanvas, resources.textures.fernHint);
art1Hint.container.visible = false;

const art2Hint = new ImageHint1(gameCanvas);
art2Hint.container.visible = false;

const art3Hint = new ImageHint2(gameCanvas);
art3Hint.container.visible = false;

const art4Hint = new ImageHint3(gameCanvas);
art4Hint.container.visible = false;

const art5Hint = new ImageHint5(gameCanvas);
art5Hint.container.visible = false;

const source = new AudioSource(resources.audioClips.courtWhistle)
myCourt.addComponent(source)

// Exhibit 1
myCourt.addComponent(
    new OnPointerDown(e => {
        log("button A Down", e.hit.meshName)
            if (e.hit.meshName === "SketchUp.267"){
                art1Hint.container.visible = true;
            }
            if (e.hit.meshName === "SketchUp.017" ){
                art2Hint.container.visible = true;
                source.playing = true
                source.playOnce()
            }
            if (e.hit.meshName === "SketchUp.012" ){
                art2Hint.container.visible = true;
                source.playing = true
                source.playOnce()
            }
            if (e.hit.meshName === "SketchUp.047" ){
                art3Hint.container.visible = true;
            }
            if (e.hit.meshName === "SketchUp.050" ){
                art4Hint.container.visible = true;
            }
            if (e.hit.meshName === "SketchUp.253" ){
                art4Hint.container.visible = true;
            }
            if (e.hit.meshName === "SketchUp.235" ){
                art5Hint.container.visible = true;
            }

    })
)



engine.addEntity(myCourt)




}