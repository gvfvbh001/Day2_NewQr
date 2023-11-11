class newQr{
    constructor(){
        this.lineClassPos();
        this.update();
    }
    lineClassPos(){
        this.colorBackground = document.getElementById("container_tools-background-color");
        this.colorFont = document.getElementById("container_tools-element-color");
        this.sizeQr = document.querySelectorAll("#container_size");
        this.btn = document.getElementById("container_input-btn");
        this.input = document.querySelector(".container_input input");
        this.Qrcode = document.querySelector(".container_Qrcode");
        this.WIDTH;
        this.HEIGHT;
    }
    update(){
        this.listenEvent();
    }
    // lấy các data của các sự kiện 
    inputColorBg(e){
        console.log(e.value);
        let colorBackground = e.value;
        this.Qrcode.style.background = colorBackground;
    }
    inputText(e){
        let title = e.value;
        return title;
    }
    // tạo qrcode 
    NewQrCode(e,x,y){
        let create = new QRCode(this.Qrcode,{
            text: this.inputText(e),
            width: x,
            height:y
        });
        console.log(create);
    }   
    // nghe sự kiện 
    listenEvent(){
        this.colorBackground.addEventListener("change",()=>{
            this.inputColorBg(this.colorBackground);
        });
        this.sizeQr.forEach((item)=>{
            item.addEventListener("change",()=>{
                console.log(item.value);
                let newValue = item.value;
                if(newValue == "value1"){
                    this.WIDTH = 100;
                    this.HEIGHT = 100;
                }else if(newValue == "value2"){
                    this.WIDTH = 200;
                    this.HEIGHT = 200;
                }else if(newValue == "value3"){
                    this.WIDTH = 300;
                    this.HEIGHT = 300;
                }else if(newValue == "value4"){
                    this.WIDTH = 400;
                    this.HEIGHT = 400;
                }else if(newValue == "value5"){
                    this.WIDTH = 500;
                    this.HEIGHT = 500;
                }
            });
        });
        this.btn.addEventListener("click",()=>{
            this.NewQrCode(this.input , this.WIDTH, this.HEIGHT);
        })
    }
}
const Qr = new newQr();