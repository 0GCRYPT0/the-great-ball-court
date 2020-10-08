import resources from "../resources"

export function CreateShapes(): void {
    const myEntity = new Entity()
    const myEntity1 = new Entity()
    const myEntity2 = new Entity()
    const myEntity3 = new Entity()
    const myEntity4 = new Entity()
    const myEntity5 = new Entity()
    const myEntity6 = new Entity()
    const myEntity7 = new Entity()
    const myEntity8 = new Entity()
    const myEntity9 = new Entity()
    const myEntity10 = new Entity()
    const mySign = new Entity()

    let box = new BoxShape()
    box.withCollisions = true
    myEntity.addComponent(box).visible = false
    myEntity.addComponent(new Transform({ 
      position: new Vector3(13.4, 9, 86),
      scale: new Vector3(10, 2, 10)
    }))
    
    let box1 = new BoxShape()
    box1.withCollisions = true
    myEntity1.addComponent(box1).visible = false
    myEntity1.addComponent(new Transform({ 
      position: new Vector3(13, 13.25, 86),
      scale: new Vector3(8, 1, 9)
    }))
    
    let box2 = new BoxShape()
    box2.withCollisions = true
    myEntity2.addComponent(box2).visible = false
    myEntity2.addComponent(new Transform({ 
      position: new Vector3(10.5, 13.25, 86),
      scale: new Vector3(2.5, 4, 8)
    }))
    
    let box3 = new BoxShape()
    box3.withCollisions = true
    myEntity3.addComponent(box3).visible = false
    myEntity3.addComponent(new Transform({ 
      position: new Vector3(14.3, 13, 82.3),
      scale: new Vector3(5, 4, 0.8)
    }))
    
    let box4 = new BoxShape()
    box4.withCollisions = true
    myEntity4.addComponent(box4).visible = false
    myEntity4.addComponent(new Transform({ 
      position: new Vector3(14.3, 13, 89.7),
      scale: new Vector3(5, 4, 0.8)
    }))
    
    // Blue art wall
    
    let box5 = new BoxShape()
    box5.withCollisions = true
    myEntity5.addComponent(box5).visible = false
    myEntity5.addComponent(new Transform({ 
      position: new Vector3(11, 12, 86),
      scale: new Vector3(2.5, 3.9, 1.9)
    }))
    
    let box6 = new BoxShape()
    box6.withCollisions = true
    myEntity6.addComponent(box6).visible = false
    myEntity6.addComponent(new Transform({ 
      position: new Vector3(13.9, 12, 84),
      scale: new Vector3(1.1, 3.9, 1.9)
    }))
    
    let box7 = new BoxShape()
    box7.withCollisions = true
    myEntity7.addComponent(box7).visible = false
    myEntity7.addComponent(new Transform({ 
      position: new Vector3(13.9, 12, 88),
      scale: new Vector3(1.1, 3.9, 1.9)
    }))

    let box8 = new BoxShape()
    box8.withCollisions = true
    myEntity8.addComponent(box8).visible = false
    myEntity8.addComponent(new Transform({ 
      position: new Vector3(50.3, 5, 92.95),
      scale: new Vector3(5, 8.1, 1)
    }))

    let box9 = new BoxShape()
    box9.withCollisions = true
    myEntity9.addComponent(box9).visible = false
    myEntity9.addComponent(new Transform({ 
      position: new Vector3(54.3, 0.7, 92.95),
      scale: new Vector3(2, 3, 1)
    }))

    let box10 = new BoxShape()
    box10.withCollisions = true
    myEntity10.addComponent(box10).visible = false
    myEntity10.addComponent(new Transform({ 
      position: new Vector3(53.3, 2.7, 92.95),
      scale: new Vector3(2, 3, 1)
    }))

    let sign = new PlaneShape()
    sign.withCollisions = true
    mySign.addComponent(sign)
    
    //Create a material
    const myMaterial000 = new Material()
    myMaterial000.albedoTexture = resources.textures.underRestoration
    
    //Assign the material to the entity
    mySign.addComponent(myMaterial000)
    mySign.addComponent(new Transform({ 
      position: new Vector3(3.3, 2, 86),
      rotation: new Quaternion.Euler(180, 90, 0),
      scale: new Vector3(4, 2, 3)
    }))
    
    engine.addEntity(mySign)
    engine.addEntity(myEntity)
    engine.addEntity(myEntity1)
    engine.addEntity(myEntity2)
    engine.addEntity(myEntity3)
    engine.addEntity(myEntity4)
    engine.addEntity(myEntity5)
    engine.addEntity(myEntity6)
    engine.addEntity(myEntity7)
    engine.addEntity(myEntity8)
    engine.addEntity(myEntity9)
    engine.addEntity(myEntity10)
}