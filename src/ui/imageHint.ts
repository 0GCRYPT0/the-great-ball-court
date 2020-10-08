import resources from "../resources"

export class ImageHint {
    // Expose the container for changing visibility
    public container: UIContainerRect;
  
    constructor(gameCanvas: UICanvas, texture: Texture) {
      this.container = new UIContainerRect(gameCanvas);
      this.container.width = "100%";
      this.container.height = "100%";
    //   this.container.color = Color4.Gray();
    //   this.container.opacity = 0.5;
  
      // Add the primary image
      const hintImage = new UIImage(this.container, texture);
      hintImage.sourceWidth = 768;
      hintImage.sourceHeight = 270;
      hintImage.width = 768;
      hintImage.height = 300;
    //   hintImage.positionX = 256;
      hintImage.positionY = 128;

      const hintText = new UIText(this.container);
      hintText.value = 'The central panels of the sidewalks show a \nprocession of warrior ball players, seven on \neach side of a skull-shaped circular central \nmotif, a symbol of death.'
      hintText.color = Color4.Black()
      hintText.fontSize = 34
      hintText.fontWeight = 'bold'
      hintText.width = 120
      hintText.height = 30
      hintText.vAlign = 'bottom'
      hintText.shadowColor = Color4.Gray()
      hintText.shadowOffsetX = 1
      hintText.shadowOffsetY = -1
      hintText.positionX = -240
      hintText.positionY = 128
    
      // And a close button to the top right
      const close = new UIImage(
        this.container,
        resources.textures.closeHintButton
      );
      close.sourceWidth = 92;
      close.sourceHeight = 92;
      close.width = 46;
      close.height = 46;
      close.positionX = 375;
      close.positionY = 256;
  
      // UI has a different way of registering OnClick support
      close.onClick = new OnClick((): void => {
        this.container.visible = false;
      });
    }
  }