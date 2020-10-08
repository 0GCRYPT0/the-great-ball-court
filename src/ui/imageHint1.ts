import resources from "../resources"

export class ImageHint1 {
    // Expose the container for changing visibility
    public container: UIContainerRect;
  
    constructor(gameCanvas: UICanvas) {
      this.container = new UIContainerRect(gameCanvas);
      this.container.width = "100%";
      this.container.height = "100%";
    //   this.container.color = Color4.Gray();
    //   this.container.opacity = 0.5;
  
      // Add the primary image
      

      const hintText = new UIText(this.container);
      hintText.value = 'The Mayans cherished the number 7, and \nwhen they built the great ball court at \nChichen Itza, they designed it to echo exactly \n7 times - widthwise. If you stand near the top \nor bottom of the court - lengthwise - you will \nhear that it only echoes once.'
      hintText.color = Color4.Black()
      hintText.fontSize = 34
      hintText.fontWeight = 'bold'
      hintText.width = 120
      hintText.height = 30
      hintText.vAlign = 'bottom'
      hintText.shadowColor = Color4.Gray()
      hintText.shadowOffsetX = 1
      hintText.shadowOffsetY = -1
      hintText.positionX = -275
      hintText.positionY = 200
    
      // And a close button to the top right
      const close = new UIImage(
        this.container,
        resources.textures.closeHintButton
      );
      close.sourceWidth = 92;
      close.sourceHeight = 92;
      close.width = 46;
      close.height = 46;
      close.positionX = 256;
      close.positionY = 100;
  
      // UI has a different way of registering OnClick support
      close.onClick = new OnClick((): void => {
        this.container.visible = false;
      });
    }
  }

  export class ImageHint2 {
    // Expose the container for changing visibility
    public container: UIContainerRect;
  
    constructor(gameCanvas: UICanvas) {
      this.container = new UIContainerRect(gameCanvas);
      this.container.width = "100%";
      this.container.height = "100%";
    //   this.container.color = Color4.Gray();
    //   this.container.opacity = 0.5;
  
      // Add the primary image
      

      const hintText = new UIText(this.container);
      hintText.value = 'South Temple'
      hintText.color = Color4.Black()
      hintText.fontSize = 60
      hintText.fontWeight = 'bold'
      hintText.width = 120
      hintText.height = 30
      hintText.vAlign = 'center'
      hintText.hAlign = 'center'
      hintText.shadowColor = Color4.Gray()
      hintText.shadowOffsetX = 1
      hintText.shadowOffsetY = -1
    //   hintText.positionX = -275
    //   hintText.positionY = 200
    
      // And a close button to the top right
      const close = new UIImage(
        this.container,
        resources.textures.closeHintButton
      );
      close.sourceWidth = 92;
      close.sourceHeight = 92;
      close.width = 46;
      close.height = 46;
      close.positionX = 256;
      close.positionY = 100;
  
      // UI has a different way of registering OnClick support
      close.onClick = new OnClick((): void => {
        this.container.visible = false;
      });
    }
  }

  export class ImageHint3 {
    // Expose the container for changing visibility
    public container: UIContainerRect;
  
    constructor(gameCanvas: UICanvas) {
      this.container = new UIContainerRect(gameCanvas);
      this.container.width = "100%";
      this.container.height = "100%";
    //   this.container.color = Color4.Gray();
    //   this.container.opacity = 0.5;
  
      // Add the primary image
      

      const hintText = new UIText(this.container);
      hintText.value = 'North Temple\nTemple of the Bearded Man'
      hintText.color = Color4.Black()
      hintText.fontSize = 60
      hintText.fontWeight = 'bold'
      hintText.width = 120
      hintText.height = 30
      hintText.vAlign = 'bottom'
      hintText.hAlign = 'center'
      hintText.shadowColor = Color4.Gray()
      hintText.shadowOffsetX = 1
      hintText.shadowOffsetY = -1
      hintText.positionX = -275
      hintText.positionY = 256
    
      // And a close button to the top right
      const close = new UIImage(
        this.container,
        resources.textures.closeHintButton
      );
      close.sourceWidth = 92;
      close.sourceHeight = 92;
      close.width = 46;
      close.height = 46;
      close.positionX = 256;
      close.positionY = 100;
  
      // UI has a different way of registering OnClick support
      close.onClick = new OnClick((): void => {
        this.container.visible = false;
      });
    }
  }

  export class ImageHint5 {
    // Expose the container for changing visibility
    public container: UIContainerRect;
  
    constructor(gameCanvas: UICanvas) {
      this.container = new UIContainerRect(gameCanvas);
      this.container.width = "100%";
      this.container.height = "100%";
    //   this.container.color = Color4.Gray();
    //   this.container.opacity = 0.5;
  
      // Add the primary image
      

      const hintText = new UIText(this.container);
      hintText.value = 'Upper Temple\nTemple of the Jaguar'
      hintText.color = Color4.Black()
      hintText.fontSize = 60
      hintText.fontWeight = 'bold'
      hintText.width = 120
      hintText.height = 30
      hintText.vAlign = 'bottom'
      hintText.hAlign = 'center'
      hintText.shadowColor = Color4.Gray()
      hintText.shadowOffsetX = 1
      hintText.shadowOffsetY = -1
      hintText.positionX = -275
      hintText.positionY = 256
    
      // And a close button to the top right
      const close = new UIImage(
        this.container,
        resources.textures.closeHintButton
      );
      close.sourceWidth = 92;
      close.sourceHeight = 92;
      close.width = 46;
      close.height = 46;
      close.positionX = 256;
      close.positionY = 100;
  
      // UI has a different way of registering OnClick support
      close.onClick = new OnClick((): void => {
        this.container.visible = false;
      });
    }
  }