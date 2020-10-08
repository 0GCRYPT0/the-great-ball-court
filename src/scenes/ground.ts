// The texture for the ground is setup in here. Will need to come back and clean this up.

export function CreateGround(): void {
    const scene = new Entity()
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scene.addComponentOrReplace(transform)
engine.addEntity(scene)

const floorBaseGrass_02 = new Entity()
floorBaseGrass_02.setParent(scene)
const gltfShape = new GLTFShape('src/models/FloorBaseGrass_02/FloorBaseGrass_02.glb')
floorBaseGrass_02.addComponentOrReplace(gltfShape)
const transform_2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02.addComponentOrReplace(transform_2)
engine.addEntity(floorBaseGrass_02)

const floorBaseGrass_02_2 = new Entity()
floorBaseGrass_02_2.setParent(scene)
floorBaseGrass_02_2.addComponentOrReplace(gltfShape)
const transform_3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_2.addComponentOrReplace(transform_3)
engine.addEntity(floorBaseGrass_02_2)

const floorBaseGrass_02_3 = new Entity()
floorBaseGrass_02_3.setParent(scene)
floorBaseGrass_02_3.addComponentOrReplace(gltfShape)
const transform_4 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_3.addComponentOrReplace(transform_4)
engine.addEntity(floorBaseGrass_02_3)

const floorBaseGrass_02_4 = new Entity()
floorBaseGrass_02_4.setParent(scene)
floorBaseGrass_02_4.addComponentOrReplace(gltfShape)
const transform_5 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_4.addComponentOrReplace(transform_5)
engine.addEntity(floorBaseGrass_02_4)

// const floorBaseGrass_02_5 = new Entity()
// floorBaseGrass_02_5.setParent(scene)
// floorBaseGrass_02_5.addComponentOrReplace(gltfShape)
// const transform_6 = new Transform({
//   position: new Vector3(72, 0, 8),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// floorBaseGrass_02_5.addComponentOrReplace(transform_6)
// engine.addEntity(floorBaseGrass_02_5)

// const floorBaseGrass_02_6 = new Entity()
// floorBaseGrass_02_6.setParent(scene)
// floorBaseGrass_02_6.addComponentOrReplace(gltfShape)
// const transform_7 = new Transform({
//   position: new Vector3(88, 0, 8),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// floorBaseGrass_02_6.addComponentOrReplace(transform_7)
// engine.addEntity(floorBaseGrass_02_6)

// const floorBaseGrass_02_7 = new Entity()
// floorBaseGrass_02_7.setParent(scene)
// floorBaseGrass_02_7.addComponentOrReplace(gltfShape)
// const transform_8 = new Transform({
//   position: new Vector3(104, 0, 8),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// floorBaseGrass_02_7.addComponentOrReplace(transform_8)
// engine.addEntity(floorBaseGrass_02_7)

// const floorBaseGrass_02_8 = new Entity()
// floorBaseGrass_02_8.setParent(scene)
// floorBaseGrass_02_8.addComponentOrReplace(gltfShape)
// const transform_9 = new Transform({
//   position: new Vector3(120, 0, 8),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// floorBaseGrass_02_8.addComponentOrReplace(transform_9)
// engine.addEntity(floorBaseGrass_02_8)

const floorBaseGrass_02_9 = new Entity()
floorBaseGrass_02_9.setParent(scene)
floorBaseGrass_02_9.addComponentOrReplace(gltfShape)
const transform_10 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_9.addComponentOrReplace(transform_10)
engine.addEntity(floorBaseGrass_02_9)

const floorBaseGrass_02_10 = new Entity()
floorBaseGrass_02_10.setParent(scene)
floorBaseGrass_02_10.addComponentOrReplace(gltfShape)
const transform_11 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_10.addComponentOrReplace(transform_11)
engine.addEntity(floorBaseGrass_02_10)

const floorBaseGrass_02_11 = new Entity()
floorBaseGrass_02_11.setParent(scene)
floorBaseGrass_02_11.addComponentOrReplace(gltfShape)
const transform_12 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_11.addComponentOrReplace(transform_12)
engine.addEntity(floorBaseGrass_02_11)

const floorBaseGrass_02_12 = new Entity()
floorBaseGrass_02_12.setParent(scene)
floorBaseGrass_02_12.addComponentOrReplace(gltfShape)
const transform_13 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_12.addComponentOrReplace(transform_13)
engine.addEntity(floorBaseGrass_02_12)

// const floorBaseGrass_02_13 = new Entity()
// floorBaseGrass_02_13.setParent(scene)
// floorBaseGrass_02_13.addComponentOrReplace(gltfShape)
// const transform_14 = new Transform({
//   position: new Vector3(72, 0, 24),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// floorBaseGrass_02_13.addComponentOrReplace(transform_14)
// engine.addEntity(floorBaseGrass_02_13)

// const floorBaseGrass_02_14 = new Entity()
// floorBaseGrass_02_14.setParent(scene)
// floorBaseGrass_02_14.addComponentOrReplace(gltfShape)
// const transform_15 = new Transform({
//   position: new Vector3(88, 0, 24),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// floorBaseGrass_02_14.addComponentOrReplace(transform_15)
// engine.addEntity(floorBaseGrass_02_14)

// const floorBaseGrass_02_15 = new Entity()
// floorBaseGrass_02_15.setParent(scene)
// floorBaseGrass_02_15.addComponentOrReplace(gltfShape)
// const transform_16 = new Transform({
//   position: new Vector3(104, 0, 24),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// floorBaseGrass_02_15.addComponentOrReplace(transform_16)
// engine.addEntity(floorBaseGrass_02_15)

// const floorBaseGrass_02_16 = new Entity()
// floorBaseGrass_02_16.setParent(scene)
// floorBaseGrass_02_16.addComponentOrReplace(gltfShape)
// const transform_17 = new Transform({
//   position: new Vector3(120, 0, 24),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// floorBaseGrass_02_16.addComponentOrReplace(transform_17)
// engine.addEntity(floorBaseGrass_02_16)

const floorBaseGrass_02_17 = new Entity()
floorBaseGrass_02_17.setParent(scene)
floorBaseGrass_02_17.addComponentOrReplace(gltfShape)
const transform_18 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_17.addComponentOrReplace(transform_18)
engine.addEntity(floorBaseGrass_02_17)

const floorBaseGrass_02_18 = new Entity()
floorBaseGrass_02_18.setParent(scene)
floorBaseGrass_02_18.addComponentOrReplace(gltfShape)
const transform_19 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_18.addComponentOrReplace(transform_19)
engine.addEntity(floorBaseGrass_02_18)

const floorBaseGrass_02_19 = new Entity()
floorBaseGrass_02_19.setParent(scene)
floorBaseGrass_02_19.addComponentOrReplace(gltfShape)
const transform_20 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_19.addComponentOrReplace(transform_20)
engine.addEntity(floorBaseGrass_02_19)

const floorBaseGrass_02_20 = new Entity()
floorBaseGrass_02_20.setParent(scene)
floorBaseGrass_02_20.addComponentOrReplace(gltfShape)
const transform_21 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_20.addComponentOrReplace(transform_21)
engine.addEntity(floorBaseGrass_02_20)

// const floorBaseGrass_02_21 = new Entity()
// floorBaseGrass_02_21.setParent(scene)
// floorBaseGrass_02_21.addComponentOrReplace(gltfShape)
// const transform_22 = new Transform({
//   position: new Vector3(72, 0, 40),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// floorBaseGrass_02_21.addComponentOrReplace(transform_22)
// engine.addEntity(floorBaseGrass_02_21)

// const floorBaseGrass_02_22 = new Entity()
// floorBaseGrass_02_22.setParent(scene)
// floorBaseGrass_02_22.addComponentOrReplace(gltfShape)
// const transform_23 = new Transform({
//   position: new Vector3(88, 0, 40),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// floorBaseGrass_02_22.addComponentOrReplace(transform_23)
// engine.addEntity(floorBaseGrass_02_22)

// const floorBaseGrass_02_23 = new Entity()
// floorBaseGrass_02_23.setParent(scene)
// floorBaseGrass_02_23.addComponentOrReplace(gltfShape)
// const transform_24 = new Transform({
//   position: new Vector3(104, 0, 40),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// floorBaseGrass_02_23.addComponentOrReplace(transform_24)
// engine.addEntity(floorBaseGrass_02_23)

// const floorBaseGrass_02_24 = new Entity()
// floorBaseGrass_02_24.setParent(scene)
// floorBaseGrass_02_24.addComponentOrReplace(gltfShape)
// const transform_25 = new Transform({
//   position: new Vector3(120, 0, 40),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// floorBaseGrass_02_24.addComponentOrReplace(transform_25)
// engine.addEntity(floorBaseGrass_02_24)

const floorBaseGrass_02_25 = new Entity()
floorBaseGrass_02_25.setParent(scene)
floorBaseGrass_02_25.addComponentOrReplace(gltfShape)
const transform_26 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_25.addComponentOrReplace(transform_26)
engine.addEntity(floorBaseGrass_02_25)

const floorBaseGrass_02_26 = new Entity()
floorBaseGrass_02_26.setParent(scene)
floorBaseGrass_02_26.addComponentOrReplace(gltfShape)
const transform_27 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_26.addComponentOrReplace(transform_27)
engine.addEntity(floorBaseGrass_02_26)

const floorBaseGrass_02_27 = new Entity()
floorBaseGrass_02_27.setParent(scene)
floorBaseGrass_02_27.addComponentOrReplace(gltfShape)
const transform_28 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_27.addComponentOrReplace(transform_28)
engine.addEntity(floorBaseGrass_02_27)

const floorBaseGrass_02_28 = new Entity()
floorBaseGrass_02_28.setParent(scene)
floorBaseGrass_02_28.addComponentOrReplace(gltfShape)
const transform_29 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_28.addComponentOrReplace(transform_29)
engine.addEntity(floorBaseGrass_02_28)

const floorBaseGrass_02_29 = new Entity()
floorBaseGrass_02_29.setParent(scene)
floorBaseGrass_02_29.addComponentOrReplace(gltfShape)
const transform_30 = new Transform({
  position: new Vector3(8, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_29.addComponentOrReplace(transform_30)
engine.addEntity(floorBaseGrass_02_29)

const floorBaseGrass_02_30 = new Entity()
floorBaseGrass_02_30.setParent(scene)
floorBaseGrass_02_30.addComponentOrReplace(gltfShape)
const transform_31 = new Transform({
  position: new Vector3(24, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_30.addComponentOrReplace(transform_31)
engine.addEntity(floorBaseGrass_02_30)

const floorBaseGrass_02_31 = new Entity()
floorBaseGrass_02_31.setParent(scene)
floorBaseGrass_02_31.addComponentOrReplace(gltfShape)
const transform_32 = new Transform({
  position: new Vector3(40, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_31.addComponentOrReplace(transform_32)
engine.addEntity(floorBaseGrass_02_31)

const floorBaseGrass_02_32 = new Entity()
floorBaseGrass_02_32.setParent(scene)
floorBaseGrass_02_32.addComponentOrReplace(gltfShape)
const transform_33 = new Transform({
  position: new Vector3(56, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_32.addComponentOrReplace(transform_33)
engine.addEntity(floorBaseGrass_02_32)

const floorBaseGrass_02_42 = new Entity()
floorBaseGrass_02_42.setParent(scene)
floorBaseGrass_02_42.addComponentOrReplace(gltfShape)
const transform_43 = new Transform({
  position: new Vector3(24, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_42.addComponentOrReplace(transform_43)
engine.addEntity(floorBaseGrass_02_42)

const floorBaseGrass_02_43 = new Entity()
floorBaseGrass_02_43.setParent(scene)
floorBaseGrass_02_43.addComponentOrReplace(gltfShape)
const transform_44 = new Transform({
  position: new Vector3(40, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_43.addComponentOrReplace(transform_44)
engine.addEntity(floorBaseGrass_02_43)

const floorBaseGrass_02_44 = new Entity()
floorBaseGrass_02_44.setParent(scene)
floorBaseGrass_02_44.addComponentOrReplace(gltfShape)
const transform_45 = new Transform({
  position: new Vector3(56, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_44.addComponentOrReplace(transform_45)
engine.addEntity(floorBaseGrass_02_44)

const floorBaseGrass_02_45 = new Entity()
floorBaseGrass_02_45.setParent(scene)
floorBaseGrass_02_45.addComponentOrReplace(gltfShape)
const transform_46 = new Transform({
  position: new Vector3(8, 0, 88),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_45.addComponentOrReplace(transform_46)
engine.addEntity(floorBaseGrass_02_45)

const floorBaseGrass_02_52 = new Entity()
floorBaseGrass_02_52.setParent(scene)
floorBaseGrass_02_52.addComponentOrReplace(gltfShape)
const transform_53 = new Transform({
  position: new Vector3(24, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_52.addComponentOrReplace(transform_53)
engine.addEntity(floorBaseGrass_02_52)

const floorBaseGrass_02_53 = new Entity()
floorBaseGrass_02_53.setParent(scene)
floorBaseGrass_02_53.addComponentOrReplace(gltfShape)
const transform_54 = new Transform({
  position: new Vector3(40, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_53.addComponentOrReplace(transform_54)
engine.addEntity(floorBaseGrass_02_53)

const floorBaseGrass_02_54 = new Entity()
floorBaseGrass_02_54.setParent(scene)
floorBaseGrass_02_54.addComponentOrReplace(gltfShape)
const transform_55 = new Transform({
  position: new Vector3(56, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_54.addComponentOrReplace(transform_55)
engine.addEntity(floorBaseGrass_02_54)

const floorBaseGrass_02_55 = new Entity()
floorBaseGrass_02_55.setParent(scene)
floorBaseGrass_02_55.addComponentOrReplace(gltfShape)
const transform_56 = new Transform({
  position: new Vector3(8, 0, 104),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_55.addComponentOrReplace(transform_56)
engine.addEntity(floorBaseGrass_02_55)

const floorBaseGrass_02_62 = new Entity()
floorBaseGrass_02_62.setParent(scene)
floorBaseGrass_02_62.addComponentOrReplace(gltfShape)
const transform_63 = new Transform({
  position: new Vector3(24, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_62.addComponentOrReplace(transform_63)
engine.addEntity(floorBaseGrass_02_62)

const floorBaseGrass_02_63 = new Entity()
floorBaseGrass_02_63.setParent(scene)
floorBaseGrass_02_63.addComponentOrReplace(gltfShape)
const transform_64 = new Transform({
  position: new Vector3(40, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_63.addComponentOrReplace(transform_64)
engine.addEntity(floorBaseGrass_02_63)

const floorBaseGrass_02_64 = new Entity()
floorBaseGrass_02_64.setParent(scene)
floorBaseGrass_02_64.addComponentOrReplace(gltfShape)
const transform_65 = new Transform({
  position: new Vector3(56, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_64.addComponentOrReplace(transform_65)
engine.addEntity(floorBaseGrass_02_64)

const floorBaseGrass_02_65 = new Entity()
floorBaseGrass_02_65.setParent(scene)
floorBaseGrass_02_65.addComponentOrReplace(gltfShape)
const transform_66 = new Transform({
  position: new Vector3(8, 0, 120),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseGrass_02_65.addComponentOrReplace(transform_66)
engine.addEntity(floorBaseGrass_02_65)


}