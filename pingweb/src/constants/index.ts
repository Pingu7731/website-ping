import catPic from "../images/cat.png"
import foshuniapic from "../images/foshunia.png"
import yopte from "../images/yopte.png"
import bunny from "../images/bunny.png"

export const names = [
    { name: "Ping", },
    // {name: "Ping",imgPath: ""},
    { name: "Pingu" },
    { name: "Pong" },
    { name: "Pingi" },
    { name: "Pingy" },
]

export const counterItems = [
    { value: 10, suffix: "+", label: "Testing" },
    { value: 130, suffix: "+", label: "Testing" },
    { value: 10333, suffix: "+", label: "Testing" },
    { value: 1022, suffix: "+", label: "Testing" }
]
export const modelName = [

    { img: catPic, pos: "object-[42%_20%]", name: "Chalo", desc: "The most recent one in VRChat!" },
    { img: foshuniapic, pos: "object-[40%_20%]", name: "Foshunia", desc: "The one you will see at my stream" },
    { img: yopte, pos: "", name: "Yopte", desc: "Sometimes I use this too ! :3" },
    { img: bunny, pos: "object-[37%_0%]", name: "Yue", desc: "I rarely use this, but remember say hi :D" }

]

export const navLinks = [
    { names: "Models", link: "#Models" },
    { names: "Random", link: "#Random" },
    { names: "Test", link: "#Test" },
    { names: "", link: "#" },
]
