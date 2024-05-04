interface rectStyle {
  x: number;
  y: number;
  align: string;
  size: number;
}

export class canvasUtilList {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  setValue(style: rectStyle, text: string, context: string) {
    //  当前文本的宽度
    let valWidth = this.getTextLength(style, text);
    style.x = style.x || 0;
    style.y = style.y || 0;
    style = this.setTextAlign(style, valWidth);
    return style;
  }

  getTextLength(style: rectStyle, text: any) {
    text = String(text);
    var text = text.split("");
    var width = 0;

    text.forEach((item: any) => {
      if (/[a-zA-Z]/.test(item)) {
        width += 7;
      } else if (/[0-9]/.test(item)) {
        width += 5.5;
      } else if (/\./.test(item)) {
        width += 2.7;
      } else if (/-/.test(item)) {
        width += 3.25;
      } else if (/[\u4e00-\u9fa5]/.test(item)) {
        //中文匹配
        width += 10;
      } else if (/\(|\)/.test(item)) {
        width += 3.73;
      } else if (/\s/.test(item)) {
        width += 2.5;
      } else if (/%/.test(item)) {
        width += 8;
      } else {
        width += 10;
      }
    });
    return (width * style.size) / 10;
  }

  setTextAlign(style: rectStyle, valWidth: number) {
    if (style.align === "center") {
      style.x = (this.width - valWidth) / 2 + style.x;
    }
    if (style.align === "left") {
      style.x = style.x;
    }
    if (style.align === "right") {
      style.x = this.width - valWidth - style.y;
    }
    return style;
    }
    
    
}
