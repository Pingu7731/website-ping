import catPic from "../images/cat.webp"
import foshuniapic from "../images/foshunia.webp"
import yopte from "../images/yopte.webp"
import bunny from "../images/bunny.webp"
import twitch from "../images/iconsL/twitch.webp"
import osu from "../images/iconsL/osu.png"
import twitter from "../images/iconsL/twitter.jpg"
import discord from "../images/iconsL/discord.png"
import tiktok from "../images/iconsL/tiktok.jpg"
import bluesky from "../images/iconsL/bluesky.png"
import tetrioBlackwhite from "../images/iconsL/tetrioBlackwhite.png"
import firstMadethreeDModel from "../images/MileStoneSS/firstMadethreeDModel.webp"
import fbt from "../images/MileStoneSS/fbt.webp"
import foshunia from "../images/MileStoneSS/foshunia.webp"
import foshuniafirst from "../images/MileStoneSS/foshuniafirst.webp"
import live2d from "../images/MileStoneSS/live2d.webp"
import mamehinata from "../images/MileStoneSS/mamehinata.webp"
import wolfVtube from "../images/MileStoneSS/wolfVtube.webp"
import BongoCat from "../images/MileStoneSS/BongoCat.webp"
import vrc from "../images/MileStoneSS/vrc.webp"
import longHairHuman from "../images/MileStoneSS/longHairHuman.webp"
import TBContinued from "../images/MileStoneSS/TBC.png"

export const names = [
    { name: "Ping", },
    // {name: "Ping",imgPath: ""},
    { name: "Pingu" },
    { name: "Pong" },
    { name: "Pingi" },
    { name: "Pingy" },
]

export const counterItems = [
    { value: 10, suffix: "+", label: "Testing1" },
    { value: 130, suffix: "+", label: "Testing2" },
    { value: 10333, suffix: "+", label: "Testing3" },
    { value: 1022, suffix: "+", label: "Testing4" }
]
export const modelName = [

    { img: catPic, pos: "object-[42%_20%]", name: "Chalo", desc: "The most recent one in VRChat!", links: "https://booth.pm/zh-tw/items/5201759" },
    { img: foshuniapic, pos: "object-[40%_20%]", name: "Foshunia", desc: "The one you will see at my stream", links: "https://booth.pm/zh-tw/items/4580093" },
    { img: yopte, pos: "", name: "Yopte", desc: "Sometimes I use this too ! :3", links: "https://booth.pm/zh-tw/items/5385453" },
    { img: bunny, pos: "object-[37%_0%]", name: "Yue", desc: "I rarely use this, but remember say hi :D", links: "https://booth.pm/zh-tw/items/7112028" }

]

export const navLinks = [
    { names: "Models", link: "#Models" },
    { names: "Milestones", link: "#milestones" },
    { names: "Socials", link: "#Socials" },
    { names: "", link: "#" },
]

export const iconsList = [
    { imgPath: twitch },
    { imgPath: osu },
    { imgPath: twitter },
    { imgPath: discord },
    { imgPath: tiktok },
    { imgPath: bluesky },
    { imgPath: tetrioBlackwhite },
]

export const milestoneCard = [
    { imgPath: wolfVtube, desc: "First model that I used for Vtubing,it was free from FaceRig lmaoaoaoao ", title: "First stream! ", date: "2020/11/30", },
    { imgPath: BongoCat, desc: "This was only used when im playing Osu or when my old laptop couldnt handle the game much", title: "The Bongo", date: "2020 December" },
    { imgPath: live2d, desc: "The Live2D I made, it only lasted for two weeks and I abandoned him XD", title: "First Live2D Model", date: "Somewhere head of 2021 I forgot" },
    { imgPath: firstMadethreeDModel, desc: "I discovered Vroid Studio, starting to try making my own avatar, theres no premade hair that time at the old vroid,thats why the hair is very scuffed.", title: "The 3D Era Starts Here", date: "2021 January" },
    { imgPath: longHairHuman, desc: "Vroid Studio had a update tha you can just customize character by clicking those presets, so I reworked the model with a new hair! Its gonna be long hair because i like it >:3", title: "The Long Hair Ping", date: "2021 December" },
    { imgPath: mamehinata, desc: "This is where I learned that I can customize a VRChat AVI and export it to .VRM format for Vtubing. It got swapped due to some people saying it doesnt really fit my voice x3", title: "The Chibi Ping", date: "2023 January" },
    { imgPath: foshuniafirst, desc: "Im not a furry. Im not a furry. Im not a furry. Im not a furry. Im not a furry. Im not a furry. Im not a furry. Im not a furry. Im not a furry. Im not a furry. Im not a furry. Im not a furry. Im not a furry. Im not a furry. Im not a furry. Im not a furry. Im not a furry. ", title: "Discovered a Furry Model", date: "2024 January" },
    { imgPath: vrc, desc: "Starting to stream VRChat on my stream in VR with New PC! (I starved two month for that lololol, and my VR headset was broken so I have to bought a new one as well D: )  ", title: "VRChat Streams Added To List  ", date: "2024 March" },
    { imgPath: foshunia, desc: "Discoverd VNyan ,swapped from VSeeFace to VNyan for better interaction on stream. With more new reedeems, more fun ", title: "New Cloths for Ping", date: "Mid 2025 I think" },
    { imgPath: fbt, desc: "Bought full body tracking, it was a pretty nice deal so I ordered it at the midnight (It was an accident trust trust) ", title: "Full Body Tracking Added", date: "2026 March" },
    { imgPath: TBContinued, desc: "The Journey Keep Going !", title: "To Be Continued", date: "Soon™" },
]

export const socialIcons = [
    //rotation [上下，左右，正面水平旋轉]
    { name: "Discord", iconPath: "/models/discordIcon.glb", scale: 1.5, rotation: [-0.2, 0.1, 0.1] as const },
    { name: "Facebook", iconPath: "/models/facebookIcon.glb", scale: 1.5, rotation: [-0.1, -0.2, 0] as const },
    // { name: "GitHub", iconPath: "/models/githubIcon.glb", scale: 1.5, rotation: [-0.2, -0.2, -0.1] as const },
    // { name: "Reddit", iconPath: "/models/redditIcon.glb", scale: 1.5, rotation: [-0.1, -0.15, 0] as const },
    { name: "TikTok", iconPath: "/models/tiktokIcon.glb", scale: 1.5, rotation: [-0.2, 0.2, 0] as const },
    { name: "Twitch", iconPath: "/models/twitchIcon.glb", scale: 1.5, rotation: [-0.1, 0.25, 0] as const },
    { name: "YouTube", iconPath: "/models/youtubeBlackIcon.glb", scale: 1.5, rotation: [-0.2, -0.1, 0] as const },

]